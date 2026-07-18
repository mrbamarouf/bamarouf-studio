import type { Language } from "./content";

export type MobileDestinationId = "tarik" | "noor" | "khaled";

export const mobileDestinations = [
  {
    id: "tarik",
    name: "TARIK BAMAROUF",
    href: "https://tarikbamarouf.com/",
    en: {
      discipline: "Digital Experiences",
      description: "Digital experiences shaped through strategy, clarity, and precise execution.",
      alt: "A sculptural black-stone corridor illuminated by warm bronze light",
    },
    ar: {
      discipline: "التجارب الرقمية",
      description: "تجارب رقمية تُبنى برؤية واضحة،\nوتجمع بين الاستراتيجية والدقة في التنفيذ.",
      alt: "ممر من الحجر الداكن تقوده إضاءة برونزية دافئة",
    },
  },
  {
    id: "noor",
    name: "NOOR BAMAROUF",
    href: "https://noorbamarouf.com/",
    en: {
      discipline: "Graphic Design",
      description: "Visual identities shaped by a clear idea, refined composition, and editorial sensitivity.",
      alt: "A quiet blush gallery shaped by soft stone, fabric, and editorial light",
    },
    ar: {
      discipline: "التصميم الجرافيكي",
      description: "هويات بصرية تنطلق من فكرة واضحة،\nوتتشكّل بحس تحريري وتكوين مدروس.",
      alt: "معرض هادئ بدرجات وردية، تتجاور فيه الأحجار الناعمة مع القماش والضوء",
    },
  },
  {
    id: "khaled",
    name: "KHALED BAMAROUF",
    href: "https://www.khaledbamarouf.com/",
    en: {
      discipline: "Systems Engineering",
      description: "Systems designed with structure, precision, and the ability to grow with purpose.",
      alt: "A precise concrete structure defined by dark olive light and measured geometry",
    },
    ar: {
      discipline: "هندسة الأنظمة",
      description: "أنظمة تُصمَّم بمنطق واضح ودقة عالية،\nوتُبنى لتتطور بثبات مع الاحتياج.",
      alt: "تكوين خرساني دقيق تحدده إضاءة زيتونية وهندسة محسوبة",
    },
  },
] as const;

export type MobileDestination = (typeof mobileDestinations)[number];

export const mobileContent: Record<Language, {
  skipContent: string;
  languageLabel: string;
  menuLabel: string;
  closeLabel: string;
  intro: { label: string; skip: string };
  nav: { label: string; home: string; studio: string; worlds: string; philosophy: string };
  hero: { eyebrow: string; title: [string, string]; copy: [string, string]; cta: string; alt: string };
  worlds: { eyebrow: string; title: string; enter: string };
  philosophy: {
    eyebrow: string;
    title: [string, string];
    copy: [string, string];
    values: Array<{ title: string; copy: string }>;
  };
  final: { eyebrow: string; title: string; copy: [string, string, string]; alt: string };
  footer: { closing: string; copyright: string };
}> = {
  en: {
    skipContent: "Skip to the mobile experience",
    languageLabel: "Select language",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
    intro: {
      label: "BAMAROUF STUDIO mobile opening scene",
      skip: "ENTER THE STUDIO",
    },
    nav: {
      label: "Mobile navigation",
      home: "Home",
      studio: "The Studio",
      worlds: "Three Worlds",
      philosophy: "Philosophy",
    },
    hero: {
      eyebrow: "BAMAROUF STUDIO",
      title: ["THREE WORLDS.", "ONE VISION."],
      copy: [
        "Three independent disciplines.",
        "Each with its own identity, direction, and way of creating.",
      ],
      cta: "DISCOVER THE WORLDS",
      alt: "A tall architectural passage opening toward a sequence of warm illuminated arches",
    },
    worlds: {
      eyebrow: "01 — 03",
      title: "THREE WORLDS",
      enter: "ENTER THE WORLD",
    },
    philosophy: {
      eyebrow: "THE STUDIO",
      title: ["ONE STUDIO.", "THREE INDEPENDENT WORLDS."],
      copy: [
        "BAMAROUF STUDIO brings together three independent disciplines.",
        "Each retains its own identity, language, and direction.",
      ],
      values: [
        { title: "INDEPENDENCE", copy: "Each world retains its complete identity." },
        { title: "CLARITY", copy: "Every discipline follows a clear direction." },
        { title: "EXCELLENCE", copy: "One standard connects every experience." },
      ],
    },
    final: {
      eyebrow: "THE FINAL THRESHOLD",
      title: "CHOOSE YOUR DESTINATION.",
      copy: ["Three specialists.", "Three distinct worlds.", "One studio."],
      alt: "A long silent corridor leading to a distant doorway of warm light",
    },
    footer: {
      closing: "THREE WORLDS. ONE VISION.",
      copyright: "All rights reserved.",
    },
  },
  ar: {
    skipContent: "انتقل إلى تجربة الجوال",
    languageLabel: "اختر اللغة",
    menuLabel: "افتح القائمة",
    closeLabel: "أغلق القائمة",
    intro: {
      label: "المشهد الافتتاحي للجوال في بامعروف استديو",
      skip: "ادخل إلى الاستديو",
    },
    nav: {
      label: "التنقل في نسخة الجوال",
      home: "الرئيسية",
      studio: "الاستديو",
      worlds: "العوالم الثلاثة",
      philosophy: "الفلسفة",
    },
    hero: {
      eyebrow: "بامعروف استديو",
      title: ["ثلاثة عوالم،", "ورؤية واحدة."],
      copy: [
        "ثلاثة تخصصات مستقلة،",
        "لكل منها هويته واتجاهه وطريقته الخاصة في الإبداع.",
      ],
      cta: "اكتشف العوالم",
      alt: "ممر معماري طويل ينفتح على سلسلة من الأقواس المضيئة",
    },
    worlds: {
      eyebrow: "٠١ — ٠٣",
      title: "العوالم الثلاثة",
      enter: "ادخل إلى العالم",
    },
    philosophy: {
      eyebrow: "الاستديو",
      title: ["استديو واحد،", "وثلاثة عوالم مستقلة."],
      copy: [
        "يجمع بامعروف استديو ثلاثة تخصصات مستقلة.",
        "لكل تخصص هويته، ولغته البصرية، واتجاهه الخاص.",
      ],
      values: [
        { title: "الاستقلال", copy: "لكل عالم هويته الكاملة وخصوصيته." },
        { title: "الوضوح", copy: "لكل تخصص اتجاه واضح ومنهج محدد." },
        { title: "الإتقان", copy: "معيار واحد يجمع جميع التجارب." },
      ],
    },
    final: {
      eyebrow: "الوجهة الأخيرة",
      title: "اختر وجهتك.",
      copy: ["ثلاثة متخصصين.", "ثلاثة عوالم مستقلة.", "استديو واحد."],
      alt: "ممر معماري هادئ يقود إلى بوابة بعيدة يضيئها نور دافئ",
    },
    footer: {
      closing: "ثلاثة عوالم، ورؤية واحدة.",
      copyright: "جميع الحقوق محفوظة.",
    },
  },
};
