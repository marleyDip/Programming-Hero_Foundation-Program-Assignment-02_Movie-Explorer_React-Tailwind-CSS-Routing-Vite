import {
  CalendarDays,
  Clapperboard,
  Clock3,
  MonitorPlay,
  Star,
  Tag,
  Tv,
  X,
} from "lucide-react";
import { useEffect } from "react";

export default function MovieModal({ movie, onClose }) {
  // Close modal with Escape key
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="movie-modal-title"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className=" relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/40"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close movie details"
          className="
            group absolute right-3 top-3 z-30
            grid size-10 place-items-center
            rounded-full
            border border-white/10
            bg-black/50
            text-foreground/80
            shadow-lg shadow-black/20
            backdrop-blur-md
            transition-all duration-200 cursor-pointer

            hover:border-primary/40
            hover:bg-primary
            hover:text-background
            hover:rotate-90
            hover:shadow-lg
            hover:shadow-primary/20

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary/60
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
          "
        >
          <X
            size={19}
            strokeWidth={2}
            className="transition-transform duration-200"
          />
        </button>

        {/* Backdrop */}
        {movie.backdrop && (
          <div className="relative shrink-0 aspect-16/8 w-full overflow-hidden bg-background">
            <img
              src={movie.backdrop}
              alt={`${movie.title} backdrop`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Dark cinematic overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/30 to-black/10" />

            {/* Side vignette */}
            <div className="absolute inset-0 bg-linear-to-r from-surface/40 via-transparent to-black/20" />

            {/* Rating */}
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3.5 py-2 font-body text-sm font-semibold text-foreground shadow-lg shadow-black/20 backdrop-blur-md">
              <Star
                size={15}
                strokeWidth={2}
                className="fill-primary text-primary"
              />

              <span>{movie.rating ?? "N/A"}</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto">
          <div className="p-5 sm:p-7 md:p-8">
            {/* Title */}
            <div className="pr-10">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <Clapperboard size={16} strokeWidth={1.8} />

                <span className="font-body text-xs font-semibold uppercase tracking-[0.16em]">
                  Movie Details
                </span>
              </div>

              <h2
                id="movie-modal-title"
                className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {movie.title}
              </h2>
            </div>

            {/* Metadata */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              <MetaItem
                icon={<CalendarDays size={15} />}
                label="Release"
                value={movie.year}
              />

              {movie.runtime && (
                <MetaItem
                  icon={<Clock3 size={15} />}
                  label="Runtime"
                  value={`${movie.runtime} min`}
                />
              )}

              <MetaItem
                icon={<Tv size={15} />}
                label="Network"
                value={movie.network}
              />

              <MetaItem
                icon={<MonitorPlay size={15} />}
                label="Status"
                value={movie.status}
              />
            </div>

            {/* Genres */}
            {movie.genres?.length > 0 && (
              <div className="mt-6">
                <div className="mb-2.5 flex items-center gap-2">
                  <Tag size={15} strokeWidth={1.8} className="text-primary" />

                  <span className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Genres
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-border/80 bg-background/50 px-3 py-1.5 font-body text-xs font-medium text-foreground/80 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="my-6 h-px bg-border/70" />

            {/* Overview */}
            <section>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Overview
              </h3>

              <p className="mt-3 font-body text-sm leading-7 text-muted sm:text-[15px]">
                {movie.summary || "No overview available for this title."}
              </p>
            </section>

            {/* Bottom Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="
                group mt-8
                flex w-full
                items-center justify-center gap-2.5
                rounded-xl
                border border-primary/50
                bg-primary
                px-5 py-3
                font-body text-sm font-semibold
                text-background
                shadow-lg shadow-primary/10
                transition-all duration-200 cursor-pointer

                hover:-translate-y-0.5
                hover:bg-primary/90
                hover:shadow-xl
                hover:shadow-primary/20

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/60
                focus-visible:ring-offset-2
                focus-visible:ring-offset-surface
              "
            >
              <X
                size={17}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:rotate-90"
              />

              <span>Close Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Metadata Item */
function MetaItem({ icon, label, value }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-3 py-2">
      <span className="shrink-0 text-primary">{icon}</span>

      <div className="min-w-0">
        <p className="font-body text-[10px] uppercase tracking-wider text-muted">
          {label}
        </p>

        <p className="truncate font-body text-xs font-medium text-foreground">
          {value || "N/A"}
        </p>
      </div>
    </div>
  );
}
