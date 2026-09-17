import { Clapperboard } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/50 shadow-soft backdrop-blur-xl supports-backdrop-filter:bg-background/30">
      {/* Logo */}
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="group flex items-center gap-2 font-display text-xl font-bold text-foreground"
        >
          <span className="grid w-8 h-8 place-items-center rounded-lg shadow-soft bg-primary/85 text-surface transition-all duration-300 group-hover:-rotate-8 group-hover:scale-105">
            <Clapperboard size={24} />
          </span>
          MovieExplorer
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hidden font-body text-sm font-medium transition-colors sm:inline ${isActive ? "text-foreground" : "text-muted hover:text-foreground"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `rounded-sm border px-4 py-2 font-body text-sm font-semibold transition-all duration-200 ${isActive ? "border-primary bg-primary text-surface" : "border-primary text-primary hover:bg-primary hover:text-background"}`
            }
          >
            Movies
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
