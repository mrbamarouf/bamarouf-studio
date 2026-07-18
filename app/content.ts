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
      description: "تجارب رقمية تُصاغ بمنطق واضح، وحركة مدروسة، وتفاعل محسوب.",
      alt: "ممر منحني من الحجر الداكن، تقوده خيوط من الضوء الذهبي",
    },
  },
  {
    id: "noor",
    firstName: "NOOR",
    name: "NOOR BAMAROUF",
    href: "https://noorbamarouf.com/",
    en: {
      discipline: "Graphic Design",
      description: "Visual identities shaped by a clear idea, disciplined composition, and an editorial eye.",
      alt: "A blush-stone gallery softened by suspended folds of linen",
    },
    ar: {
      discipline: "التصميم الجرافيكي",
      description: "هويات بصرية تنطلق من فكرة محكمة، وتتشكّل بحسّ تحريري وتكوين دقيق.",
      alt: "معرض هادئ تتجاور فيه الكتل الوردية وطيات القماش المعلّق",
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
      description: "أنظمة معقّدة تُفهم من جذورها، ثم تُبنى بمنطق واضح ودقة محسوبة.",
      alt: "تكوين معماري دقيق تتقاطع فيه الأعمدة والجسور تحت ضوء أخضر خافت",
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
    skipContent: "انتقل إلى المحتوى",
    languageLabel: "اختر اللغة",
    intro: {
      label: "المشهد الافتتاحي لبامعروف استديو",
      statement: "ثلاثة اختصاصات. رؤية واحدة.",
      skip: "ابدأ الرحلة",
    },
    nav: {
      label: "التنقل في الموقع",
      home: "الرئيسية",
      house: "الاستديو",
      worlds: "العوالم الثلاثة",
      philosophy: "الرؤية",
    },
    hero: {
      title: ["ثلاثة عوالم.", "وجهة واحدة."],
      copy: "هويات مستقلة، تجمعها رؤية واحدة.",
      discover: "اكتشف الاستديو",
      scroll: "واصل الرحلة",
    },
    house: {
      title: "استديو مستقل. ثلاثة عوالم.",
      copy: [
        "يجمع بامعروف استديو ثلاثة اختصاصات إبداعية ضمن رؤية واحدة.",
        "لكل عالم هويته المستقلة،\nولغته البصرية، ومنهجه الخاص.",
        "تجمعها غاية واضحة،\nويربطها معيار واحد من الإتقان،\nفيما يحتفظ كل عالم بحضوره الكامل.",
      ],
      valuesLabel: "مبادئ الاستديو",
      values: [
        { title: "الاستقلال", copy: "لكل عالم هويته الكاملة وصوته الذي لا يلتبس بغيره." },
        { title: "الغاية", copy: "كل قرار ينطلق من سبب واضح، ويقود إلى نتيجة مقصودة." },
        { title: "الإتقان", copy: "معيار واحد يحكم جميع التجارب، مهما اختلفت اختصاصاتها." },
      ],
    },
    worlds: {
      title: "لكل عالم هويته.",
      copy: "ثلاثة اختصاصات مستقلة، لكل منها رؤيته ومنهجه. اختر ما يتطلبه مشروعك.",
      enter: "اكتشف العالم",
    },
    principles: {
      title: "التكامل، حين تستدعيه الفكرة.",
      copy: [
        "ينطلق كل مشروع من اختصاص واضح، ويقوده صاحبه وفق منهجه. ولا يدخل اختصاص آخر إلا حين تتطلب الفكرة حضوره.",
        "عندها تتكامل الخبرات ضمن أدوار محددة، ويبقى لكل عالم صوته ومسؤوليته، فتأخذ الفكرة ما تحتاجه بدقة، من دون زيادة أو تداخل.",
      ],
    },
    final: {
      title: "اختر وجهتك.",
      copy: ["ثلاثة اختصاصات مستقلة.", "اختر الوجهة التي يتطلبها مشروعك."],
    },
    footer: {
      house: "كيان إبداعي مستقل.",
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
