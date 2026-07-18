const APPROVED_INTRO_MARK = "/brand/logo-intro-approved.svg";

export function MobileIntroMark() {
  return (
    <svg
      className="m-intro-mark"
      viewBox="0 0 650 720"
      role="img"
      aria-labelledby="approved-mobile-intro-mark-title"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="approved-mobile-intro-mark-title">BAMAROUF STUDIO</title>
      <defs>
        <linearGradient id="intro-limestone" x1="0.08" y1="0.04" x2="0.92" y2="0.96">
          <stop offset="0" stopColor="#9d876e" />
          <stop offset="0.34" stopColor="#f1e6d7" />
          <stop offset="0.62" stopColor="#d9c7b1" />
          <stop offset="1" stopColor="#8d7358" />
        </linearGradient>
        <linearGradient id="intro-bronze" x1="0.06" y1="0.1" x2="0.94" y2="0.9">
          <stop offset="0" stopColor="#805127" />
          <stop offset="0.38" stopColor="#d5a361" />
          <stop offset="0.58" stopColor="#efc888" />
          <stop offset="1" stopColor="#8d5829" />
        </linearGradient>
      </defs>

      <g className="m-intro-mark-relief" aria-hidden="true">
        <use href={`${APPROVED_INTRO_MARK}#approved-intro-full`} />
      </g>
      <g className="m-intro-mark-stone" aria-hidden="true">
        <use href={`${APPROVED_INTRO_MARK}#approved-intro-dark`} />
      </g>
      <g className="m-intro-mark-bronze" aria-hidden="true">
        <use href={`${APPROVED_INTRO_MARK}#approved-intro-gold`} />
      </g>
    </svg>
  );
}
