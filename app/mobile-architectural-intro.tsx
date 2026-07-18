"use client";

import { useEffect } from "react";
import type { Language } from "./content";
import { mobileContent } from "./mobile-content";

const MOBILE_QUERY = "(max-width: 767px)";
const APPROVED_INTRO_MARK = "/brand/logo-intro-approved.svg";

function ArchitecturalIdentity() {
  return (
    <svg
      className="ci-identity-mark"
      viewBox="0 0 650 720"
      role="img"
      aria-labelledby="ci-identity-title"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="ci-identity-title">BAMAROUF STUDIO</title>
      <defs>
        <linearGradient id="ci-stone-material" x1="0.08" y1="0.04" x2="0.92" y2="0.96">
          <stop offset="0" stopColor="#88745e" />
          <stop offset="0.38" stopColor="#eadfce" />
          <stop offset="0.66" stopColor="#cbb89f" />
          <stop offset="1" stopColor="#725b43" />
        </linearGradient>
        <linearGradient id="ci-bronze-material" x1="0.05" y1="0.08" x2="0.95" y2="0.92">
          <stop offset="0" stopColor="#74431f" />
          <stop offset="0.42" stopColor="#c99251" />
          <stop offset="0.62" stopColor="#e1b574" />
          <stop offset="1" stopColor="#77451f" />
        </linearGradient>
      </defs>

      <g className="ci-identity-relief" aria-hidden="true">
        <use href={`${APPROVED_INTRO_MARK}#approved-intro-full`} />
      </g>
      <g className="ci-identity-stone" aria-hidden="true">
        <use href={`${APPROVED_INTRO_MARK}#approved-intro-dark`} />
      </g>
      <g className="ci-identity-bronze" aria-hidden="true">
        <use href={`${APPROVED_INTRO_MARK}#approved-intro-gold`} />
      </g>
    </svg>
  );
}

export function MobileArchitecturalIntro({
  language,
  active,
  onComplete,
}: {
  language: Language;
  active: boolean;
  onComplete: () => void;
}) {
  const t = mobileContent[language];

  useEffect(() => {
    if (!active || !window.matchMedia(MOBILE_QUERY).matches) return;

    document.body.classList.add("mobile-intro-open");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(onComplete, reducedMotion ? 1400 : 12000);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("mobile-intro-open");
    };
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <div className="cinematic-intro" role="dialog" aria-modal="true" aria-label={t.intro.label}>
      <div className="ci-black" aria-hidden="true" />
      <div className="ci-world" aria-hidden="true">
        <div className="ci-camera">
          <div className="ci-architecture" />
          <div className="ci-corridor-shadow" />
          <div className="ci-identity-surface">
            <ArchitecturalIdentity />
          </div>
          <div className="ci-doorway">
            <span className="ci-door ci-door-left" />
            <span className="ci-door ci-door-right" />
            <span className="ci-door-gap" />
            <span className="ci-door-lock" />
          </div>
          <div className="ci-floor-spill" />
        </div>
        <div className="ci-vignette" />
      </div>
      <button className="ci-skip" type="button" onClick={onComplete}>
        {t.intro.skip}
      </button>
    </div>
  );
}
