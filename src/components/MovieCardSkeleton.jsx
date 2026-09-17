export default function MovieCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-surface/60 shadow-lg shadow-black/10 backdrop-blur-xl">
      {/* Poster */}
      <div className="aspect-2/3 animate-pulse bg-white/5" />

      {/* Content */}
      <div className="space-y-3 p-4">
        <div className="h-5 w-3/4 animate-pulse rounded bg-white/5" />

        <div className="h-4 w-1/2 animate-pulse rounded bg-white/5" />

        <div className="h-9 w-full animate-pulse rounded-lg bg-white/5" />
      </div>
    </div>
  );
}
