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

const LANG_KEY = "bamarouf-studio-language";

const scenes = {
  intro: "/architecture/scenes/intro-bronze.jpg",
  hero: "/architecture/three-doors-house.png",
  house: "/architecture/scenes/house-travertine.jpg",
  tarik: "/architecture/scenes/tarik-black-stone.jpg",
  nour: "/architecture/scenes/nour-gallery.jpg",
  khaled: "/architecture/scenes/khaled-structure.jpg",
  principles: "/architecture/scenes/principles-materials.jpg",
  final: "/architecture/scenes/final-corridor.jpg",
} as const;

type Destination = (typeof destinations)[number];
type EnterDestination = (event: MouseEvent<HTMLAnchorElement>, destination: Destination) => void;

function Arrow({ rtl = false }: { rtl?: boolean }) {
  return <span className="arrow" aria-hidden="true">{rtl ? "←" : "→"}</span>;
}

function Intro({ onComplete, language }: { onComplete: () => void; language: Language }) {
  const t = content[language];

  useEffect(() => {
    document.body.classList.add("intro-open");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(onComplete, reducedMotion ? 80 : 5600);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-open");
    };
  }, [onComplete]);

  return (
    <div className="intro" role="dialog" aria-modal="true" aria-label={t.intro.label}>
      <div className="intro-scene" aria-hidden="true">
        <Image className="intro-scene-image" src={scenes.intro} alt="" fill priority sizes="100vw" />
        <div className="intro-nightfall" />
        <div className="intro-monument">
          <div className="intro-sanctum">
            <Image src="/brand/logo-full.png" alt="" width={792} height={1048} priority />
          </div>
          <div className="intro-door-leaf" />
          <div className="intro-edge-light" />
          <div className="intro-floor-light" />
        </div>
      </div>
      <p className="intro-statement">{t.intro.statement}</p>
      <button className="intro-skip" type="button" onClick={onComplete}>{t.intro.skip}</button>
    </div>
  );
}

function Header({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  const t = content[language];
  return (
    <header className="site-header">
      <a className="header-mark" href="#home" aria-label={t.nav.home}>
        <Image src="/brand/logo-symbol.png" alt="" width={620} height={730} priority />
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
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "0");
    event.currentTarget.style.setProperty("--pointer-y", "0");
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
        <div className="house-materials" aria-label={t.house.materialsLabel}>
          {t.house.materials.map((material) => <span key={material}>{material}</span>)}
        </div>
      </div>
      <p className="scene-whisper">{t.house.caption}</p>
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

  return (
    <article className={`world-scene world-scene-${destination.id} cinematic-scene`}>
      <Image
        className="scene-image world-scene-image"
        src={image}
        alt={localized.alt}
        fill
        sizes="100vw"
      />
      <div className="world-scene-shade" aria-hidden="true" />

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
        <div className="principles-list">
          {t.principles.items.map((item, index) => (
            <article className="principle" key={item.title} data-reveal>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
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
        <Image src="/brand/logo-full.png" alt="BAMAROUF STUDIO" width={792} height={1048} />
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
    if (introVisible) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let frame = 0;

    const revealVisible = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const revealLine = window.innerHeight * 0.9;
        elements.forEach((element) => {
          if (element.classList.contains("is-visible")) return;
          const bounds = element.getBoundingClientRect();
          if (bounds.top < revealLine && bounds.bottom > 0) element.classList.add("is-visible");
        });
        frame = 0;
      });
    };

    revealVisible();
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("resize", revealVisible);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("resize", revealVisible);
    };
  }, [introVisible, language]);

  useEffect(() => {
    const sceneElements = Array.from(document.querySelectorAll<HTMLElement>(".hero, .cinematic-scene"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-active", entry.isIntersecting);
      });
    }, { threshold: 0.24 });
    sceneElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.sessionStorage.setItem(LANG_KEY, nextLanguage);
  };

  const finishIntro = useCallback(() => {
    setIntroVisible(false);
    document.body.classList.remove("intro-open");
  }, []);

  const enterDestination: EnterDestination = (event, destination) => {
    event.preventDefault();
    if (enteringRef.current) return;
    enteringRef.current = true;
    setEntering(destination.id);
    document.body.dataset.entering = destination.id;
    navigationTimer.current = window.setTimeout(() => {
      window.location.assign(destination.href);
    }, 720);
  };

  return (
    <>
      <a className="skip-link" href="#house">{content[language].skipContent}</a>
      {introVisible && <Intro language={language} onComplete={finishIntro} />}
      <div
        aria-hidden={introVisible || undefined}
        className="site-shell"
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
    </>
  );
}
