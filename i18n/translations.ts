
export const translations = {
    en: {
      navbar_slogon: "Creativity drives everything we do",
      hero_title_1: "Your Partner for",
      hero_title_2: "AI-Driven",
      hero_title_3: "Mobile and Web Innovation",
      hero_subtitle:
        "Delivering intelligent digital solutions with AI, web, and mobile development tailored to your business goals.",
      hero_get_started: "Get Started",
      hero_slogan: "Let's code the future",
      ai_automation: "AI Automation",
      ai_integration: "AI Integration",
      mobile_development: "Mobile Development",
      web_development: "Web Development",
      description_ai_automation:
        "Unlock the power of AI-driven automation, streamlining processes and boosting productivity for your business.",
      description_ai_integration:
        "Integrating advanced AI technologies like ChatGPT, DeepSeek, and Gemini to make your apps smarter and more intuitive.",
      description_mobile_development:
        "Elegant, high-performance native apps for iOS and Android, delivering a flawless user experience.",
      description_web_development:
        "We build scalable, robust, and modern web solutions with responsive UIs for seamless experiences across devices.",
    
    },
    fr: {
      navbar_slogon: "La créativité est au cœur de notre excellence",
      hero_title_1: "Votre partenaire pour",
      hero_title_2: "Propulsé par l'IA",
      hero_title_3: "Innovation Web et Mobile",
      hero_subtitle:
        "Des solutions numériques intelligentes adaptées à vos objectifs grâce à l'IA, au web et au mobile.",
      hero_get_started: "Commencer",
      hero_slogan: "Codons le futur",
      ai_automation: "Automatisation IA",
      ai_integration: "Intégration IA",
      mobile_development: "Développement Mobile",
      web_development: "Développement Web",
      description_ai_automation:
        "Libérez la puissance de l'automatisation basée sur l'IA, rationalisant les processus et boostant la productivité pour votre entreprise.",
      description_ai_integration:
        "Intégration des technologies avancées d'IA comme ChatGPT, DeepSeek et Gemini pour rendre vos applications plus intelligentes et intuitives.",
      description_mobile_development:
        "Applications natives élégantes et performantes pour iOS et Android, offrant une expérience utilisateur parfaite.",
      description_web_development:
        "Nous construisons des solutions web modernes, évolutives et robustes avec des interfaces utilisateurs réactives pour des expériences fluides sur tous les appareils.",
    },
    ar: {
      navbar_slogon: "الإبداع طريقنا للتميّز",
      hero_title_1: "شريكك في",
      hero_title_2: "الابتكار المدعوم بالذكاء الاصطناعي",
      hero_title_3: "لتطوير الويب والموبايل",
      hero_subtitle:
        "نقدّم حلولاً رقمية ذكية مخصصة لأهداف عملك باستخدام تقنيات الذكاء الاصطناعي والويب والموبايل.",
      hero_get_started: "ابدأ الآن",
      hero_slogan: "فلنبرمج المستقبل",
      ai_automation: "أتمتة الذكاء الاصطناعي",
      ai_integration: "تكامل الذكاء الاصطناعي",
      mobile_development: "تطوير التطبيقات المحمولة",
      web_development: "تطوير الويب",
      description_ai_automation:
        "افتح قوة الأتمتة المدعومة بالذكاء الاصطناعي، مما يبسط العمليات ويعزز الإنتاجية لشركتك.",
      description_ai_integration:
        "دمج تقنيات الذكاء الاصطناعي المتقدمة مثل ChatGPT و DeepSeek و Gemini لجعل تطبيقاتك أكثر ذكاءً وأكثر بديهية.",
      description_mobile_development:
        "تطبيقات أصلية أنيقة وعالية الأداء لنظامي iOS و Android، توفر تجربة مستخدم خالية من العيوب.",
      description_web_development:
        "نبني حلول ويب قابلة للتوسع وقوية وحديثة مع واجهات مستخدم استجابة لتجارب سلسة عبر الأجهزة.",
    },
    nl: {
      navbar_solgon: "Creativiteit brengt ons naar het hoogste niveau",
      hero_title_1: "Uw partner voor",
      hero_title_2: "AI-gedreven",
      hero_title_3: "Web- en Mobiele Innovatie",
      hero_subtitle:
        "Slimme digitale oplossingen op maat van uw bedrijfsdoelen met AI, web- en mobiele ontwikkeling.",
      hero_get_started: "Aan de slag",
      hero_slogan: "Laten we de toekomst coderen",
      ai_automation: "AI Automatisering",
      ai_integration: "AI Integratie",
      mobile_development: "Mobiele Ontwikkeling",
      web_development: "Web Ontwikkeling",
      description_ai_automation:
        "Ontgrendel de kracht van AI-gedreven automatisering, waardoor processen worden gestroomlijnd en de productiviteit van uw bedrijf wordt verhoogd.",
      description_ai_integration:
        "Integratie van geavanceerde AI-technologieën zoals ChatGPT, DeepSeek en Gemini om uw apps slimmer en intuïtiever te maken.",
      description_mobile_development:
        "Elegante, hoogwaardige native apps voor iOS en Android, die een foutloze gebruikerservaring bieden.",
      description_web_development:
        "Wij bouwen schaalbare, robuuste en moderne weboplossingen met responsieve gebruikersinterfaces voor naadloze ervaringen op verschillende apparaten.",
    
    }
  };
  
  
export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;