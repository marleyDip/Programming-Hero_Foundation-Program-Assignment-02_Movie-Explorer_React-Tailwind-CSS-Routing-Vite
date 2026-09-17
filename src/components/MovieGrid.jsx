import { SearchX } from "lucide-react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

export default function MovieGrid({ movies, onSeeDetails, isLoading = false }) {
  const gridClasses =
    "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  // Loading State
  if (isLoading) {
    return (
      <div className={gridClasses} role="status" aria-label="Loading Movies">
        {Array.from({ length: 8 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Empty State
  if (movies.length === 0) {
    return (
      <div className="mx-auto mt-16 max-w-md text-center">
        <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl border border-border/70 bg-surface/70 text-primary shadow-lg shadow-black/10 backdrop-blur-xl">
          <SearchX size={26} strokeWidth={1.7} aria-hidden="true" />
        </div>

        <h3 className="font-display text-xl font-semibold text-foreground">
          No shows found
        </h3>

        <p className="mt-2 font-body text-sm leading-6 text-muted">
          We couldn't find anything matching your search. Try a different movie
          or series title.
        </p>
      </div>
    );
  }

  // Movies Grid
  return (
    <div className={gridClasses}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSeeDetails={onSeeDetails} />
      ))}
    </div>
  );
}
