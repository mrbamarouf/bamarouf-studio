"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { content, destinations, type Language } from "./content";
import { MobileExperience } from "./mobile-experience";
import { OfficialIntro } from "./official-intro";

const LANG_KEY = "bamarouf-studio-language";

const scenes = {
  hero: "/architecture/three-doors-house.png",
  house: "/architecture/scenes/house-travertine.jpg",
  tarik: "/architecture/scenes/tarik-black-stone.jpg",
  noor: "/architecture/scenes/noor-gallery.jpg",
  khaled: "/architecture/scenes/khaled-structure.jpg",
  principles: "/architecture/scenes/principles-materials.jpg",
  final: "/architecture/scenes/final-corridor.jpg",
} as const;

type Destination = (typeof destinations)[number];
type EnterDestination = (event: MouseEvent<HTMLAnchorElement>, destination: Destination) => void;

function Arrow({ rtl = false }: { rtl?: boolean }) {
  return <span className="arrow" aria-hidden="true">{rtl ? "←" : "→"}</span>;
}

function Header({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  const t = content[language];
  return (
    <header className="site-header">
      <a className="header-mark" href="#home" aria-label={t.nav.home}>
        <Image
          src="/brand/logo-header-mark.png"
          alt=""
          width={320}
          height={377}
          priority
          unoptimized
        />
        <span className="header-wordmark">BAMAROUF <small>STUDIO</small></span>
      </a>

      <nav className="primary-nav" aria-label={t.nav.label}>
        <a href="#home">{t.nav.home}</a>
        <a href="#house">{t.nav.house}</a>
        <a href="#three-worlds">{t.nav.worlds}</a>
        <a href="#philosophy">{t.nav.philosophy}</a>
      </nav>

      <div className="language-switch" aria-label={t.languageLabel}>
        <button type="button" aria-pressed={language === "ar"} onClick={() => setLanguage("ar")}>AR</button>
        <span aria-hidden="true" />
        <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
      </div>
    </header>
  );
}

function Hero({ language, onEnter }: { language: Language; onEnter: EnterDestination }) {
  const t = content[language];

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--pointer-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--pointer-y", y.toFixed(3));
    event.currentTarget.style.setProperty("--hero-camera-x", `${(-x * 3.5).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--hero-camera-y", `${(-y * 2.25).toFixed(2)}px`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "0");
    event.currentTarget.style.setProperty("--pointer-y", "0");
    event.currentTarget.style.setProperty("--hero-camera-x", "0px");
    event.currentTarget.style.setProperty("--hero-camera-y", "0px");
  };

  return (
    <section
      id="home"
      className="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Image
        className="hero-photo"
        src={scenes.hero}
        alt={t.visuals.hero}
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-photographic-shift" aria-hidden="true" />
      <div className="hero-ambient" aria-hidden="true">
        {destinations.map((destination) => (
          <span className={`hero-ambient-${destination.id}`} key={destination.id} />
        ))}
      </div>
      <div className="hero-copy-wall" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-house-label">BAMAROUF STUDIO</p>
        <h1>{t.hero.title.map((line) => <span key={line}>{line}</span>)}</h1>
        <p className="hero-copy">{t.hero.copy}</p>
        <a className="hero-discover" href="#house">{t.hero.discover}<Arrow rtl={language === "ar"} /></a>
      </div>

      <nav className="hero-doorways" aria-label={t.worlds.title}>
        {destinations.map((destination) => (
          <a
            className={`hero-doorway hero-doorway-${destination.id}`}
            data-destination={destination.id}
            href={destination.href}
            key={destination.id}
            onClick={(event) => onEnter(event, destination)}
          >
            <span className="hero-doorway-glow" aria-hidden="true" />
            <span className="hero-doorway-label">
              <strong>{destination.firstName}</strong>
              <small>{destination[language].discipline}</small>
            </span>
          </a>
        ))}
      </nav>

      <a className="hero-scroll" href="#house">
        <span>{t.hero.scroll}</span>
        <span aria-hidden="true" />
      </a>
    </section>
  );
}

function HouseScene({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section id="house" className="house-scene cinematic-scene">
      <Image
        className="scene-image"
        src={scenes.house}
        alt={t.visuals.house}
        fill
        sizes="100vw"
      />
      <div className="house-scene-shade" aria-hidden="true" />
      <div className="house-scene-copy" data-reveal>
        <h2>{t.house.title}</h2>
        <div className="house-paragraphs">
          {t.house.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="house-values" aria-label={t.house.valuesLabel}>
          {t.house.values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldScene({
  destination,
  language,
  index,
  onEnter,
}: {
  destination: Destination;
  language: Language;
  index: number;
  onEnter: EnterDestination;
}) {
  const t = content[language];
  const localized = destination[language];
  const image = scenes[destination.id];

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    event.currentTarget.dataset.worldActive = "true";
    event.currentTarget.style.setProperty("--world-camera-x", `${(-x * 8).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--world-camera-y", `${(-y * 5).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--world-light-x", `${(x * 12).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--world-light-y", `${(y * 7).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--world-rotate-x", `${(y * 0.24).toFixed(3)}deg`);
    event.currentTarget.style.setProperty("--world-rotate-y", `${(-x * 0.34).toFixed(3)}deg`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    delete event.currentTarget.dataset.worldActive;
    event.currentTarget.style.setProperty("--world-camera-x", "0px");
    event.currentTarget.style.setProperty("--world-camera-y", "0px");
    event.currentTarget.style.setProperty("--world-light-x", "0px");
    event.currentTarget.style.setProperty("--world-light-y", "0px");
    event.currentTarget.style.setProperty("--world-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--world-rotate-y", "0deg");
  };

  return (
    <article
      className={`world-scene world-scene-${destination.id} cinematic-scene`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="world-camera">
        <Image
          className="scene-image world-scene-image"
          src={image}
          alt={localized.alt}
          fill
          sizes="100vw"
        />
      </div>
      <div className="world-architecture" aria-hidden="true">
        <span className="world-interior-light" />
        <span className="world-volumetric-light" />
        <span className="world-threshold-depth" />
        <span className="world-floor-reflection" />
        <span className="world-material-response" />
        <span className="world-particles">
          <i /><i /><i /><i /><i /><i /><i />
        </span>
      </div>

      {index === 0 && (
        <div className="worlds-introduction" data-reveal>
          <h2 id="three-worlds-title">{t.worlds.title}</h2>
          <p>{t.worlds.copy}</p>
        </div>
      )}

      <div className="world-scene-copy" data-reveal>
        <span className="world-scene-count">0{index + 1}</span>
        <p>{destination.firstName}</p>
        <h3>{destination.name}</h3>
        <strong>{localized.discipline}</strong>
        <em>{localized.description}</em>
        <a
          className="threshold-link"
          data-destination={destination.id}
          href={destination.href}
          onClick={(event) => onEnter(event, destination)}
        >
          {t.worlds.enter}<Arrow rtl={language === "ar"} />
        </a>
      </div>
    </article>
  );
}

function WorldsSection({ language, onEnter }: { language: Language; onEnter: EnterDestination }) {
  return (
    <section id="three-worlds" className="worlds-film" aria-labelledby="three-worlds-title">
      {destinations.map((destination, index) => (
        <WorldScene
          destination={destination}
          language={language}
          index={index}
          onEnter={onEnter}
          key={destination.id}
        />
      ))}
    </section>
  );
}

function PrinciplesScene({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section id="philosophy" className="principles-scene cinematic-scene">
      <Image className="scene-image" src={scenes.principles} alt={t.visuals.principles} fill sizes="100vw" />
      <div className="principles-scene-shade" aria-hidden="true" />
      <div className="principles-content section-shell">
        <div className="principles-intro" data-reveal>
          <h2>{t.principles.title}</h2>
        </div>
        <div className="principles-editorial" data-reveal>
          {t.principles.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}

function FinalDestination({ language, onEnter }: { language: Language; onEnter: EnterDestination }) {
  const t = content[language];
  return (
    <section className="final-scene cinematic-scene">
      <Image className="scene-image" src={scenes.final} alt={t.visuals.final} fill sizes="100vw" />
      <div className="final-scene-shade" aria-hidden="true" />
      <div className="final-content section-shell" data-reveal>
        <div className="final-statement">
          <h2>{t.final.title}</h2>
          {t.final.copy.map((line) => <p key={line}>{line}</p>)}
        </div>
        <nav className="destination-list" aria-label={t.final.title}>
          {destinations.map((destination, index) => (
            <a
              data-destination={destination.id}
              href={destination.href}
              key={destination.id}
              onClick={(event) => onEnter(event, destination)}
            >
              <span className="destination-index">0{index + 1}</span>
              <span>
                <strong>{destination.name}</strong>
                <small>{destination[language].discipline}</small>
              </span>
              <Arrow rtl={language === "ar"} />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

function Footer({
  language,
  setLanguage,
  onEnter,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  onEnter: EnterDestination;
}) {
  const t = content[language];
  return (
    <footer className="site-footer section-shell">
      <div className="footer-brand">
        <Image
          src="/brand/logo-footer-lockup.png"
          alt="BAMAROUF STUDIO, بامعروف استديو"
          width={950}
          height={1257}
          sizes="194px"
          unoptimized
        />
        <p>{t.footer.house}</p>
      </div>
      <nav className="footer-worlds" aria-label={t.worlds.title}>
        {destinations.map((destination) => (
          <a href={destination.href} key={destination.id} onClick={(event) => onEnter(event, destination)}>
            {destination.name}
          </a>
        ))}
      </nav>
      <div className="footer-closing">
        <p>{t.footer.closing}</p>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} BAMAROUF STUDIO</span>
          <button type="button" onClick={() => setLanguage(language === "en" ? "ar" : "en")}>
            {language === "en" ? "العربية" : "ENGLISH"}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [language, setLanguageState] = useState<Language>("en");
  const [introVisible, setIntroVisible] = useState(true);
  const [entering, setEntering] = useState<string | null>(null);
  const navigationTimer = useRef<number | null>(null);
  const enteringRef = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.sessionStorage.getItem(LANG_KEY);
      if (stored === "ar" || stored === "en") setLanguageState(stored);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.language = language;
  }, [language]);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;
    const sceneElements = Array.from(document.querySelectorAll<HTMLElement>(".hero, .cinematic-scene"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-active", entry.isIntersecting);
      });
    }, { threshold: 0.24 });
    sceneElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (introVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sceneElements = Array.from(document.querySelectorAll<HTMLElement>(".hero, .cinematic-scene"));
    let frame = 0;

    const updateCamera = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;

        sceneElements.forEach((scene) => {
          const bounds = scene.getBoundingClientRect();
          if (bounds.bottom < -window.innerHeight || bounds.top > window.innerHeight * 2) return;

          const sceneCenter = bounds.top + bounds.height / 2;
          const travel = Math.max(-1, Math.min(1, (sceneCenter - viewportCenter) / (bounds.height + window.innerHeight)));
          scene.style.setProperty("--scene-camera-y", `${(travel * 6).toFixed(2)}px`);
          scene.style.setProperty("--scene-light-y", `${(travel * -10).toFixed(2)}px`);
        });

        frame = 0;
      });
    };

    updateCamera();
    window.addEventListener("scroll", updateCamera, { passive: true });
    window.addEventListener("resize", updateCamera);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateCamera);
      window.removeEventListener("resize", updateCamera);
    };
  }, [introVisible]);

  useEffect(() => () => {
    if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.sessionStorage.setItem(LANG_KEY, nextLanguage);
  };

  const finishIntro = useCallback(() => {
    setIntroVisible(false);
    document.body.classList.remove("official-intro-open");
  }, []);

  const enterDestination: EnterDestination = (event, destination) => {
    event.preventDefault();
    if (enteringRef.current) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    enteringRef.current = true;
    setEntering(destination.id);
    document.body.dataset.entering = destination.id;
    navigationTimer.current = window.setTimeout(() => {
      window.location.assign(destination.href);
    }, reducedMotion ? 80 : 1120);
  };

  return (
    <>
      <a className="skip-link desktop-only" href="#house">{content[language].skipContent}</a>
      <OfficialIntro
        active={introVisible}
        label={content[language].intro.label}
        onComplete={finishIntro}
      />
      <div
        aria-hidden={introVisible || undefined}
        className="site-shell desktop-only"
        data-entering={entering ?? undefined}
        inert={introVisible}
      >
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <Hero language={language} onEnter={enterDestination} />
          <HouseScene language={language} />
          <WorldsSection language={language} onEnter={enterDestination} />
          <PrinciplesScene language={language} />
          <FinalDestination language={language} onEnter={enterDestination} />
        </main>
        <Footer language={language} setLanguage={setLanguage} onEnter={enterDestination} />
      </div>
      <MobileExperience
        language={language}
        setLanguage={setLanguage}
        introActive={introVisible}
      />
    </>
  );
}
