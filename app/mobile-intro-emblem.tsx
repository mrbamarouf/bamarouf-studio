const INTRO_EMBLEM_SOURCE = "/brand/logo-intro-emblem.svg";

export function MobileIntroEmblem() {
  return (
    <svg
      className="m-intro-emblem"
      viewBox="0 0 1188 1572"
      role="img"
      aria-labelledby="mobile-intro-emblem-title"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="mobile-intro-emblem-title">BAMAROUF STUDIO, بامعروف استديو</title>
      <defs>
        <linearGradient id="mobile-intro-ivory-material" x1="0.12" y1="0.08" x2="0.88" y2="0.92">
          <stop offset="0" stopColor="#c7baaa" />
          <stop offset="0.42" stopColor="#f0e7db" />
          <stop offset="0.7" stopColor="#e4d8c9" />
          <stop offset="1" stopColor="#b9aa97" />
        </linearGradient>
        <linearGradient id="mobile-intro-gold-material" x1="0.08" y1="0.18" x2="0.9" y2="0.82">
          <stop offset="0" stopColor="#8f6134" />
          <stop offset="0.38" stopColor="#d3a468" />
          <stop offset="0.67" stopColor="#c18c50" />
          <stop offset="1" stopColor="#8f5e30" />
        </linearGradient>
        <linearGradient id="mobile-intro-raking-light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f7eddf" stopOpacity="0" />
          <stop offset="0.42" stopColor="#f7eddf" stopOpacity="0.08" />
          <stop offset="0.56" stopColor="#fff8ee" stopOpacity="0.34" />
          <stop offset="0.7" stopColor="#f7eddf" stopOpacity="0.06" />
          <stop offset="1" stopColor="#f7eddf" stopOpacity="0" />
        </linearGradient>
        <clipPath id="mobile-intro-emblem-clip">
          <use href={`${INTRO_EMBLEM_SOURCE}#intro-emblem-base`} />
        </clipPath>
      </defs>

      <g className="m-intro-emblem-relief" aria-hidden="true">
        <use href={`${INTRO_EMBLEM_SOURCE}#intro-emblem-base`} />
      </g>
      <g className="m-intro-emblem-ivory" aria-hidden="true">
        <use href={`${INTRO_EMBLEM_SOURCE}#intro-emblem-base`} />
      </g>
      <g className="m-intro-emblem-gold" aria-hidden="true">
        <use href={`${INTRO_EMBLEM_SOURCE}#intro-emblem-gold`} />
      </g>
      <g clipPath="url(#mobile-intro-emblem-clip)" aria-hidden="true">
        <rect
          className="m-intro-emblem-raking-light"
          x="-520"
          y="-80"
          width="420"
          height="1740"
          fill="url(#mobile-intro-raking-light)"
        />
      </g>
    </svg>
  );
}
