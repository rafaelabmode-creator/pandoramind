/** Marca da PandoraMind: um "cofre da mente" que se abre em luz. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="PandoraMind">
      <defs>
        <linearGradient id="pm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#pm-grad)" />
      {/* Círculo/mente com abertura de luz */}
      <path
        d="M20 9c-6.1 0-11 4.9-11 11 0 4.2 2.3 7.8 5.8 9.7l1.2-3.1A8 8 0 1 1 28 20h3.9C31.9 13.9 26.6 9 20 9Z"
        fill="#ffffff"
        opacity="0.95"
      />
      <circle cx="27.5" cy="20" r="2.7" fill="#ffffff" />
      <circle cx="20" cy="20" r="2.3" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}
