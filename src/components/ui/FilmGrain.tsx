interface FilmGrainProps {
  intensity?: number;
  className?: string;
}

// Static ID to avoid client-side JavaScript
const GRAIN_ID = "film-grain-filter";

export function FilmGrain({ intensity = 0.4, className = "" }: FilmGrainProps) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Film grain texture</title>
        <filter id={GRAIN_ID}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter={`url(#${GRAIN_ID})`}
          opacity={intensity}
        />
      </svg>
    </div>
  );
}
