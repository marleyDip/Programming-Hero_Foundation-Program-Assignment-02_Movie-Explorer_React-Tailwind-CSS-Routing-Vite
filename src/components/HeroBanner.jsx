import { useNavigate } from "react-router-dom";
import cinemaBg from "../assets/cinema.avif";

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-position-[center_30%]"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at 50% -10%,
              rgba(232, 179, 74, 0.18),
              transparent 55%
            ),
            linear-gradient(
              180deg,
              rgba(20, 16, 15, 0.55) 0%,
              rgba(20, 16, 15, 0.88) 55%,
              #14100f 100%
            ),
            url(${cinemaBg})
          `,
        }}
      />

      {/* Subtle ambient glow */}
      <div
        className="
          pointer-events-none
          absolute -top-32 left-1/2 -z-10
          h-72 w-72
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      {/* Content */}
      <div
        className="
          mx-auto flex max-w-6xl flex-col items-center
          px-6 py-24 text-center
          sm:py-32
          lg:py-40
        "
      >
        <span
          className="
            mb-4
            font-body text-sm font-medium
            tracking-[0.18em] uppercase
            text-muted
          "
        >
          Now showing, worldwide
        </span>

        <h1
          className="
            max-w-3xl
            font-display text-4xl font-extrabold
            leading-[1.05] tracking-tight
            text-foreground
            sm:text-6xl
            lg:text-7xl
          "
        >
          Discover your next{" "}
          <span className="text-primary">favorite watch</span>
        </h1>

        <p
          className="
            mt-6 max-w-2xl
            font-body text-base leading-7
            text-muted
            sm:text-lg
          "
        >
          Search thousands of series and films, compare ratings, and dig into
          the story before you press play.
        </p>

        <button
          type="button"
          onClick={() => navigate("/movies")}
          className="
            mt-9
            rounded-sm
            bg-primary
            px-8 py-3
            font-body text-sm font-bold
            tracking-wide
            text-background
            shadow-lg shadow-primary/20
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-primary/90
            hover:shadow-xl hover:shadow-primary/25
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background cursor-pointer
          "
        >
          Explore now
        </button>
      </div>
    </section>
  );
}
