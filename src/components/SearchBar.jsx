import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="group relative mx-auto w-full max-w-2xl">
      {/* Search Icon */}
      <Search
        size={20}
        strokeWidth={1.8}
        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-muted transition-colors duration-200 group-focus-within:text-primary"
      />

      {/* Search Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or series..."
        aria-label="Search for a movie or series"
        className="
          w-full

          rounded-xl
          border border-border/80
          bg-surface/70
          px-12 py-3.5 pr-12

          font-body text-sm text-foreground
          placeholder:text-muted/70

          shadow-lg shadow-black/10
          backdrop-blur-xl

          outline-none
          transition-all duration-300

          hover:border-primary/30
          hover:bg-surface/90

          focus:border-primary/60
          focus:bg-surface
          focus:shadow-lg
          focus:shadow-primary/10
          focus:ring-2
          focus:ring-primary/10

          sm:text-base
        "
      />

      {/* Clear Button */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted transition-all duration-200 hover:bg-primary/10 hover:text-primary"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
