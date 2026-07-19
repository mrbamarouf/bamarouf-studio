"use client";

import Image from "next/image";
import { useEffect } from "react";
import styles from "./official-intro.module.css";

const APPROVED_INTRO_LOGO = "/brand/logo-intro-approved.svg";

function ArchitecturalIdentity() {
  return (
    <svg
      className={styles.identityMark}
      viewBox="0 0 650 720"
      role="img"
      aria-labelledby="official-intro-logo-title"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="official-intro-logo-title">BAMAROUF STUDIO</title>
      <defs>
        <linearGradient id="official-intro-stone" x1="0.12" y1="0.04" x2="0.88" y2="0.96">
          <stop offset="0" stopColor="#8f7962" />
          <stop offset="0.34" stopColor="#f0e4d3" />
          <stop offset="0.68" stopColor="#c9b59c" />
          <stop offset="1" stopColor="#755a3f" />
        </linearGradient>
        <linearGradient id="official-intro-bronze" x1="0.08" y1="0.08" x2="0.92" y2="0.92">
          <stop offset="0" stopColor="#75451f" />
          <stop offset="0.38" stopColor="#bd8145" />
          <stop offset="0.62" stopColor="#e0b675" />
          <stop offset="1" stopColor="#71401f" />
        </linearGradient>
      </defs>
      <g className={styles.identityRelief} aria-hidden="true">
        <use href={`${APPROVED_INTRO_LOGO}#approved-intro-full`} />
      </g>
      <g className={styles.identityStone} aria-hidden="true">
        <use href={`${APPROVED_INTRO_LOGO}#approved-intro-dark`} />
      </g>
      <g className={styles.identityBronze} aria-hidden="true">
        <use href={`${APPROVED_INTRO_LOGO}#approved-intro-gold`} />
      </g>
    </svg>
  );
}

export function OfficialIntro({
  active,
  label,
  onComplete,
}: {
  active: boolean;
  label: string;
  onComplete: () => void;
}) {
  useEffect(() => {
    if (!active) return;

    document.body.classList.add("official-intro-open");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(onComplete, reducedMotion ? 1200 : 7800);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onComplete();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("official-intro-open");
    };
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <div className={styles.intro} role="dialog" aria-modal="true" aria-label={label}>
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.camera}>
          <Image
            className={styles.architecture}
            src="/architecture/intro/official-entrance.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.stoneResponse} />
          <div className={styles.portalAura} />
          <div className={styles.portal}>
            <div className={styles.interior}>
              <div className={styles.threeWorldLight} />
              <div className={styles.mergedLight} />
              <div className={styles.identity}>
                <ArchitecturalIdentity />
              </div>
            </div>
            <div className={`${styles.door} ${styles.doorLeft}`} />
            <div className={`${styles.door} ${styles.doorRight}`} />
            <i className={`${styles.lightLeak} ${styles.lightLeakGold}`} />
            <i className={`${styles.lightLeak} ${styles.lightLeakBlush}`} />
            <i className={`${styles.lightLeak} ${styles.lightLeakGreen}`} />
          </div>
          <div className={styles.floorReflection} />
        </div>
        <div className={styles.vignette} />
      </div>
      <div className={styles.black} aria-hidden="true" />
    </div>
  );
}
