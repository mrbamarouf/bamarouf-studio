export type Language = "en" | "ar";

export const destinations = [
  {
    id: "tarik",
    firstName: "TARIK",
    name: "TARIK BAMAROUF",
    href: "https://tarikbamarouf.com/",
    en: {
      discipline: "Digital Experiences",
      description: "Digital experiences uniting structure, motion, and interaction.",
      alt: "A curved black-stone passage traced with warm gold light",
    },
    ar: {
      discipline: "التجارب الرقمية",
      description: "تجارب رقمية تتكامل فيها البنية والحركة والتفاعل.",
      alt: "ممر منحني تقوده خطوط ضوء ذهبية نحو عمق داكن",
    },
  },
  {
    id: "noor",
    firstName: "noor",
    name: "noor",
    href: "https://noorbamarouf.com/",
    en: {
      discipline: "Graphic Design",
      description: "Visual identities shaped by a clear idea, disciplined composition, and an editorial eye.",
      alt: "A blush-stone gallery softened by suspended folds of linen",
    },
    ar: {
      discipline: "التصميم الجرافيكي",
      description: "هويات بصرية تنبع من فكرة واضحة، وتصاغ بعين تحريرية دقيقة.",
      alt: "معرض هادئ تتداخل فيه الكتل الوردية مع طيات قماش معلقة",
    },
  },
  {
    id: "khaled",
    firstName: "KHALED",
    name: "KHALED BAMAROUF",
    href: "https://www.khaledbamarouf.com/",
    en: {
      discipline: "Systems Engineering",
      description: "Complex systems built from clear logic and measured precision.",
      alt: "A precise concrete structure held by dark olive columns and bridges",
    },
    ar: {
      discipline: "هندسة الأنظمة",
      description: "هندسة تفهم التعقيد من جذوره، ثم تعيد بناءه في نظام واضح ودقيق.",
      alt: "بنية معمارية دقيقة تتقاطع فيها الأعمدة والجسور تحت ضوء أخضر خافت",
    },
  },
] as const;

export const content = {
  en: {
    skipContent: "Skip to the house",
    languageLabel: "Select language",
    intro: {
      label: "BAMAROUF STUDIO opening scene",
      statement: "A HOUSE OF SPECIALISTS",
      skip: "ENTER THE HOUSE",
    },
    nav: {
      label: "Primary navigation",
      home: "Home",
      house: "The House",
      worlds: "Three Worlds",
      philosophy: "House Philosophy",
    },
    hero: {
      title: ["THREE PATHS.", "ONE DESTINATION."],
      copy: "Three distinct practices, held by one vision.",
      discover: "Enter the house",
      scroll: "Inside the house",
    },
    house: {
      title: "A HOUSE OF PURPOSE.",
      copy: [
        "BAMAROUF STUDIO is a shared address for three independent worlds.",
        "Each has its own identity, language, philosophy, and way of working. The house places them side by side without asking them to become alike.",
        "A single vision connects them while preserving the character of each.",
      ],
      valuesLabel: "Principles of the house",
      values: [
        { title: "AUTONOMY", copy: "Each world remains complete and unmistakably its own." },
        { title: "PURPOSE", copy: "Every decision begins with a clear reason and ends with a defined aim." },
        { title: "RIGOUR", copy: "One standard holds across every experience, however different the worlds may be." },
      ],
    },
    worlds: {
      title: "THREE DISTINCT WORLDS.",
      copy: "Each world has its own discipline, point of view, and way of working. Begin with the one your project calls for.",
      enter: "ENTER THE WORLD",
    },
    principles: {
      title: "WHEN THE WORLDS MEET.",
      copy: [
        "Every project begins within a single world and follows that specialist’s way of working. Another discipline enters only when the idea requires it.",
        "When that happens, the collaboration is clearly defined. Each world keeps its responsibility and voice, while the work gains exactly what it needs.",
      ],
    },
    final: {
      title: "CHOOSE YOUR DESTINATION.",
      copy: ["Three independent worlds.", "Choose the one your project needs."],
    },
    footer: {
      house: "A HOUSE OF SPECIALISTS",
      closing: "THREE WORLDS. ONE VISION.",
    },
    visuals: {
      hero: "Three monumental thresholds illuminated in bronze, blush, and olive light",
      house: "A travertine passage opening through a sequence of warm arches",
      principles: "Bronze, travertine, and black stone meeting along a line of light",
      final: "A silent corridor leading toward a distant opening of light",
    },
  },
  ar: {
    skipContent: "انتقل إلى البيت",
    languageLabel: "اختر اللغة",
    intro: {
      label: "المشهد الافتتاحي لبامعروف استديو",
      statement: "بيتٌ يحتضن ثلاثة عوالم.",
      skip: "ادخل البيت",
    },
    nav: {
      label: "التنقل في الموقع",
      home: "الرئيسية",
      house: "البيت",
      worlds: "العوالم",
      philosophy: "فلسفة البيت",
    },
    hero: {
      title: ["ثلاثة عوالم.", "وجهة واحدة."],
      copy: "لكل عالم هويته، وللبيت رؤية واحدة.",
      discover: "اكتشف البيت",
      scroll: "إلى داخل البيت",
    },
    house: {
      title: "بيتٌ يجمع عوالم مستقلة.",
      copy: [
        "بامعروف استديو ليس شركة تجمع تخصصات مختلفة،\nبل بيت يحتضن ثلاثة عوالم مستقلة.",
        "لكل عالم هويته،\nولغته،\nوفلسفته،\nوطريقته الخاصة في الإبداع.",
        "لا يوحّدها بالتشابه،\nبل يجمعها تحت رؤية واحدة تحترم اختلاف كل عالم.",
      ],
      valuesLabel: "قيم البيت",
      values: [
        { title: "الاستقلال", copy: "لكل عالم هويته الكاملة دون أن يفقد خصوصيته." },
        { title: "الغاية", copy: "كل قرار في هذا البيت يبدأ بسبب واضح وينتهي بهدف واضح." },
        { title: "الإتقان", copy: "معيار واحد يجمع جميع التجارب مهما اختلفت العوالم." },
      ],
    },
    worlds: {
      title: "ثلاثة عوالم مستقلة.",
      copy: "لكل عالم اختصاصه ورؤيته وطريقته في العمل. ابدأ بالعالم الذي يحتاج إليه مشروعك.",
      enter: "ادخل العالم",
    },
    principles: {
      title: "حين تلتقي العوالم.",
      copy: [
        "تبدأ كل تجربة في عالمها، ويقودها صاحب الاختصاص وفق منهجه الخاص. ولا يحضر تخصص آخر إلا حين تستدعيه الفكرة.",
        "عندها تلتقي الخبرات ضمن علاقة واضحة تحفظ لكل عالم مسؤوليته وصوته، وتمنح العمل ما يحتاجه من دون زيادة أو تداخل.",
      ],
    },
    final: {
      title: "اختر وجهتك.",
      copy: ["ثلاثة عوالم مستقلة.", "اختر العالم الذي يحتاج إليه مشروعك."],
    },
    footer: {
      house: "بيتٌ لثلاثة عوالم.",
      closing: "ثلاثة عوالم. رؤية واحدة.",
    },
    visuals: {
      hero: "ثلاثة مداخل معمارية يضيء كل منها بلون مختلف",
      house: "ممر معماري تتوالى فيه الأقواس نحو ضوء هادئ",
      principles: "تفصيل معماري تتقاطع فيه الخامات مع خط رفيع من الضوء",
      final: "ممر هادئ يقود النظر إلى ضوء بعيد",
    },
  },
} as const;
