export type Language = "en" | "ar";

export const destinations = [
  {
    id: "tarik",
    firstName: "TARIK",
    name: "TARIK BAMAROUF",
    href: "https://tarikbamarouf.com/",
    en: { discipline: "Digital Experiences", description: "Spatial depth, precision, and movement shape every digital encounter." },
    ar: { discipline: "التجارب الرقمية", description: "يصوغ العمق والدقة والحركة كل تجربة رقمية." },
  },
  {
    id: "nour",
    firstName: "NOUR",
    name: "NOUR BAMAROUF",
    href: "https://noorbamarouf.com/",
    en: { discipline: "Graphic Design", description: "Editorial rhythm, material sensitivity, and light turn ideas into form." },
    ar: { discipline: "التصميم الجرافيكي", description: "يحوّل الإيقاع وحساسية الخامة والضوء الأفكار إلى شكل." },
  },
  {
    id: "khaled",
    firstName: "KHALED",
    name: "KHALED BAMAROUF",
    href: "https://www.khaledbamarouf.com/",
    en: { discipline: "Systems Engineering", description: "Structure, logic, and measured systems give complexity a clear order." },
    ar: { discipline: "هندسة الأنظمة", description: "تمنح البنية والمنطق والأنظمة المدروسة التعقيد ترتيباً واضحاً." },
  },
] as const;

export const content = {
  en: {
    skipContent: "Skip to the house",
    languageLabel: "Choose language",
    intro: {
      label: "BAMAROUF STUDIO introduction",
      statement: "A HOUSE OF SPECIALISTS",
      skip: "ENTER",
    },
    nav: {
      label: "Primary navigation",
      home: "Home",
      house: "The House",
      worlds: "Three Worlds",
      philosophy: "Philosophy",
    },
    hero: {
      title: ["THREE PATHS.", "ONE DESTINATION."],
      copy: "A HOUSE OF SPECIALISTS.",
      discover: "Discover the house",
      scroll: "The house",
    },
    house: {
      title: "A HOUSE OF PURPOSE.",
      copy: [
        "BAMAROUF STUDIO brings together three independent worlds under one shared house.",
        "Each world has its own identity, discipline, language, and direction. The house does not merge them. It gives each one a place to belong.",
      ],
      caption: "A shared threshold. Three independent practices.",
      materialsLabel: "Materials of the house",
      materials: ["BLACK STONE", "TRAVERTINE", "BRUSHED BRONZE"],
    },
    worlds: {
      title: "THREE INDEPENDENT WORLDS.",
      copy: "One threshold. Three distinct practices. Choose the door that leads to the specialist you need.",
      enter: "ENTER THE WORLD",
    },
    principles: {
      title: "WHAT HOLDS THE HOUSE TOGETHER.",
      items: [
        { title: "INDEPENDENCE", copy: "Three identities. Each complete in its own world." },
        { title: "PURPOSE", copy: "Every discipline has a clear role and direction." },
        { title: "EXCELLENCE", copy: "One shared standard across every experience." },
      ],
    },
    final: {
      title: "CHOOSE YOUR DESTINATION.",
      copy: ["Three specialists.", "Three distinct worlds.", "One house."],
    },
    footer: {
      house: "A HOUSE OF SPECIALISTS",
      closing: "THREE WORLDS. ONE DESTINATION.",
    },
  },
  ar: {
    skipContent: "انتقل إلى البيت",
    languageLabel: "اختر اللغة",
    intro: {
      label: "مقدمة بامعروف استديو",
      statement: "بَيْتُ الْمُتَخَصِّصِينَ",
      skip: "ادخل",
    },
    nav: {
      label: "التنقل الرئيسي",
      home: "الرئيسية",
      house: "البيت",
      worlds: "العوالم الثلاثة",
      philosophy: "الفلسفة",
    },
    hero: {
      title: ["ثلاثة مسارات.", "وجهة واحدة."],
      copy: "بيتٌ للمتخصصين.",
      discover: "اكتشف البيت",
      scroll: "البيت",
    },
    house: {
      title: "بيتٌ له غاية.",
      copy: [
        "يجمع بامعروف استديو ثلاثة عوالم مستقلة تحت بيت واحد.",
        "لكل عالم هويته وتخصصه ولغته واتجاهه الخاص. لا يدمجها البيت، بل يمنح كل عالم مكانه الذي ينتمي إليه.",
      ],
      caption: "عتبة واحدة، وثلاثة تخصصات مستقلة.",
      materialsLabel: "خامات البيت",
      materials: ["الحجر الأسود", "الترافرتين", "البرونز المصقول"],
    },
    worlds: {
      title: "ثلاثة عوالم مستقلة.",
      copy: "عتبة واحدة، وثلاثة تخصصات مستقلة. اختر الباب الذي يقودك إلى المتخصص الذي تبحث عنه.",
      enter: "ادخل إلى العالم",
    },
    principles: {
      title: "ما يجمع البيت.",
      items: [
        { title: "الاستقلال", copy: "ثلاث هويات، لكل واحدة عالمها المتكامل." },
        { title: "الغاية", copy: "لكل تخصص دوره واتجاهه الواضح." },
        { title: "الإتقان", copy: "معيار واحد يجمع جميع التجارب." },
      ],
    },
    final: {
      title: "اختر وجهتك.",
      copy: ["ثلاثة متخصصين.", "ثلاثة عوالم مستقلة.", "بيت واحد."],
    },
    footer: {
      house: "بيت المتخصصين",
      closing: "ثلاثة عوالم. وجهة واحدة.",
    },
  },
} as const;
