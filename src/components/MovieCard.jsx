import { CalendarDays, ChevronRight, Star } from "lucide-react";

export default function MovieCard({ movie, onSeeDetails }) {
  // console.log(movie);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border/70 bg-surface/70 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
      {/* Poster */}
      <div className="relative aspect-2/3 w-full overflow-hidden bg-background">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Bottom cinematic gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background/90 via-background/30 to-transparent opacity-80" />

        {/* Hover glow */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Rating Badge */}
        <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-background/75 px-2.5 py-1.5 font-body text-xs font-semibold text-foreground shadow-lg shadow-black/20 backdrop-blur-md">
          <Star
            size={13}
            strokeWidth={2}
            className="fill-primary text-primary"
          />

          <span>{movie.rating ?? "N/A"}</span>
        </div>

        {/* Year */}
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 font-body text-xs font-medium text-foreground/90">
          <CalendarDays size={13} strokeWidth={1.8} />
          <span>{movie.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3
          className="line-clamp-1 font-display text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary"
          title={movie.title}
        >
          {movie.title}
        </h3>

        {/* Genres */}
        {movie.genres?.length > 0 && (
          <div className="mt-2 flex min-w-0 items-center gap-1.5 overflow-hidden">
            {movie.genres.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className="shrink-0 rounded-md border border-border/70 bg-background/40 px-2 py-1 font-body text-[11px] font-medium text-muted"
              >
                {genre}
              </span>
            ))}
          </div>
        )}

        {/* Details Button */}
        <button
          type="button"
          onClick={() => onSeeDetails(movie)}
          className="
            mt-5 flex w-full items-center justify-between
            rounded-lg
            border border-primary/60
            bg-primary/5
            px-3.5 py-2.5
            font-body text-sm font-semibold
            text-primary
            transition-all duration-200 cursor-pointer

            hover:bg-primary
            hover:text-background
            hover:shadow-md
            hover:shadow-primary/10

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary/50
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
          "
        >
          <span>See details</span>

          <ChevronRight
            size={17}
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </article>
  );
}
