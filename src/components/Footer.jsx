import { Clapperboard, Code2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          {/* Brand */}
          <div className="group">
            <a
              href="/"
              className="flex items-center justify-center gap-2 sm:justify-start"
            >
              <span
                className="
                  grid size-9 place-items-center rounded-lg
                  bg-primary/10 text-primary
                  ring-1 ring-primary/20
                  transition-all duration-300
                  group-hover:bg-primary
                  group-hover:text-background
                  group-hover:shadow-lg
                  group-hover:shadow-primary/20
                "
              >
                <Clapperboard size={18} />
              </span>

              <span
                className="
                  font-display text-lg font-bold
                  text-foreground
                  transition-colors duration-300
                  group-hover:text-primary
                "
              >
                MovieExplorer
              </span>
            </a>

            <p className="mt-2 font-body text-xs text-muted">
              Discover your next favorite watch.
            </p>
          </div>

          {/* Copyright */}
          <div className="font-body text-sm text-muted">
            <p>© 2026 MovieExplorer. Show data courtesy of TVMaze.</p>

            <p className="font-body text-xs font-medium text-muted/70 mt-1 md:mt-1.5">
              Built with React, Tailwind CSS, React Router, Vite & TVMaze API.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/marleyDip/Programming-Hero_Foundation-Program-Assignment-02_Movie-Explorer_React-Tailwind-CSS-Routing-Vite"
              target="_blank"
              rel="noreferrer"
              className="
                group/link inline-flex items-center gap-2
                rounded-lg border border-border
                bg-background/40 px-3 py-2
                font-body text-sm text-muted
                transition-all duration-200
                hover:border-primary/40
                hover:bg-primary/10
                hover:text-primary
              "
            >
              <Code2
                size={15}
                className="transition-transform duration-200 group-hover/link:scale-110"
              />
              GitHub
            </a>

            <a
              href="https://www.tvmaze.com/api"
              target="_blank"
              rel="noreferrer"
              className="
                group/link inline-flex items-center gap-2
                rounded-lg border border-border
                bg-background/40 px-3 py-2
                font-body text-sm text-muted
                transition-all duration-200
                hover:border-primary/40
                hover:bg-primary/10
                hover:text-primary
              "
            >
              API
              <ExternalLink
                size={14}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Developer */}
        <div className="mt-7 border-t border-border/50 pt-4 text-center">
          <p className="">
            Developed by{" "}
            <a
              href="https://marleydip.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="
                relative font-medium text-foreground
                transition-colors duration-200
                hover:text-primary

                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-full
                after:origin-right
                after:scale-x-0
                after:bg-primary
                after:transition-transform
                after:duration-300
                after:content-['']

                hover:after:origin-left
                hover:after:scale-x-100
              "
            >
              Md. Sofian Hasan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
