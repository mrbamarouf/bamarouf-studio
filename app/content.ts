export type Language = "en" | "ar";

export const destinations = [
  {
    id: "tarik",
    firstName: "TARIK",
    name: "TARIK BAMAROUF",
    href: "https://tarikbamarouf.com/",
    en: {
      discipline: "Digital Experiences",
      description: "Digital experiences composed through structure, motion, and exacting detail.",
      alt: "A curved black-stone passage traced with warm gold light",
    },
    ar: {
      discipline: "التجارب الرقمية",
      description: "تجارب رقمية تُبنى بالهيكل والحركة والعناية الدقيقة بالتفاصيل.",
      alt: "ممرٌ منحنٍ من الحجر الأسود ترسم حوافه إضاءة ذهبية دافئة",
    },
  },
  {
    id: "nour",
    firstName: "NOUR",
    name: "NOUR BAMAROUF",
    href: "https://noorbamarouf.com/",
    en: {
      discipline: "Graphic Design",
      description: "Identity and image shaped through editorial instinct, material sensitivity, and light.",
      alt: "A blush-stone gallery softened by suspended folds of linen",
    },
    ar: {
      discipline: "التصميم الجرافيكي",
      description: "هويّات وصور تصوغها عينٌ تحريرية، وحساسيةٌ للخامة والضوء.",
      alt: "معرضٌ بحجر وردي هادئ تليّنه طيّات كتّان معلّقة",
    },
  },
  {
    id: "khaled",
    firstName: "KHALED",
    name: "KHALED BAMAROUF",
    href: "https://www.khaledbamarouf.com/",
    en: {
      discipline: "Systems Engineering",
      description: "Complex systems resolved through logic, structure, and measured precision.",
      alt: "A precise concrete structure held by dark olive columns and bridges",
    },
    ar: {
      discipline: "هندسة الأنظمة",
      description: "أنظمة معقّدة يحسمها المنطق، وتضبطها البنية والدقّة.",
      alt: "هيكلٌ خرساني دقيق تحمله أعمدة وجسور زيتونية داكنة",
    },
  },
] as const;

export const content = {
  en: {
    skipContent: "Skip to the house",
    languageLabel: "Choose language",
    intro: {
      label: "BAMAROUF STUDIO introduction",
      statement: "A HOUSE OF SPECIALISTS",
      skip: "ENTER THE HOUSE",
    },
    nav: {
      label: "Primary navigation",
      home: "Home",
      house: "The House",
      worlds: "Three Worlds",
      philosophy: "Principles",
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
        "BAMAROUF STUDIO is one house for three independent practices.",
        "Each retains its own name, discipline, and point of view. The architecture brings them together without asking them to become alike.",
      ],
      caption: "One address. Three practices, each entirely its own.",
      materialsLabel: "Materials of the house",
      materials: ["BLACK STONE", "TRAVERTINE", "BRUSHED BRONZE"],
    },
    worlds: {
      title: "THREE INDEPENDENT WORLDS.",
      copy: "Each threshold opens onto a different way of seeing and making. Enter the world that fits the work in front of you.",
      enter: "CROSS THE THRESHOLD",
    },
    principles: {
      title: "WHAT HOLDS THE HOUSE TOGETHER.",
      items: [
        { title: "AUTONOMY", copy: "Each practice owns its craft, voice, and direction." },
        { title: "INTENTION", copy: "Nothing is added without purpose; nothing remains without reason." },
        { title: "RIGOUR", copy: "Different disciplines, held to the same exacting standard." },
      ],
    },
    final: {
      title: "CHOOSE YOUR DESTINATION.",
      copy: ["Three specialists.", "Each with a world of their own.", "One shared address."],
    },
    footer: {
      house: "A HOUSE OF SPECIALISTS",
      closing: "THREE WORLDS. ONE DESTINATION.",
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
      label: "مقدمة بامعروف استديو",
      statement: "بيتٌ للمتخصّصين",
      skip: "اعبر إلى البيت",
    },
    nav: {
      label: "التنقل الرئيسي",
      home: "الرئيسية",
      house: "البيت",
      worlds: "العوالم الثلاثة",
      philosophy: "المبادئ",
    },
    hero: {
      title: ["ثلاثة مسارات.", "وجهة واحدة."],
      copy: "بيتٌ للمتخصّصين.",
      discover: "اكتشف البيت",
      scroll: "البيت",
    },
    house: {
      title: "بيتٌ له غاية.",
      copy: [
        "بامعروف استديو بيتٌ واحد لثلاثة تخصّصات مستقلة.",
        "لكلّ تخصّص اسمه وصوته ومنهجه. يجمعها البيت من دون أن يلغي اختلافها.",
      ],
      caption: "عنوانٌ واحد. وثلاثة تخصّصات، لكلٍّ منها عالمه.",
      materialsLabel: "خامات البيت",
      materials: ["الحجر الأسود", "الترافرتين", "البرونز المصقول"],
    },
    worlds: {
      title: "ثلاثة عوالم مستقلة.",
      copy: "تفتح كلّ عتبة على طريقة مختلفة في الرؤية والعمل. اعبر إلى العالم الذي يلائم ما تبحث عنه.",
      enter: "اعبر إلى العالم",
    },
    principles: {
      title: "ما يقوم عليه البيت.",
      items: [
        { title: "الاستقلال", copy: "لكلّ تخصّص حرفته وصوته واتجاهه." },
        { title: "القصد", copy: "لا يُضاف شيء بلا غاية، ولا يبقى شيء بلا سبب." },
        { title: "الإتقان", copy: "تخصّصات مختلفة، يجمعها معيارٌ واحد لا يقبل المساومة." },
      ],
    },
    final: {
      title: "اختر وجهتك.",
      copy: ["ثلاثة متخصّصين.", "لكلٍّ منهم عالمه.", "وعنوانٌ واحد."],
    },
    footer: {
      house: "بيت المتخصّصين",
      closing: "ثلاثة عوالم. وجهة واحدة.",
    },
    visuals: {
      hero: "ثلاث عتبات معمارية تضيئها درجات البرونزي والوردي والزيتوني",
      house: "ممرٌّ من الترافرتين ينفتح عبر سلسلة من الأقواس الدافئة",
      principles: "البرونز والترافرتين والحجر الأسود تلتقي عند خطّ من الضوء",
      final: "ممرٌّ صامت يقود إلى فتحة ضوء بعيدة",
    },
  },
} as const;
