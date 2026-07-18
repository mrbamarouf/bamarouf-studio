"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { content, destinations, type Language } from "./content";

const LANG_KEY = "bamarouf-studio-language";

function Arrow({ rtl = false }: { rtl?: boolean }) {
  return <span className="arrow" aria-hidden="true">{rtl ? "←" : "→"}</span>;
}

function Intro({ onComplete, language }: { onComplete: () => void; language: Language }) {
  const t = content[language];

  useEffect(() => {
    document.body.classList.add("intro-open");
    const timer = window.setTimeout(onComplete, 3400);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-open");
    };
  }, [onComplete]);

  return (
    <div className="intro" role="dialog" aria-label={t.intro.label}>
      <div className="intro-light" aria-hidden="true" />
      <div className="intro-door">
        <Image
          className="intro-logo"
          src="/brand/logo-full.png"
          alt="BAMAROUF STUDIO"
          width={792}
          height={1048}
          priority
        />
      </div>
      <p className="intro-statement">{t.intro.statement}</p>
      <button className="intro-skip" type="button" onClick={onComplete}>
        {t.intro.skip}
      </button>
    </div>
  );
}

function Header({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  const t = content[language];
  return (
    <header className="site-header">
      <a className="header-mark" href="#home" aria-label={t.nav.home}>
        <span className="header-mark-surface">
          <Image src="/brand/logo-symbol.png" alt="" width={620} height={730} priority />
        </span>
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

function ArchitecturalHouse() {
  return (
    <div className="house-stage" aria-hidden="true">
      <div className="night-sky" />
      <div className="distant-light distant-light-one" />
      <div className="distant-light distant-light-two" />
      <div className="house-mass">
        <div className="house-cap" />
        <div className="house-wing house-wing-left" />
        <div className="house-wing house-wing-right" />
        <div className="hero-portals">
          {destinations.map((destination) => (
            <a
              className={`hero-portal hero-portal-${destination.id}`}
              href={destination.href}
              key={destination.id}
              aria-label={destination.name}
            >
              <span className="portal-lintel" />
              <span className="portal-depth" />
              <span className="portal-light" />
              <span className="portal-name">{destination.firstName}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="foreground-stone foreground-stone-left" />
      <div className="foreground-stone foreground-stone-right" />
      <div className="approach-path" />
      <div className="waterline" />
    </div>
  );
}

function Hero({ language }: { language: Language }) {
  const t = content[language];
  const heroRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--pointer-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--pointer-y", y.toFixed(3));
  };

  return (
    <section ref={heroRef} id="home" className="hero" onPointerMove={handlePointerMove}>
      <ArchitecturalHouse />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-house-label">BAMAROUF STUDIO</p>
        <h1>{t.hero.title.map((line) => <span key={line}>{line}</span>)}</h1>
        <p className="hero-copy">{t.hero.copy}</p>
      </div>
      <a className="hero-scroll" href="#house">
        <span>{t.hero.discover}</span>
        <span className="scroll-line" aria-hidden="true" />
      </a>
      <p className="hero-edition" aria-hidden="true">A HOUSE OF SPECIALISTS · EST. AS ONE HOUSE</p>
    </section>
  );
}

function HouseSection({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section id="house" className="house-section section-shell">
      <div className="house-copy" data-reveal>
        <p className="section-number">THE HOUSE</p>
        <h2>{t.house.title}</h2>
        <div className="house-paragraphs">
          {t.house.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
      <div className="material-composition" aria-hidden="true" data-reveal>
        <div className="stone-plane stone-plane-back" />
        <div className="stone-plane stone-plane-front" />
        <div className="light-cut" />
        <div className="bronze-plinth">
          <span>B</span>
        </div>
        <p>ONE HOUSE<br />THREE WORLDS</p>
      </div>
    </section>
  );
}

function WorldDoor({ destination, language, index }: { destination: (typeof destinations)[number]; language: Language; index: number }) {
  const localized = destination[language];
  const isRtl = language === "ar";

  return (
    <a className={`world-wing world-wing-${destination.id}`} href={destination.href} data-reveal>
      <div className="world-atmosphere" aria-hidden="true">
        <span className="world-slab world-slab-left" />
        <span className="world-slab world-slab-right" />
        <span className="world-reveal" />
        <span className="world-threshold" />
      </div>
      <div className="world-index">0{index + 1}</div>
      <div className="world-copy">
        <p>{destination.firstName}</p>
        <h3>{destination.name}</h3>
        <span className="world-discipline">{localized.discipline}</span>
        {language === "en" && <span className="world-arabic">{destination.ar.discipline}</span>}
      </div>
      <span className="world-enter">
        {content[language].worlds.enter}
        <Arrow rtl={isRtl} />
      </span>
    </a>
  );
}

function WorldsSection({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section id="three-worlds" className="worlds-section">
      <div className="worlds-heading section-shell" data-reveal>
        <div>
          <p className="section-number">THREE WORLDS</p>
          <h2>{t.worlds.title}</h2>
        </div>
        <p>{t.worlds.copy}</p>
      </div>
      <div className="worlds-architecture">
        {destinations.map((destination, index) => (
          <WorldDoor destination={destination} language={language} index={index} key={destination.id} />
        ))}
      </div>
    </section>
  );
}

function PrinciplesSection({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section id="philosophy" className="principles-section section-shell">
      <div className="principles-intro" data-reveal>
        <p className="section-number">HOUSE PRINCIPLES</p>
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
    </section>
  );
}

function FinalDestination({ language }: { language: Language }) {
  const t = content[language];
  const isRtl = language === "ar";
  return (
    <section className="final-destination">
      <div className="final-light" aria-hidden="true" />
      <div className="final-content section-shell" data-reveal>
        <div className="final-statement">
          <h2>{t.final.title}</h2>
          {t.final.copy.map((line) => <p key={line}>{line}</p>)}
        </div>
        <nav className="destination-list" aria-label={t.final.title}>
          {destinations.map((destination, index) => (
            <a href={destination.href} key={destination.id}>
              <span className="destination-index">0{index + 1}</span>
              <span>
                <strong>{destination.name}</strong>
                <small>{destination[language].discipline}</small>
              </span>
              <Arrow rtl={isRtl} />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

function Footer({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  const t = content[language];
  return (
    <footer className="site-footer section-shell">
      <div className="footer-brand">
        <div className="footer-logo-surface">
          <Image src="/brand/logo-full.png" alt="BAMAROUF STUDIO" width={792} height={1048} />
        </div>
        <p>{t.footer.house}</p>
      </div>
      <nav className="footer-worlds" aria-label={t.worlds.title}>
        {destinations.map((destination) => <a href={destination.href} key={destination.id}>{destination.name}</a>)}
      </nav>
      <div className="footer-closing">
        <p>{t.footer.closing}</p>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} BAMAROUF STUDIO</span>
          <button type="button" onClick={() => setLanguage(language === "en" ? "ar" : "en")}>{language === "en" ? "العربية" : "ENGLISH"}</button>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [language, setLanguageState] = useState<Language>("en");
  const [introVisible, setIntroVisible] = useState(true);

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
    let frame = 0;
    const updateScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--page-scroll", `${window.scrollY}px`);
        frame = 0;
      });
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.sessionStorage.setItem(LANG_KEY, nextLanguage);
  };

  const finishIntro = () => {
    setIntroVisible(false);
    document.body.classList.remove("intro-open");
  };

  return (
    <>
      <a className="skip-link" href="#home">{content[language].skipContent}</a>
      {introVisible && <Intro language={language} onComplete={finishIntro} />}
      <div className="site-shell">
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <Hero language={language} />
          <HouseSection language={language} />
          <WorldsSection language={language} />
          <PrinciplesSection language={language} />
          <FinalDestination language={language} />
        </main>
        <Footer language={language} setLanguage={setLanguage} />
      </div>
    </>
  );
}
