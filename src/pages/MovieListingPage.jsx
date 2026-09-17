import { AlertCircle, Clapperboard, LoaderCircle, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllShows, searchShows } from "../api/tvmaze.js";
import MovieGrid from "../components/MovieGrid.jsx";
import MovieModal from "../components/MovieModal.jsx";
import SearchBar from "../components/SearchBar";

// Prevent an API request on every keystroke.
function useDebouncedValue(value, delayMs) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}

export default function MovieListingPage() {
  const [allShows, setAllShows] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // const [query, setQuery] = useState("");
  // const [selectedMovie, setSelectedMovie] = useState(null);
  const [status, setStatus] = useState("loading");
  const [searchStatus, setSearchStatus] = useState("idle");
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const selectedMovieId = searchParams.get("movie");

  const handleSeeDetails = (movie) => {
    setSearchParams({
      ...(query && { search: query }),
      movie: String(movie.id),
    });
  };

  const debouncedQuery = useDebouncedValue(query, 350);

  // Initial catalog load
  useEffect(() => {
    const controller = new AbortController();

    getAllShows({ signal: controller.signal })
      .then((shows) => {
        setAllShows(shows);
        setStatus("ready");
      })
      .catch((err) => {
        if (err.name === "AbortError") return;

        setError(err.message);
        setStatus("error");
      });

    return () => controller.abort();
  }, []);

  // Search when the debounced query changes
  useEffect(() => {
    const trimmedQuery = debouncedQuery.trim();

    if (!trimmedQuery) {
      return;
    }

    const controller = new AbortController();

    searchShows(trimmedQuery, {
      signal: controller.signal,
    })
      .then((results) => {
        setSearchResults(results);
        setSearchStatus("ready");
      })
      .catch((err) => {
        if (err.name === "AbortError") return;

        console.error("Search error:", err);
        setError(err.message);
        setSearchStatus("error");
      });

    return () => controller.abort();
  }, [debouncedQuery]);

  /* const moviesToShow = useMemo(
    () => (searchResults !== null ? searchResults : allShows),
    [searchResults, allShows],
  ); */

  // This calculation is extremely cheap. So don't used useMemo here.
  const isSearching = debouncedQuery.trim().length > 0;

  const moviesToShow = isSearching ? searchResults : allShows;

  const selectedMovie =
    moviesToShow.find((movie) => String(movie.id) === selectedMovieId) || null;

  const handleCloseModal = () => {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.delete("movie");

    setSearchParams(nextParams);
  };

  const isLoading = status === "loading" || searchStatus === "loading";

  return (
    <main className="min-h-[calc(100vh-72px)]">
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-border/60">
        {/* Subtle cinematic glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

          <div className="absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-12 pt-14 sm:pb-16 sm:pt-18">
          {/* Eyebrow */}
          <div className="mb-5 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm shadow-primary/5 backdrop-blur-md
              "
            >
              <Clapperboard size={14} strokeWidth={1.8} />
              Explore the collection
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              mx-auto max-w-3xl
              text-center
              font-display
              text-3xl font-bold
              leading-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            Browse shows &amp; movies
          </h1>

          <p
            className="
              mx-auto mt-4 max-w-2xl
              text-center
              font-body text-sm
              leading-6 text-muted
              sm:text-base
            "
          >
            Search through thousands of titles, discover new stories, and find
            something worth watching.
          </p>

          {/* Search */}
          <div className="mt-8">
            {/* <SearchBar value={query} onChange={setQuery} /> */}
            {/* <SearchBar
              value={query}
              onChange={(value) => {
                setQuery(value);
                setSearchStatus(value.trim() ? "loading" : "idle");
              }}
            /> */}

            <SearchBar
              value={query}
              onChange={(value) => {
                const trimmedValue = value.trim();

                setSearchParams(trimmedValue ? { search: value } : {});

                setSearchStatus(trimmedValue ? "loading" : "idle");
              }}
            />
          </div>

          {/* Search status */}
          {query.trim() && (
            <div className="mt-4 flex min-h-5 items-center justify-center gap-2 font-body text-xs text-muted">
              {searchStatus === "loading" ? (
                <>
                  <LoaderCircle
                    size={14}
                    className="animate-spin text-primary"
                  />
                  Searching for "{query.trim()}"...
                </>
              ) : searchStatus === "ready" ? (
                <>
                  <Search size={14} />
                  {moviesToShow.length}{" "}
                  {moviesToShow.length === 1 ? "result" : "results"} found
                </>
              ) : null}
            </div>
          )}
        </div>
      </section>

      {/* Movie Collection */}
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        {/* Section heading */}
        {!query.trim() && status === "ready" && (
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                TVMaze Collection
              </p>

              <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
                Discover something new
              </h2>
            </div>

            <span className="hidden rounded-full border border-border bg-surface/60 px-3 py-1 font-body text-xs text-muted sm:inline-flex">
              {allShows.length} titles
            </span>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="mx-auto mt-8 max-w-lg rounded-xl border border-accent/30 bg-accent/5 p-6 text-center backdrop-blur-md">
            <div className="mx-auto grid size-11 place-items-center rounded-full bg-accent/10 text-accent">
              <AlertCircle size={21} />
            </div>

            <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
              Unable to load shows
            </h2>

            <p className="mt-2 font-body text-sm leading-6 text-muted">
              {error || "Something went wrong while loading the collection."}
            </p>
          </div>
        )}

        {/* Grid */}
        {status !== "error" && (
          <MovieGrid
            movies={moviesToShow}
            // onSeeDetails={setSelectedMovie}
            onSeeDetails={handleSeeDetails}
            isLoading={isLoading}
          />
        )}
      </section>

      {/* Details Modal */}
      <MovieModal
        movie={selectedMovie}
        // onClose={() => setSelectedMovie(null)}
        onClose={handleCloseModal}
      />
    </main>
  );
}
