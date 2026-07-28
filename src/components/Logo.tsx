/** Marca da PandoraMind: a Caixa de Pandora que se abre em luz. */
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
      {/* luz escapando da caixa */}
      <circle cx="20" cy="12" r="1.7" fill="#ffffff" />
      <circle cx="14.5" cy="14.5" r="1.2" fill="#ffffff" opacity="0.85" />
      <circle cx="25.5" cy="14.5" r="1.2" fill="#ffffff" opacity="0.85" />
      {/* corpo da caixa */}
      <rect x="12" y="22" width="16" height="8" rx="1.6" fill="#ffffff" />
      <rect x="12" y="24.5" width="16" height="1.6" fill="#6d28d9" opacity="0.22" />
      {/* tampa aberta */}
      <path d="M11 22 L20 19 L29 22 L29 20.5 L20 17 L11 20.5 Z" fill="#ffffff" />
    </svg>
  );
}
