"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { Language } from "./content";
import {
  mobileContent,
  mobileDestinations,
  type MobileDestination,
} from "./mobile-content";

type SetLanguage = (language: Language) => void;
type EnterMobileDestination = (
  event: ReactMouseEvent<HTMLAnchorElement>,
  destination: MobileDestination,
) => void;

const MOBILE_QUERY = "(max-width: 767px)";

const mobileSceneImages = {
  tarik: "/architecture/mobile/tarik-portal.jpg",
  noor: "/architecture/mobile/noor-portal.jpg",
  khaled: "/architecture/mobile/khaled-portal.jpg",
} as const;

function MobileArrow({ rtl = false }: { rtl?: boolean }) {
  return <span className="m-arrow" aria-hidden="true">{rtl ? "←" : "→"}</span>;
}

function MobileIntro({
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
    const timer = window.setTimeout(onComplete, reducedMotion ? 1150 : 6800);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("mobile-intro-open");
    };
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <div className="m-intro" role="dialog" aria-modal="true" aria-label={t.intro.label}>
      <div className="m-intro-black" aria-hidden="true" />
      <div className="m-intro-architecture" aria-hidden="true">
        <div className="m-intro-image" />
        <div className="m-intro-frame">
          <div className="m-intro-interior" />
          <div className="m-intro-logo-light">
            <Image
              className="m-intro-logo"
              src="/brand/logo-intro-identity.png"
              alt=""
              width={1188}
              height={1572}
              priority
              unoptimized
            />
          </div>
          <div className="m-intro-door" />
          <div className="m-intro-edge" />
          <div className="m-intro-floor" />
        </div>
      </div>
      <button className="m-intro-skip" type="button" onClick={onComplete}>
        {t.intro.skip}
      </button>
    </div>
  );
}

function MobileHeader({
  language,
  setLanguage,
  menuOpen,
  onOpenMenu,
}: {
  language: Language;
  setLanguage: SetLanguage;
  menuOpen: boolean;
  onOpenMenu: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const t = mobileContent[language];

  useEffect(() => {
    if (!window.matchMedia(MOBILE_QUERY).matches) return;
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="m-header" data-scrolled={scrolled || undefined}>
      <a className="m-header-brand" href="#mobile-home" aria-label={t.nav.home}>
        <Image src="/brand/logo-symbol-light.png" alt="" width={620} height={730} unoptimized />
        <span>BAMAROUF <small>STUDIO</small></span>
      </a>

      <div className="m-header-actions">
        <div className="m-header-language" aria-label={t.languageLabel}>
          <button type="button" aria-pressed={language === "ar"} onClick={() => setLanguage("ar")}>AR</button>
          <span aria-hidden="true" />
          <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
        </div>
        <button
          className="m-menu-button"
          type="button"
          onClick={onOpenMenu}
          aria-label={t.menuLabel}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

function MobileMenu({
  open,
  language,
  setLanguage,
  onClose,
}: {
  open: boolean;
  language: Language;
  setLanguage: SetLanguage;
  onClose: () => void;
}) {
  const t = mobileContent[language];
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lockedScroll = useRef(0);

  const navigateToSection = (event: ReactMouseEvent<HTMLAnchorElement>, selector: string) => {
    event.preventDefault();
    onClose();
    window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>(selector);
      if (!target) return;
      window.history.replaceState(null, "", selector);
      window.scrollTo({
        top: window.scrollY + target.getBoundingClientRect().top,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
    }, 80);
  };

  useEffect(() => {
    if (!open || !window.matchMedia(MOBILE_QUERY).matches) return;

    lockedScroll.current = window.scrollY;
    document.documentElement.style.setProperty("--mobile-locked-scroll", `${lockedScroll.current}px`);
    document.body.classList.add("mobile-menu-open");
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("mobile-menu-open");
      document.documentElement.style.removeProperty("--mobile-locked-scroll");
      window.scrollTo({ top: lockedScroll.current, behavior: "instant" });
    };
  }, [open, onClose]);

  return (
    <div
      className="m-menu"
      id="mobile-menu"
      data-open={open || undefined}
      aria-hidden={!open}
      inert={!open}
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.nav.label}
    >
      <div className="m-menu-architecture" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="m-menu-topline">
        <Image src="/brand/logo-symbol-light.png" alt="" width={620} height={730} unoptimized />
        <button ref={closeRef} type="button" onClick={onClose} aria-label={t.closeLabel}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav className="m-menu-primary" aria-label={t.nav.label}>
        <a href="#mobile-home" onClick={(event) => navigateToSection(event, "#mobile-home")}>{t.nav.home}</a>
        <a href="#mobile-studio" onClick={(event) => navigateToSection(event, "#mobile-studio")}>{t.nav.studio}</a>
        <a href="#mobile-worlds" onClick={(event) => navigateToSection(event, "#mobile-worlds")}>{t.nav.worlds}</a>
        <a href="#mobile-philosophy" onClick={(event) => navigateToSection(event, "#mobile-philosophy")}>{t.nav.philosophy}</a>
      </nav>

      <div className="m-menu-worlds">
        {mobileDestinations.map((destination, index) => (
          <a href={destination.href} key={destination.id}>
            <span>0{index + 1}</span>
            <strong>{destination.name}</strong>
          </a>
        ))}
      </div>

      <div className="m-menu-language" aria-label={t.languageLabel}>
        <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>ENGLISH</button>
        <span aria-hidden="true" />
        <button type="button" aria-pressed={language === "ar"} onClick={() => setLanguage("ar")}>العربية</button>
      </div>
    </div>
  );
}

function MobileHero({ language }: { language: Language }) {
  const t = mobileContent[language];

  return (
    <section id="mobile-home" className="m-hero" aria-labelledby="mobile-hero-title">
      <div className="m-hero-image" role="img" aria-label={t.hero.alt} />
      <div className="m-hero-light" aria-hidden="true" />
      <div className="m-hero-world-index" aria-hidden="true">
        <span>01</span><span>02</span><span>03</span>
      </div>
      <div className="m-hero-content">
        <p className="m-eyebrow">{t.hero.eyebrow}</p>
        <h1 id="mobile-hero-title">
          <span>{t.hero.title[0]}</span>
          <span>{t.hero.title[1]}</span>
        </h1>
        <div className="m-hero-copy">
          <p>{t.hero.copy[0]}</p>
          <p>{t.hero.copy[1]}</p>
        </div>
        <a className="m-outline-cta" href="#mobile-worlds">
          {t.hero.cta}<MobileArrow rtl={language === "ar"} />
        </a>
      </div>
    </section>
  );
}

function MobilePortal({
  destination,
  language,
  index,
  entering,
  onEnter,
}: {
  destination: MobileDestination;
  language: Language;
  index: number;
  entering: boolean;
  onEnter: EnterMobileDestination;
}) {
  const [awake, setAwake] = useState(false);
  const [touched, setTouched] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const localized = destination[language];
  const t = mobileContent[language];

  useEffect(() => {
    if (!window.matchMedia(MOBILE_QUERY).matches || !sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAwake(entry.isIntersecting && entry.intersectionRatio >= 0.28),
      { threshold: [0, 0.28, 0.55] },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch" || event.pointerType === "pen") setTouched(true);
  };

  return (
    <section
      ref={sectionRef}
      className={`m-portal m-portal-${destination.id}`}
      data-awake={awake || undefined}
      data-touched={touched || undefined}
      data-entering={entering || undefined}
      aria-labelledby={`mobile-${destination.id}-title`}
      onPointerDown={onPointerDown}
      onPointerUp={() => setTouched(false)}
      onPointerCancel={() => setTouched(false)}
    >
      <div className="m-portal-camera" role="img" aria-label={localized.alt}>
        <Image
          className="m-portal-image"
          src={mobileSceneImages[destination.id]}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 1px"
          quality={88}
        />
      </div>
      <div className="m-portal-architecture" aria-hidden="true">
        <span className="m-portal-interior" />
        <span className="m-portal-depth" />
        <span className="m-portal-reflection" />
        <span className="m-portal-material" />
      </div>
      <div className="m-portal-copy">
        <span className="m-portal-count">0{index + 1}</span>
        <h2 id={`mobile-${destination.id}-title`}>
          {destination.name.split(" ").map((part) => <span key={part}>{part}</span>)}
        </h2>
        <strong>{localized.discipline}</strong>
        <p>{localized.description}</p>
        <a href={destination.href} onClick={(event) => onEnter(event, destination)}>
          {t.worlds.enter}<MobileArrow rtl={language === "ar"} />
        </a>
      </div>
    </section>
  );
}

function MobileWorlds({
  language,
  entering,
  onEnter,
}: {
  language: Language;
  entering: string | null;
  onEnter: EnterMobileDestination;
}) {
  const t = mobileContent[language];

  return (
    <section id="mobile-worlds" className="m-worlds" aria-labelledby="mobile-worlds-title">
      <header className="m-worlds-intro">
        <p className="m-eyebrow">{t.worlds.eyebrow}</p>
        <h2 id="mobile-worlds-title">{t.worlds.title}</h2>
        <span aria-hidden="true" />
      </header>
      {mobileDestinations.map((destination, index) => (
        <MobilePortal
          key={destination.id}
          destination={destination}
          language={language}
          index={index}
          entering={entering === destination.id}
          onEnter={onEnter}
        />
      ))}
    </section>
  );
}

function MobilePhilosophy({ language }: { language: Language }) {
  const t = mobileContent[language];

  return (
    <section id="mobile-studio" className="m-philosophy" aria-labelledby="mobile-philosophy-title">
      <span id="mobile-philosophy" className="m-anchor" aria-hidden="true" />
      <div className="m-philosophy-architecture" aria-hidden="true">
        <div className="m-philosophy-image">
          <Image
            src="/architecture/mobile/philosophy-detail.jpg"
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 1px"
            quality={86}
          />
        </div>
        <span />
      </div>
      <div className="m-philosophy-content">
        <p className="m-eyebrow">{t.philosophy.eyebrow}</p>
        <h2 id="mobile-philosophy-title">
          <span>{t.philosophy.title[0]}</span>
          <span>{t.philosophy.title[1]}</span>
        </h2>
        <div className="m-philosophy-copy">
          <p>{t.philosophy.copy[0]}</p>
          <p>{t.philosophy.copy[1]}</p>
        </div>
        <div className="m-philosophy-values">
          {t.philosophy.values.map((value, index) => (
            <article key={value.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileFinal({
  language,
  entering,
  onEnter,
}: {
  language: Language;
  entering: string | null;
  onEnter: EnterMobileDestination;
}) {
  const t = mobileContent[language];

  return (
    <section className="m-final" aria-labelledby="mobile-final-title">
      <div className="m-final-image" role="img" aria-label={t.final.alt}>
        <Image
          src="/architecture/mobile/final-corridor.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 1px"
          quality={88}
        />
      </div>
      <div className="m-final-light" aria-hidden="true" />
      <div className="m-final-content">
        <p className="m-eyebrow">{t.final.eyebrow}</p>
        <h2 id="mobile-final-title">{t.final.title}</h2>
        <div className="m-final-copy">
          {t.final.copy.map((line) => <p key={line}>{line}</p>)}
        </div>
        <nav className="m-final-destinations" aria-label={t.final.title}>
          {mobileDestinations.map((destination, index) => (
            <a
              key={destination.id}
              href={destination.href}
              data-entering={entering === destination.id || undefined}
              onClick={(event) => onEnter(event, destination)}
            >
              <span>0{index + 1}</span>
              <strong>{destination.name}</strong>
              <MobileArrow rtl={language === "ar"} />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

function MobileFooter({
  language,
  setLanguage,
  onEnter,
}: {
  language: Language;
  setLanguage: SetLanguage;
  onEnter: EnterMobileDestination;
}) {
  const t = mobileContent[language];

  return (
    <footer className="m-footer">
      <div className="m-footer-brand">
        <Image
          src="/brand/logo-footer-lockup.png"
          alt="BAMAROUF STUDIO, بامعروف استديو"
          width={950}
          height={1257}
          sizes="(max-width: 767px) 176px, 1px"
          unoptimized
        />
        <p>{t.footer.closing}</p>
      </div>
      <nav className="m-footer-worlds" aria-label={mobileContent[language].worlds.title}>
        {mobileDestinations.map((destination) => (
          <a key={destination.id} href={destination.href} onClick={(event) => onEnter(event, destination)}>
            {destination.name}
          </a>
        ))}
      </nav>
      <div className="m-footer-meta">
        <button type="button" onClick={() => setLanguage(language === "en" ? "ar" : "en")}>
          {language === "en" ? "العربية" : "ENGLISH"}
        </button>
        <p>© {new Date().getFullYear()} BAMAROUF STUDIO<br />{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

export function MobileExperience({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: SetLanguage;
}) {
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [entering, setEntering] = useState<string | null>(null);
  const navigationTimer = useRef<number | null>(null);
  const enteringRef = useRef(false);
  const t = mobileContent[language];

  const finishIntro = useCallback(() => {
    setIntroVisible(false);
    document.body.classList.remove("mobile-intro-open");
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => () => {
    if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
    document.body.classList.remove("mobile-intro-open", "mobile-menu-open");
    delete document.body.dataset.mobileEntering;
  }, []);

  const enterDestination: EnterMobileDestination = (event, destination) => {
    event.preventDefault();
    if (enteringRef.current) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    enteringRef.current = true;
    setMenuOpen(false);
    setEntering(destination.id);
    document.body.dataset.mobileEntering = destination.id;
    navigationTimer.current = window.setTimeout(() => {
      window.location.assign(destination.href);
    }, reducedMotion ? 70 : 560);
  };

  return (
    <div className="mobile-experience">
      <a className="m-skip-link" href="#mobile-main">{t.skipContent}</a>
      <MobileIntro language={language} active={introVisible} onComplete={finishIntro} />
      <div className="m-site-shell" aria-hidden={introVisible || undefined} inert={introVisible}>
        <MobileHeader
          language={language}
          setLanguage={setLanguage}
          menuOpen={menuOpen}
          onOpenMenu={() => setMenuOpen(true)}
        />
        <MobileMenu
          open={menuOpen}
          language={language}
          setLanguage={setLanguage}
          onClose={closeMenu}
        />
        <main id="mobile-main">
          <MobileHero language={language} />
          <MobileWorlds language={language} entering={entering} onEnter={enterDestination} />
          <MobilePhilosophy language={language} />
          <MobileFinal language={language} entering={entering} onEnter={enterDestination} />
        </main>
        <MobileFooter language={language} setLanguage={setLanguage} onEnter={enterDestination} />
      </div>
    </div>
  );
}
