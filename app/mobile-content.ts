import type { Language } from "./content";

export type MobileDestinationId = "tarik" | "noor" | "khaled";

export const mobileDestinations = [
  {
    id: "tarik",
    name: "TARIK BAMAROUF",
    href: "https://tarikbamarouf.com/",
    en: {
      discipline: "Digital Experiences",
      description: "Digital experiences directed with strategic clarity and exacting execution.",
      alt: "A sculptural black-stone passage traced by warm bronze light",
    },
    ar: {
      discipline: "التجارب الرقمية",
      description: "تجارب رقمية تقودها رؤية استراتيجية واضحة، وتكتمل بتنفيذ دقيق.",
      alt: "ممر نحتي داكن تحدد مساره إضاءة برونزية دافئة",
    },
  },
  {
    id: "noor",
    name: "NOOR BAMAROUF",
    href: "https://noorbamarouf.com/",
    en: {
      discipline: "Graphic Design",
      description: "Visual identities composed with editorial sensitivity and a precise point of view.",
      alt: "A quiet blush gallery shaped by soft stone, fabric, and natural light",
    },
    ar: {
      discipline: "التصميم الجرافيكي",
      description: "هويات بصرية تتشكل بحس تحريري، وتعبّر عن رؤية دقيقة وواضحة.",
      alt: "معرض هادئ بدرجات وردية تجمع بين الحجر الناعم والقماش والضوء الطبيعي",
    },
  },
  {
    id: "khaled",
    name: "KHALED BAMAROUF",
    href: "https://www.khaledbamarouf.com/",
    en: {
      discipline: "Systems Engineering",
      description: "Systems built through structure, precision, and a clear purpose for growth.",
      alt: "A precise concrete interior defined by olive light and structural geometry",
    },
    ar: {
      discipline: "هندسة الأنظمة",
      description: "أنظمة تبنى بمنطق واضح ودقة عالية، لتتطور بثبات وفق غاية محددة.",
      alt: "فضاء خرساني دقيق تحدده إضاءة زيتونية وهندسة إنشائية محسوبة",
    },
  },
] as const;

export type MobileDestination = (typeof mobileDestinations)[number];

type MobileCopy = {
  skipContent: string;
  languageLabel: string;
  menuLabel: string;
  closeLabel: string;
  intro: { label: string; skip: string };
  nav: {
    label: string;
    gate: string;
    studio: string;
    worlds: string;
    final: string;
    contact: string;
  };
  gate: {
    label: string;
    title: [string, string];
    copy: string;
    cta: string;
    alt: string;
  };
  studio: {
    label: string;
    title: [string, string];
    copy: string;
    signatures: [string, string, string];
    next: string;
    alt: string;
  };
  worlds: { enter: string; continue: string };
  final: {
    label: string;
    title: string;
    copy: string;
    alt: string;
  };
  footer: {
    closing: string;
    copyright: string;
    returnToGate: string;
  };
  swipe: string;
};

export const mobileContent: Record<Language, MobileCopy> = {
  en: {
    skipContent: "Skip to the mobile experience",
    languageLabel: "Select language",
    menuLabel: "Open navigation room",
    closeLabel: "Close navigation room",
    intro: {
      label: "BAMAROUF STUDIO mobile opening scene",
      skip: "ENTER THE STUDIO",
    },
    nav: {
      label: "Mobile scene navigation",
      gate: "The Gate",
      studio: "The Studio",
      worlds: "The Worlds",
      final: "Final Threshold",
      contact: "The Studio Mark",
    },
    gate: {
      label: "BAMAROUF STUDIO",
      title: ["THREE WORLDS.", "ONE VISION."],
      copy: "An independent studio bringing together three creative disciplines, each with its own identity and method.",
      cta: "ENTER THE STUDIO",
      alt: "A monumental sequence of warm architectural arches",
    },
    studio: {
      label: "THE STUDIO",
      title: ["INDEPENDENT WORLDS.", "ONE SHARED DIRECTION."],
      copy: "Each world keeps its own language. Clarity, purpose, and craft hold the studio together.",
      signatures: ["INDEPENDENCE", "PURPOSE", "CRAFT"],
      next: "MEET THE WORLDS",
      alt: "Bronze wall and travertine plinth divided by a precise line of warm light",
    },
    worlds: {
      enter: "ENTER THE WORLD",
      continue: "CONTINUE",
    },
    final: {
      label: "THE FINAL THRESHOLD",
      title: "CHOOSE YOUR DESTINATION.",
      copy: "Three independent directions begin with one shared vision. Choose the world you want to enter.",
      alt: "A long silent corridor leading to a distant threshold of warm light",
    },
    footer: {
      closing: "THREE WORLDS. ONE VISION.",
      copyright: "All rights reserved.",
      returnToGate: "RETURN TO THE GATE",
    },
    swipe: "SWIPE TO CONTINUE",
  },
  ar: {
    skipContent: "انتقل إلى تجربة الجوال",
    languageLabel: "اختر اللغة",
    menuLabel: "افتح مساحة التنقل",
    closeLabel: "أغلق مساحة التنقل",
    intro: {
      label: "المشهد الافتتاحي لبامعروف استديو على الجوال",
      skip: "ادخل إلى الاستديو",
    },
    nav: {
      label: "التنقل بين مشاهد الجوال",
      gate: "البوابة",
      studio: "الاستديو",
      worlds: "العوالم",
      final: "الوجهة الأخيرة",
      contact: "هوية الاستديو",
    },
    gate: {
      label: "بامعروف استديو",
      title: ["ثلاثة عوالم.", "رؤية واحدة."],
      copy: "استديو مستقل يجمع ثلاثة اتجاهات إبداعية، لكل منها هويته ومنهجه الخاص.",
      cta: "ادخل إلى الاستديو",
      alt: "تتابع معماري من الأقواس المضيئة بضوء دافئ",
    },
    studio: {
      label: "الاستديو",
      title: ["عوالم مستقلة،", "تجمعها رؤية واحدة."],
      copy: "يحافظ كل عالم على لغته الخاصة، بينما يجمعها وضوح الغاية ودقة الحرفة.",
      signatures: ["الاستقلال", "الغاية", "الإتقان"],
      next: "تعرّف على العوالم",
      alt: "جدار برونزي وقاعدة حجرية يفصل بينهما خط دقيق من الضوء الدافئ",
    },
    worlds: {
      enter: "ادخل إلى العالم",
      continue: "تابع الرحلة",
    },
    final: {
      label: "الوجهة الأخيرة",
      title: "اختر وجهتك.",
      copy: "ثلاثة اتجاهات مستقلة تبدأ من رؤية واحدة. اختر العالم الذي تريد دخوله.",
      alt: "ممر معماري هادئ يقود إلى عتبة بعيدة يضيئها نور دافئ",
    },
    footer: {
      closing: "ثلاثة عوالم. رؤية واحدة.",
      copyright: "جميع الحقوق محفوظة.",
      returnToGate: "العودة إلى البوابة",
    },
    swipe: "اسحب للمتابعة",
  },
};
