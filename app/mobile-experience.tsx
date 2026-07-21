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
import { SocialLinks } from "./social-links";

type SetLanguage = (language: Language) => void;
type EnterMobileDestination = (
  event: ReactMouseEvent<HTMLAnchorElement>,
  destination: MobileDestination,
) => void;

const MOBILE_QUERY = "(max-width: 767px)";
const MOBILE_SCENES = [
  "mobile-gate",
  "mobile-studio",
  "mobile-tarik",
  "mobile-noor",
  "mobile-khaled",
  "mobile-final",
  "mobile-footer",
] as const;

const mobileSceneImages = {
  tarik: "/architecture/mobile/tarik-portal.jpg",
  noor: "/architecture/mobile/noor-portal.jpg",
  khaled: "/architecture/mobile/khaled-portal.jpg",
} as const;

function MobileArrow({ direction = "forward" }: { direction?: "forward" | "down" }) {
  return (
    <span className={`m-arrow m-arrow-${direction}`} aria-hidden="true">
      {direction === "down" ? "↓" : "→"}
    </span>
  );
}

function MobileHeader({
  language,
  setLanguage,
  activeScene,
  menuOpen,
  onOpenMenu,
}: {
  language: Language;
  setLanguage: SetLanguage;
  activeScene: string;
  menuOpen: boolean;
  onOpenMenu: () => void;
}) {
  const t = mobileContent[language];
  const activeIndex = Math.max(0, MOBILE_SCENES.indexOf(activeScene as (typeof MOBILE_SCENES)[number]));
  const lightScene = activeScene === "mobile-noor";

  return (
    <header className="m-header" data-light-scene={lightScene || undefined}>
      <a className="m-header-brand" href="#mobile-gate" aria-label={t.nav.gate}>
        <Image src="/brand/logo-header-mark.png" alt="" width={620} height={730} unoptimized />
        <span>BAMAROUF <small>STUDIO</small></span>
      </a>

      <div className="m-header-actions">
        <span className="m-header-progress" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} <i /> {String(MOBILE_SCENES.length).padStart(2, "0")}
        </span>
        <button
          className="m-header-language"
          type="button"
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          aria-label={t.languageLabel}
        >
          {language === "en" ? "AR" : "EN"}
        </button>
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
  activeScene,
  onClose,
  onGoToScene,
}: {
  open: boolean;
  language: Language;
  setLanguage: SetLanguage;
  activeScene: string;
  onClose: () => void;
  onGoToScene: (scene: string) => void;
}) {
  const t = mobileContent[language];
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const routes = [
    { id: "mobile-gate", label: t.nav.gate },
    { id: "mobile-studio", label: t.nav.studio },
    { id: "mobile-tarik", label: "TARIK BAMAROUF" },
    { id: "mobile-noor", label: "NOOR BAMAROUF" },
    { id: "mobile-khaled", label: "KHALED BAMAROUF" },
    { id: "mobile-final", label: t.nav.final },
    { id: "mobile-footer", label: t.nav.contact },
  ];

  const selectScene = (scene: string) => {
    onClose();
    window.setTimeout(() => onGoToScene(scene), 180);
  };

  useEffect(() => {
    if (!open || !window.matchMedia(MOBILE_QUERY).matches) return;

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
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
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
      <div className="m-menu-room" aria-hidden="true">
        <Image
          src="/architecture/mobile/hero-gateway.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 1px"
          quality={82}
        />
        <span />
        <span />
      </div>

      <div className="m-menu-topline">
        <div className="m-menu-mark">
          <Image src="/brand/logo-header-mark.png" alt="" width={620} height={730} unoptimized />
          <span>BAMAROUF STUDIO</span>
        </div>
        <button ref={closeRef} type="button" onClick={onClose} aria-label={t.closeLabel}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav className="m-menu-routes" aria-label={t.nav.label}>
        {routes.map((route, index) => (
          <button
            key={route.id}
            type="button"
            aria-current={activeScene === route.id ? "page" : undefined}
            onClick={() => selectScene(route.id)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{route.label}</strong>
          </button>
        ))}
      </nav>

      <div className="m-menu-follow" aria-label="Follow BAMAROUF STUDIO">
        <span>
          FOLLOW
          <small>تابعنا</small>
        </span>
        <SocialLinks className="m-menu-socials" />
      </div>

      <div className="m-menu-language" aria-label={t.languageLabel}>
        <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>ENGLISH</button>
        <span aria-hidden="true" />
        <button type="button" aria-pressed={language === "ar"} onClick={() => setLanguage("ar")}>العربية</button>
      </div>
    </div>
  );
}

function SceneAdvance({
  label,
  onActivate,
}: {
  label: string;
  onActivate: () => void;
}) {
  return (
    <button className="m-scene-advance" type="button" onClick={onActivate}>
      <span>{label}</span>
      <MobileArrow direction="down" />
    </button>
  );
}

function MobileGate({
  language,
  active,
  onAdvance,
}: {
  language: Language;
  active: boolean;
  onAdvance: () => void;
}) {
  const t = mobileContent[language];

  return (
    <section
      id="mobile-gate"
      className="m-scene m-gate"
      data-active={active || undefined}
      aria-labelledby="mobile-gate-title"
    >
      <div className="m-gate-camera" role="img" aria-label={t.gate.alt}>
        <Image
          src="/architecture/mobile/hero-gateway.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 100vw, 1px"
          quality={90}
        />
      </div>
      <div className="m-gate-light" aria-hidden="true"><span /><span /></div>
      <div className="m-gate-copy">
        <p className="m-scene-label">{t.gate.label}</p>
        <h1 id="mobile-gate-title">
          <span>{t.gate.title[0]}</span>
          <span>{t.gate.title[1]}</span>
        </h1>
        <p>{t.gate.copy}</p>
        <button type="button" className="m-primary-action" onClick={onAdvance}>
          {t.gate.cta}<MobileArrow direction="forward" />
        </button>
      </div>
      <SceneAdvance label={t.swipe} onActivate={onAdvance} />
    </section>
  );
}

function MobileStudio({
  language,
  active,
  onAdvance,
}: {
  language: Language;
  active: boolean;
  onAdvance: () => void;
}) {
  const t = mobileContent[language];

  return (
    <section
      id="mobile-studio"
      className="m-scene m-studio"
      data-active={active || undefined}
      aria-labelledby="mobile-studio-title"
    >
      <div className="m-studio-material" role="img" aria-label={t.studio.alt}>
        <Image
          src="/architecture/mobile/philosophy-detail.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 1px"
          quality={88}
        />
      </div>
      <div className="m-studio-light" aria-hidden="true"><span /><span /></div>
      <div className="m-studio-copy">
        <p className="m-scene-label">{t.studio.label}</p>
        <h2 id="mobile-studio-title">
          <span>{t.studio.title[0]}</span>
          <span>{t.studio.title[1]}</span>
        </h2>
        <p>{t.studio.copy}</p>
      </div>
      <div className="m-studio-signatures" aria-label={t.studio.copy}>
        {t.studio.signatures.map((signature) => <span key={signature}>{signature}</span>)}
      </div>
      <SceneAdvance label={t.studio.next} onActivate={onAdvance} />
    </section>
  );
}

function MobileWorld({
  destination,
  language,
  index,
  active,
  entering,
  onAdvance,
  onEnter,
}: {
  destination: MobileDestination;
  language: Language;
  index: number;
  active: boolean;
  entering: boolean;
  onAdvance: () => void;
  onEnter: EnterMobileDestination;
}) {
  const [touched, setTouched] = useState(false);
  const localized = destination[language];
  const t = mobileContent[language];

  const respondToTouch = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "touch" && event.pointerType !== "pen") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    event.currentTarget.style.setProperty("--touch-x", `${x.toFixed(1)}%`);
    event.currentTarget.style.setProperty("--touch-y", `${y.toFixed(1)}%`);
    setTouched(true);
  };

  return (
    <section
      id={`mobile-${destination.id}`}
      className={`m-scene m-world m-world-${destination.id}`}
      data-active={active || undefined}
      data-touched={touched || undefined}
      data-entering={entering || undefined}
      aria-labelledby={`mobile-${destination.id}-title`}
      onPointerDown={respondToTouch}
      onPointerUp={() => setTouched(false)}
      onPointerCancel={() => setTouched(false)}
    >
      <div className="m-world-camera" role="img" aria-label={localized.alt}>
        <Image
          src={mobileSceneImages[destination.id]}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 1px"
          quality={90}
        />
      </div>
      <div className="m-world-atmosphere" aria-hidden="true">
        <span className="m-world-depth" />
        <span className="m-world-light" />
        <span className="m-world-reflection" />
        <span className="m-world-rake" />
      </div>

      <div className="m-world-copy">
        <span className="m-world-index">{String(index + 1).padStart(2, "0")}</span>
        <h2 id={`mobile-${destination.id}-title`}>
          {destination.name.split(" ").map((part, partIndex) => (
            <span key={`${part}-${partIndex}`}>{part}</span>
          ))}
        </h2>
        <strong>{localized.discipline}</strong>
        <p>{localized.description}</p>
        <a href={destination.href} onClick={(event) => onEnter(event, destination)}>
          {t.worlds.enter}<MobileArrow direction="forward" />
        </a>
      </div>
      <SceneAdvance label={t.worlds.continue} onActivate={onAdvance} />
    </section>
  );
}

function MobileFinal({
  language,
  active,
  entering,
  onAdvance,
  onEnter,
}: {
  language: Language;
  active: boolean;
  entering: string | null;
  onAdvance: () => void;
  onEnter: EnterMobileDestination;
}) {
  const t = mobileContent[language];

  return (
    <section
      id="mobile-final"
      className="m-scene m-final"
      data-active={active || undefined}
      aria-labelledby="mobile-final-title"
    >
      <div className="m-final-camera" role="img" aria-label={t.final.alt}>
        <Image
          src="/architecture/mobile/final-corridor.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 1px"
          quality={90}
        />
      </div>
      <div className="m-final-light" aria-hidden="true"><span /><span /></div>
      <div className="m-final-copy">
        <p className="m-scene-label">{t.final.label}</p>
        <h2 id="mobile-final-title">{t.final.title}</h2>
        <p>{t.final.copy}</p>
        <nav className="m-final-destinations" aria-label={t.final.title}>
          {mobileDestinations.map((destination, index) => (
            <a
              key={destination.id}
              href={destination.href}
              data-entering={entering === destination.id || undefined}
              onClick={(event) => onEnter(event, destination)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{destination.name}</strong>
              <MobileArrow direction="forward" />
            </a>
          ))}
        </nav>
      </div>
      <SceneAdvance label={t.swipe} onActivate={onAdvance} />
    </section>
  );
}

function MobileFooterScene({
  language,
  setLanguage,
  active,
  onReturn,
  onEnter,
}: {
  language: Language;
  setLanguage: SetLanguage;
  active: boolean;
  onReturn: () => void;
  onEnter: EnterMobileDestination;
}) {
  const t = mobileContent[language];

  return (
    <footer id="mobile-footer" className="m-scene m-footer" data-active={active || undefined}>
      <div className="m-footer-material" aria-hidden="true">
        <Image
          src="/architecture/mobile/philosophy-detail.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 1px"
          quality={76}
        />
        <span />
      </div>
      <div className="m-footer-brand">
        <Image
          src="/brand/logo-footer-lockup.png"
          alt="BAMAROUF STUDIO, بامعروف استديو"
          width={950}
          height={1257}
          sizes="(max-width: 767px) 156px, 1px"
          unoptimized
        />
        <p>{t.footer.closing}</p>
      </div>
      <nav className="m-footer-worlds" aria-label={t.nav.worlds}>
        {mobileDestinations.map((destination) => (
          <a key={destination.id} href={destination.href} onClick={(event) => onEnter(event, destination)}>
            {destination.name}
          </a>
        ))}
      </nav>
      <SocialLinks className="m-footer-socials" />
      <div className="m-footer-controls">
        <button type="button" onClick={() => setLanguage(language === "en" ? "ar" : "en")}>
          {language === "en" ? "العربية" : "ENGLISH"}
        </button>
        <button type="button" onClick={onReturn}>{t.footer.returnToGate}</button>
      </div>
      <p className="m-footer-copyright">
        © {new Date().getFullYear()} BAMAROUF STUDIO<br />{t.footer.copyright}
      </p>
    </footer>
  );
}

export function MobileExperience({
  language,
  setLanguage,
  introActive,
}: {
  language: Language;
  setLanguage: SetLanguage;
  introActive: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScene, setActiveScene] = useState<string>(MOBILE_SCENES[0]);
  const [entering, setEntering] = useState<string | null>(null);
  const railRef = useRef<HTMLElement>(null);
  const navigationTimer = useRef<number | null>(null);
  const enteringRef = useRef(false);
  const t = mobileContent[language];

  const goToScene = useCallback((scene: string) => {
    const target = document.getElementById(scene);
    if (!target) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({
      block: "start",
      behavior: reducedMotion ? "auto" : "smooth",
    });
    window.history.replaceState(null, "", `#${scene}`);
  }, []);

  useEffect(() => {
    if (!window.matchMedia(MOBILE_QUERY).matches || !railRef.current) return;
    const scenes = Array.from(railRef.current.querySelectorAll<HTMLElement>(".m-scene"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveScene(visible.target.id);
      },
      { root: railRef.current, threshold: [0.35, 0.55, 0.72] },
    );
    scenes.forEach((scene) => observer.observe(scene));
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
    document.body.classList.remove("mobile-menu-open");
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
    }, reducedMotion ? 70 : 820);
  };

  return (
    <div className="mobile-experience">
      <a className="m-skip-link" href="#mobile-gate">{t.skipContent}</a>
      <div className="m-site-shell" aria-hidden={introActive || undefined} inert={introActive}>
        <MobileHeader
          language={language}
          setLanguage={setLanguage}
          activeScene={activeScene}
          menuOpen={menuOpen}
          onOpenMenu={() => setMenuOpen(true)}
        />
        <MobileMenu
          open={menuOpen}
          language={language}
          setLanguage={setLanguage}
          activeScene={activeScene}
          onClose={() => setMenuOpen(false)}
          onGoToScene={goToScene}
        />

        <main className="m-scene-rail" ref={railRef}>
          <MobileGate
            language={language}
            active={activeScene === "mobile-gate"}
            onAdvance={() => goToScene("mobile-studio")}
          />
          <MobileStudio
            language={language}
            active={activeScene === "mobile-studio"}
            onAdvance={() => goToScene("mobile-tarik")}
          />
          {mobileDestinations.map((destination, index) => (
            <MobileWorld
              key={destination.id}
              destination={destination}
              language={language}
              index={index}
              active={activeScene === `mobile-${destination.id}`}
              entering={entering === destination.id}
              onEnter={enterDestination}
              onAdvance={() => goToScene(index < mobileDestinations.length - 1
                ? `mobile-${mobileDestinations[index + 1].id}`
                : "mobile-final")}
            />
          ))}
          <MobileFinal
            language={language}
            active={activeScene === "mobile-final"}
            entering={entering}
            onEnter={enterDestination}
            onAdvance={() => goToScene("mobile-footer")}
          />
          <MobileFooterScene
            language={language}
            setLanguage={setLanguage}
            active={activeScene === "mobile-footer"}
            onEnter={enterDestination}
            onReturn={() => goToScene("mobile-gate")}
          />
        </main>
      </div>
    </div>
  );
}
