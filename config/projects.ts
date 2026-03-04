export interface ProjectTranslation {
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface Project {
  id: number;
  slug: string;
  category: string;
  categoryFr: string;
  categoryAr: string;
  technologies: string[];
  status: "live" | "beta" | "completed";
  year: string;
  client: string;
  icon: string;
  images: string[];
  translations: {
    en: ProjectTranslation;
    fr: ProjectTranslation;
    ar: ProjectTranslation;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "lnd-elearning-platform",
    category: "E-learning & Enterprise",
    categoryFr: "E-learning & Entreprise",
    categoryAr: "التعلم الإلكتروني والمؤسسات",
    technologies: [
      "Directus",
      "Node.js",
      "PostgreSQL",
      "RBAC",
      "Workflow Automation",
    ],
    status: "completed",
    year: "2024",
    client: "Saudi Aramco",
    icon: "🎓",
    images: [
      "/projects/lnd/dashboard.png",
      "/projects/lnd/services.png",
      "/projects/lnd/messages.png",
      "/projects/lnd/request-review.png",
    ],
    translations: {
      en: {
        title: "LND — Enterprise E-learning Platform",
        shortDescription:
          "A secure, automated learning and development platform built for Saudi Aramco — replacing fragmented manual workflows with a unified, role-governed digital ecosystem.",
        fullDescription:
          "Built for Saudi Aramco's Learning & Development division, this platform consolidates training management, service requests, course tracking, and employee communications into a single governed system. Powered by Directus as a headless CMS and backed by a Node.js API layer and PostgreSQL, the platform delivers granular RBAC permissions and workflow automation — eliminating the manual coordination that previously spanned multiple departments.",
        challenge:
          "Aramco's L&D team was juggling fragmented data sources, heavy manual approval workflows, and a weak permissions model that created security gaps and bottlenecks. Course requests, service approvals, and training records existed in silos — slowing down every process and making compliance audits painful.",
        solution:
          "We implemented Directus as the backbone, designing custom content schemas for training modules, user roles, and request flows. Node.js services handle automation triggers and business logic, PostgreSQL was optimised for complex reporting queries, and granular RBAC was configured to enforce department-level access down to field visibility.",
        results: [
          "Unified learning management, service portal and communications in one platform",
          "Eliminated manual approval routing — automated via Directus Flows",
          "Granular RBAC enforcing department-level and field-level access control",
          "Reduced training request processing time from days to hours",
          "Full audit trail on all content changes and user actions",
        ],
        metaTitle: "LND Enterprise E-learning Platform — Perla AI Case Study",
        metaDescription:
          "How Perla AI built a secure, automated learning and development platform for Saudi Aramco — replacing fragmented workflows with Directus, Node.js, and PostgreSQL.",
      },
      fr: {
        title: "LND — Plateforme E-learning d'Entreprise",
        shortDescription:
          "Une plateforme d'apprentissage et de développement sécurisée et automatisée construite pour Saudi Aramco — remplaçant des flux de travail manuels fragmentés par un écosystème numérique unifié.",
        fullDescription:
          "Construite pour la division Formation et Développement de Saudi Aramco, cette plateforme consolide la gestion des formations, les demandes de services, le suivi des cours et les communications employés en un seul système gouverné. Propulsée par Directus comme CMS headless et soutenue par une couche API Node.js et PostgreSQL, la plateforme offre des permissions RBAC granulaires et une automatisation des flux de travail.",
        challenge:
          "L'équipe L&D d'Aramco jonglait avec des sources de données fragmentées, des flux d'approbation manuels lourds et un modèle de permissions faible qui créait des lacunes de sécurité. Les demandes de cours, les approbations de services et les dossiers de formation existaient en silos.",
        solution:
          "Nous avons implémenté Directus comme épine dorsale, en concevant des schémas de contenu personnalisés pour les modules de formation, les rôles utilisateurs et les flux de demandes. Les services Node.js gèrent les déclencheurs d'automatisation, PostgreSQL a été optimisé pour les requêtes de reporting complexes.",
        results: [
          "Gestion unifiée des formations, portail de services et communications en une seule plateforme",
          "Élimination du routage manuel des approbations — automatisé via Directus Flows",
          "RBAC granulaire appliquant un contrôle d'accès au niveau du département et du champ",
          "Réduction du temps de traitement des demandes de formation de jours à heures",
          "Audit trail complet sur toutes les modifications de contenu et actions utilisateurs",
        ],
        metaTitle:
          "Plateforme E-learning LND pour Aramco — Étude de Cas Perla AI",
        metaDescription:
          "Comment Perla AI a construit une plateforme d'apprentissage sécurisée et automatisée pour Saudi Aramco avec Directus, Node.js et PostgreSQL.",
      },
      ar: {
        title: "LND — منصة التعلم والتطوير المؤسسي",
        shortDescription:
          "منصة تعلم وتطوير آمنة وآلية مبنية لأرامكو السعودية — تستبدل سير العمل اليدوي المتشتت بنظام رقمي موحد.",
        fullDescription:
          "بُنيت لقسم التعلم والتطوير في أرامكو السعودية، توحّد هذه المنصة إدارة التدريب وطلبات الخدمة وتتبع الدورات واتصالات الموظفين في نظام واحد محكوم. مدعومة بـ Directus كـ CMS بلا رأس، وخلفية Node.js وقاعدة بيانات PostgreSQL، وتقدم صلاحيات RBAC دقيقة وأتمتة سير العمل.",
        challenge:
          "كان فريق التعلم والتطوير في أرامكو يتعامل مع مصادر بيانات متشتتة وسير عمل موافقة يدوية ثقيلة ونموذج صلاحيات ضعيف خلق ثغرات أمنية. كانت طلبات الدورات وموافقات الخدمات وسجلات التدريب موجودة في صوامع منفصلة.",
        solution:
          "طبّقنا Directus كعمود فقري، وصمّمنا مخططات محتوى مخصصة لوحدات التدريب وأدوار المستخدمين وتدفقات الطلبات. تتولى خدمات Node.js التشغيل التلقائي والمنطق التجاري، تم تحسين PostgreSQL لاستعلامات الإبلاغ المعقدة.",
        results: [
          "توحيد إدارة التعلم وبوابة الخدمات والاتصالات في منصة واحدة",
          "إلغاء توجيه الموافقات اليدوية — أُتمت عبر Directus Flows",
          "RBAC دقيق يفرض التحكم في الوصول على مستوى القسم والحقل",
          "تقليل وقت معالجة طلبات التدريب من أيام إلى ساعات",
          "سجل تدقيق كامل لجميع تغييرات المحتوى وإجراءات المستخدمين",
        ],
        metaTitle: "منصة LND للتعلم المؤسسي لأرامكو — دراسة حالة Perla AI",
        metaDescription:
          "كيف بنت Perla AI منصة تعليم آمنة وآلية لأرامكو السعودية باستخدام Directus وNode.js وPostgreSQL.",
      },
    },
  },
  {
    id: 2,
    slug: "wingman-ai-matching",
    category: "AI SaaS & Talent Matching",
    categoryFr: "IA SaaS & Matching de Talents",
    categoryAr: "الذكاء الاصطناعي وتوافق المواهب",
    technologies: [
      "Next.js",
      "NestJS",
      "Directus",
      "PostgreSQL",
      "Redis",
      "n8n",
      "Gemini",
      "ChatGPT",
    ],
    status: "live",
    year: "2024",
    client: "ExtraExpertise (Belgium)",
    icon: "🤝",
    images: [
      "/projects/wingman/job-board.png",
      "/projects/wingman/talent-profiles.png",
      "/projects/wingman/community.png",
      "/projects/wingman/dna-profile.png",
    ],
    translations: {
      en: {
        title: "Wingman — AI Freelancer Matching Platform",
        shortDescription:
          "A multi-tenant SaaS platform that replaces keyword job boards with AI-powered \"Professional DNA\" matching — connecting freelancers to opportunities with surgical precision.",
        fullDescription:
          "Built for ExtraExpertise in Belgium, Wingman is a full-featured AI talent marketplace that goes far beyond keyword matching. Freelancers build a rich \"Professional DNA\" profile capturing skills, experience depth, soft skills, and domain expertise. The AI engine then cross-references these profiles against live opportunities using Gemini and ChatGPT — surfacing high-precision matches that traditional job boards miss entirely. The platform supports multi-tenancy, a community feed, and Redis-cached fast query results for a seamless user experience.",
        challenge:
          "Traditional keyword-based job boards produce noisy, low-accuracy matches. Freelancers waste hours applying to irrelevant jobs while clients sift through mismatched candidates. ExtraExpertise needed a fundamentally smarter matching engine that understood the depth of a professional's expertise, not just their job title.",
        solution:
          "We built a multi-tenant Next.js frontend with NestJS handling all business logic, Directus for content management, and an AI matching engine powered by Gemini and ChatGPT APIs. Redis caches frequent query patterns for sub-second response times. n8n orchestrates automated notifications and onboarding workflows across the platform.",
        results: [
          "AI matching engine outperforms keyword search with dramatically higher relevance scores",
          "Multi-tenant architecture supports multiple client organisations from a single deployment",
          "Professional DNA profiles capture expertise depth across 50+ skill dimensions",
          "Redis-powered queries deliver match results in under 300ms",
          "n8n automation handles onboarding, alerts and opportunity notifications end-to-end",
        ],
        metaTitle:
          "Wingman AI Freelancer Matching Platform — Perla AI Case Study",
        metaDescription:
          "How Perla AI built an AI-powered talent matching SaaS for ExtraExpertise Belgium — replacing keyword job boards with Professional DNA profiling and Gemini/ChatGPT matching.",
      },
      fr: {
        title: "Wingman — Plateforme IA de Matching Freelance",
        shortDescription:
          "Une plateforme SaaS multi-tenant qui remplace les job boards par mot-clé avec un matching IA basé sur l'«ADN Professionnel» — connectant les freelances aux opportunités avec une précision chirurgicale.",
        fullDescription:
          "Développé pour ExtraExpertise en Belgique, Wingman est une marketplace de talents IA qui va bien au-delà du matching par mots-clés. Les freelances construisent un profil «ADN Professionnel» riche capturant compétences, profondeur d'expérience, soft skills et expertise sectorielle. Le moteur IA croise ensuite ces profils avec les opportunités en direct via Gemini et ChatGPT.",
        challenge:
          "Les job boards traditionnels basés sur les mots-clés produisent des correspondances bruyantes et peu précises. Les freelances perdent des heures à postuler à des offres non pertinentes. ExtraExpertise avait besoin d'un moteur de matching fondamentalement plus intelligent qui comprenait la profondeur de l'expertise d'un professionnel.",
        solution:
          "Nous avons construit un frontend Next.js multi-tenant avec NestJS pour la logique métier, Directus pour la gestion de contenu, et un moteur de matching IA alimenté par les APIs Gemini et ChatGPT. Redis met en cache les patterns de requêtes fréquents. n8n orchestre les notifications et workflows d'onboarding.",
        results: [
          "Le moteur de matching IA surpasse la recherche par mots-clés avec des scores de pertinence nettement supérieurs",
          "Architecture multi-tenant supportant plusieurs organisations clientes depuis un seul déploiement",
          "Les profils ADN Professionnel capturent la profondeur d'expertise sur 50+ dimensions de compétences",
          "Les requêtes Redis livrent les résultats de matching en moins de 300ms",
          "L'automatisation n8n gère l'onboarding, les alertes et notifications d'opportunités de bout en bout",
        ],
        metaTitle:
          "Wingman Plateforme IA de Matching Freelance — Étude de Cas Perla AI",
        metaDescription:
          "Comment Perla AI a développé une SaaS de matching de talents IA pour ExtraExpertise Belgique — remplaçant les job boards par le profilage ADN Professionnel et le matching Gemini/ChatGPT.",
      },
      ar: {
        title: "Wingman — منصة التوافق الذكي للمستقلين",
        shortDescription:
          "منصة SaaS متعددة المستأجرين تستبدل لوحات الوظائف بالكلمات المفتاحية بمطابقة ذكاء اصطناعي قائمة على «الحمض النووي المهني» — تربط المستقلين بالفرص بدقة فائقة.",
        fullDescription:
          "بُني لصالح ExtraExpertise في بلجيكا، Wingman هو سوق مواهب ذكاء اصطناعي متكامل يتجاوز المطابقة بالكلمات المفتاحية. يبني المستقلون ملف «الحمض النووي المهني» الغني الذي يرصد المهارات وعمق الخبرة والمهارات الناعمة. يقوم محرك الذكاء الاصطناعي بعد ذلك بمقارنة هذه الملفات مع الفرص الحية باستخدام Gemini وChatGPT.",
        challenge:
          "تنتج لوحات الوظائف التقليدية القائمة على الكلمات المفتاحية مطابقات ضوضائية وغير دقيقة. يضيع المستقلون ساعات في التقدم لوظائف غير ذات صلة. احتاجت ExtraExpertise إلى محرك مطابقة أذكى جوهرياً يفهم عمق خبرة المهنيين.",
        solution:
          "بنينا واجهة أمامية Next.js متعددة المستأجرين مع NestJS لمنطق الأعمال وDirectus لإدارة المحتوى ومحرك مطابقة ذكاء اصطناعي مدعوم بـ Gemini وChatGPT. يخزّن Redis أنماط الاستعلام المتكررة. تنظّم n8n سير عمل الإشعارات التلقائية والتأهيل.",
        results: [
          "يتفوق محرك المطابقة بالذكاء الاصطناعي على البحث بالكلمات المفتاحية بدرجات صلة أعلى بكثير",
          "بنية متعددة المستأجرين تدعم منظمات عميل متعددة من نشر واحد",
          "تلتقط ملفات الحمض النووي المهني عمق الخبرة عبر أكثر من 50 بُعداً من المهارات",
          "تقدم استعلامات Redis نتائج المطابقة في أقل من 300 مللي ثانية",
          "تتولى أتمتة n8n التأهيل والتنبيهات وإشعارات الفرص من البداية للنهاية",
        ],
        metaTitle: "Wingman منصة التوافق الذكي للمستقلين — دراسة حالة Perla AI",
        metaDescription:
          "كيف بنت Perla AI منصة SaaS لمطابقة المواهب بالذكاء الاصطناعي لـ ExtraExpertise بلجيكا — استبدال لوحات الوظائف بالتوصيف المهني ومطابقة Gemini/ChatGPT.",
      },
    },
  },
  {
    id: 3,
    slug: "dnext-analytics",
    category: "Data Engineering & Cloud",
    categoryFr: "Ingénierie des Données & Cloud",
    categoryAr: "هندسة البيانات والحوسبة السحابية",
    technologies: [
      "React",
      "ExpressJS",
      "AWS Lambda",
      "EventBridge",
      "DynamoDB",
      "Elasticsearch",
    ],
    status: "live",
    year: "2023",
    client: "DNEXT (Switzerland)",
    icon: "📊",
    images: [],
    translations: {
      en: {
        title: "DNEXT — Commodity Data Analytics Platform",
        shortDescription:
          "A real-time cloud analytics platform built for a Swiss data company — ingesting high-volume commodity datasets through an event-driven AWS pipeline and making them instantly searchable via Elasticsearch.",
        fullDescription:
          "Built for DNEXT in Switzerland, this platform ingests, normalises, and indexes massive commodity market datasets from multiple formats and providers. The architecture is fully event-driven on AWS: EventBridge triggers Lambda functions on data arrival, which transform and push records into DynamoDB and Elasticsearch. A React frontend delivers advanced filtering, aggregations, and export capabilities — turning raw market data into actionable intelligence for analysts.",
        challenge:
          "DNEXT was receiving high-volume commodity data in multiple inconsistent formats from various providers. Manual ingestion was slow and error-prone, search latency was high, and analysts couldn't perform the real-time cross-dataset aggregations their clients expected.",
        solution:
          "We designed a fully serverless ingestion pipeline on AWS: EventBridge routes incoming data events to Lambda processors that normalise, validate, and index each record. DynamoDB stores structured metadata while Elasticsearch powers the full-text and faceted search layer. The React frontend wraps it all in a responsive analytics dashboard with advanced filtering and data export.",
        results: [
          "Fully automated, event-driven ingestion pipeline — zero manual data handling",
          "Sub-second search across millions of commodity records via Elasticsearch",
          "Support for multiple data formats and provider schemas with automatic normalisation",
          "Serverless architecture scales horizontally with data volume at minimal cost",
          "Analysts can build complex multi-field aggregations and export results instantly",
        ],
        metaTitle:
          "DNEXT Commodity Data Analytics Platform — Perla AI Case Study",
        metaDescription:
          "How Perla AI built a real-time cloud analytics platform for DNEXT Switzerland — event-driven AWS pipeline with Elasticsearch powering sub-second commodity data search.",
      },
      fr: {
        title: "DNEXT — Plateforme d'Analyse de Données Commodités",
        shortDescription:
          "Une plateforme d'analytique cloud en temps réel pour une société de données suisse — ingérant des datasets de matières premières à haut volume via un pipeline AWS événementiel et les rendant instantanément recherchables via Elasticsearch.",
        fullDescription:
          "Construite pour DNEXT en Suisse, cette plateforme ingère, normalise et indexe des datasets massifs de marchés de matières premières depuis plusieurs formats et fournisseurs. L'architecture est entièrement événementielle sur AWS : EventBridge déclenche des fonctions Lambda à l'arrivée des données, qui transforment et poussent les enregistrements dans DynamoDB et Elasticsearch.",
        challenge:
          "DNEXT recevait des données de matières premières à haut volume dans plusieurs formats incohérents. L'ingestion manuelle était lente et sujette aux erreurs, la latence de recherche était élevée, et les analystes ne pouvaient pas effectuer les agrégations en temps réel que leurs clients attendaient.",
        solution:
          "Nous avons conçu un pipeline d'ingestion entièrement serverless sur AWS : EventBridge route les événements de données vers des processeurs Lambda qui normalisent, valident et indexent chaque enregistrement. DynamoDB stocke les métadonnées structurées tandis qu'Elasticsearch alimente la recherche plein-texte et facettée.",
        results: [
          "Pipeline d'ingestion entièrement automatisé et événementiel — zéro manipulation manuelle",
          "Recherche en moins d'une seconde sur des millions d'enregistrements via Elasticsearch",
          "Support de multiples formats de données avec normalisation automatique",
          "Architecture serverless scalant horizontalement avec le volume de données à coût minimal",
          "Les analystes peuvent construire des agrégations multi-champs complexes et exporter les résultats instantanément",
        ],
        metaTitle:
          "DNEXT Plateforme Analytique Données Commodités — Étude de Cas Perla AI",
        metaDescription:
          "Comment Perla AI a construit une plateforme d'analytique cloud pour DNEXT Suisse — pipeline AWS événementiel avec Elasticsearch pour une recherche sub-seconde sur données commodités.",
      },
      ar: {
        title: "DNEXT — منصة تحليل بيانات السلع",
        shortDescription:
          "منصة تحليلات سحابية في الوقت الفعلي لشركة بيانات سويسرية — تستوعب مجموعات بيانات السلع الضخمة عبر خط أنابيب AWS مدفوع بالأحداث وتجعلها قابلة للبحث فوراً عبر Elasticsearch.",
        fullDescription:
          "بُنيت لـ DNEXT في سويسرا، تستوعب هذه المنصة وتوحّد وتفهرس مجموعات بيانات أسواق السلع الضخمة من تنسيقات ومزودين متعددين. البنية مدفوعة بالأحداث بالكامل على AWS: يشغّل EventBridge وظائف Lambda عند وصول البيانات، التي تحوّل السجلات وتدفعها إلى DynamoDB وElasticsearch.",
        challenge:
          "كانت DNEXT تستقبل بيانات سلع ضخمة بتنسيقات متعددة وغير متسقة. كان الاستيعاب اليدوي بطيئاً وعرضة للأخطاء، وكان زمن استجابة البحث مرتفعاً، ولم يستطع المحللون إجراء التجميعات عبر المجموعات في الوقت الفعلي.",
        solution:
          "صممنا خط أنابيب استيعاب بدون خوادم بالكامل على AWS: يوجّه EventBridge أحداث البيانات الواردة إلى معالجات Lambda التي توحّد وتتحقق وتفهرس كل سجل. يخزّن DynamoDB البيانات الوصفية المنظمة بينما يشغّل Elasticsearch طبقة البحث.",
        results: [
          "خط أنابيب استيعاب آلي بالكامل ومدفوع بالأحداث — لا معالجة يدوية للبيانات",
          "بحث في أقل من ثانية عبر ملايين سجلات السلع عبر Elasticsearch",
          "دعم تنسيقات بيانات متعددة مع توحيد تلقائي",
          "البنية بدون خوادم تتوسع أفقياً مع حجم البيانات بتكلفة منخفضة",
          "يمكن للمحللين بناء تجميعات متعددة الحقول المعقدة وتصدير النتائج فوراً",
        ],
        metaTitle: "DNEXT منصة تحليل بيانات السلع — دراسة حالة Perla AI",
        metaDescription:
          "كيف بنت Perla AI منصة تحليلات سحابية لـ DNEXT سويسرا — خط أنابيب AWS مدفوع بالأحداث مع Elasticsearch للبحث السريع في بيانات السلع.",
      },
    },
  },
  {
    id: 4,
    slug: "yoo-connect-crm",
    category: "CRM & AI Automation",
    categoryFr: "CRM & Automatisation IA",
    categoryAr: "إدارة علاقات العملاء والأتمتة الذكية",
    technologies: [
      "Flutter",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Mistral AI",
      "n8n",
    ],
    status: "live",
    year: "2025",
    client: "Yoo Connect (Saudi Arabia)",
    icon: "🔗",
    images: [
      "/projects/yooconnect/contacts.png",
      "/projects/yooconnect/add-contact.png",
      "/projects/yooconnect/contact-form.png",
      "/projects/yooconnect/geo-view.png",
      "/projects/yooconnect/dashboard.png",
      "/projects/yooconnect/mobile.png",
      "/projects/yooconnect/overview.png",
    ],
    translations: {
      en: {
        title: "Yoo Connect — AI-Powered CRM & Business Card Platform",
        shortDescription:
          "A cross-platform CRM built for the Saudi market — turning physical business cards into structured, searchable contact records instantly using OCR and Mistral AI, with full mobile and web support.",
        fullDescription:
          "Yoo Connect solves a real pain point in relationship-heavy markets like Saudi Arabia: the mountain of undigitised business cards that never make it into a CRM. The platform combines a Flutter mobile app and a Next.js web dashboard, allowing users to scan physical cards, import from LinkedIn, or enter contacts manually. Mistral AI extracts and enriches contact data from scanned images, while n8n automates follow-up workflows and pipeline notifications. PostgreSQL and MongoDB work in tandem for relational contacts and document-style interaction history.",
        challenge:
          "Sales and business development teams in Saudi Arabia were drowning in physical business cards and WhatsApp contact threads. Contacts were duplicated, incomplete, and never actionable — costing deals and relationships. No existing CRM understood the bilingual Arabic/English naming conventions or the local business card format.",
        solution:
          "We built a cross-platform Flutter mobile app paired with a Next.js web dashboard. Mistral AI handles OCR and contact enrichment from business card images. Four digitisation paths give users flexibility: scan a card, enter manually, import from LinkedIn, or batch upload via CSV. n8n powers post-scan follow-up workflows and CRM pipeline automation. Redis caches contact lookups for snappy performance across both web and mobile.",
        results: [
          "Business card to CRM record in under 5 seconds via AI OCR scanning",
          "Supports Arabic and English contact formats natively",
          "4 import methods: card scan, manual entry, LinkedIn, and CSV batch upload",
          "Automated follow-up workflows via n8n reduce lost leads",
          "Cross-platform: full feature parity between Flutter mobile and Next.js web",
        ],
        metaTitle:
          "Yoo Connect AI CRM & Business Card Platform — Perla AI Case Study",
        metaDescription:
          "How Perla AI built a cross-platform CRM for Saudi Arabia using Mistral AI OCR, Flutter, and Next.js — turning business cards into structured contact records in seconds.",
      },
      fr: {
        title: "Yoo Connect — CRM & Plateforme IA de Cartes de Visite",
        shortDescription:
          "Un CRM multi-plateforme pour le marché saoudien — transformant les cartes de visite physiques en contacts structurés et recherchables instantanément via OCR et Mistral AI.",
        fullDescription:
          "Yoo Connect résout un vrai problème dans les marchés relationnels comme l'Arabie Saoudite : la montagne de cartes de visite non numérisées qui n'entrent jamais dans un CRM. La plateforme combine une app mobile Flutter et un tableau de bord web Next.js. Mistral AI extrait et enrichit les données de contact depuis les images scannées, tandis que n8n automatise les workflows de suivi.",
        challenge:
          "Les équipes commerciales en Arabie Saoudite se noyaient dans les cartes de visite physiques et les fils de contact WhatsApp. Les contacts étaient dupliqués, incomplets et jamais actionnables. Aucun CRM existant ne comprenait les conventions de nommage bilingues arabe/anglais.",
        solution:
          "Nous avons construit une app mobile Flutter multi-plateforme couplée à un tableau de bord web Next.js. Mistral AI gère l'OCR et l'enrichissement des contacts depuis les images de cartes. n8n pilote les workflows de suivi post-scan et l'automatisation du pipeline CRM. Redis met en cache les lookups de contacts.",
        results: [
          "Carte de visite vers enregistrement CRM en moins de 5 secondes via scan OCR IA",
          "Support natif des formats de contact arabes et anglais",
          "4 méthodes d'import : scan de carte, saisie manuelle, LinkedIn et upload CSV en lot",
          "Workflows de suivi automatisés via n8n réduisant les leads perdus",
          "Multi-plateforme : parité complète des fonctionnalités entre mobile Flutter et web Next.js",
        ],
        metaTitle:
          "Yoo Connect CRM IA & Cartes de Visite — Étude de Cas Perla AI",
        metaDescription:
          "Comment Perla AI a développé un CRM multi-plateforme pour l'Arabie Saoudite avec Mistral AI OCR, Flutter et Next.js — transformant les cartes de visite en contacts structurés en secondes.",
      },
      ar: {
        title: "Yoo Connect — منصة إدارة علاقات العملاء وبطاقات الأعمال الذكية",
        shortDescription:
          "نظام CRM متعدد المنصات مبني للسوق السعودية — يحوّل بطاقات الأعمال المادية إلى سجلات اتصال منظمة وقابلة للبحث فوراً باستخدام OCR وMistral AI.",
        fullDescription:
          "يحل Yoo Connect مشكلة حقيقية في الأسواق القائمة على العلاقات مثل المملكة العربية السعودية: جبل بطاقات الأعمال غير الرقمية التي لا تدخل أبداً إلى CRM. تجمع المنصة تطبيق Flutter للجوال ولوحة تحكم Next.js على الويب. يستخرج Mistral AI بيانات الاتصال من الصور الممسوحة ويثريها، بينما تؤتمت n8n سير عمل المتابعة.",
        challenge:
          "كانت فرق المبيعات والتطوير التجاري في المملكة العربية السعودية تغرق في بطاقات الأعمال المادية وخيوط اتصال واتساب. كانت جهات الاتصال مكررة وغير مكتملة وغير قابلة للتنفيذ. لم يفهم أي CRM موجود اصطلاحات التسمية ثنائية اللغة العربية/الإنجليزية.",
        solution:
          "بنينا تطبيق Flutter للجوال متعدد المنصات مقترناً بلوحة تحكم Next.js على الويب. يتولى Mistral AI معالجة OCR وإثراء جهات الاتصال من صور البطاقات. تقدم أربعة مسارات رقمنة المرونة للمستخدمين. تشغّل n8n سير عمل المتابعة وأتمتة خط أنابيب CRM. يخزّن Redis عمليات البحث عن جهات الاتصال.",
        results: [
          "من بطاقة عمل إلى سجل CRM في أقل من 5 ثوانٍ عبر المسح الضوئي بالذكاء الاصطناعي",
          "يدعم تنسيقات الاتصال العربية والإنجليزية بشكل أصلي",
          "4 طرق استيراد: مسح البطاقة، الإدخال اليدوي، LinkedIn، ورفع CSV جماعي",
          "سير عمل متابعة آلية عبر n8n تقلل العملاء المحتملين الضائعين",
          "متعدد المنصات: تكافؤ كامل للميزات بين Flutter للجوال وNext.js للويب",
        ],
        metaTitle:
          "Yoo Connect منصة CRM الذكية وبطاقات الأعمال — دراسة حالة Perla AI",
        metaDescription:
          "كيف بنت Perla AI نظام CRM متعدد المنصات للمملكة العربية السعودية باستخدام Mistral AI OCR وFlutter وNext.js — تحويل بطاقات الأعمال إلى سجلات اتصال منظمة في ثوانٍ.",
      },
    },
  },
  {
    id: 5,
    slug: "vvtiv-healthcare",
    category: "Healthcare & AI",
    categoryFr: "Santé & IA",
    categoryAr: "الرعاية الصحية والذكاء الاصطناعي",
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "GPT-4",
      "RBAC",
    ],
    status: "live",
    year: "2024",
    client: "VVTIV (Belgium)",
    icon: "🏥",
    images: ["/projects/vvtiv/home.png"],
    translations: {
      en: {
        title: "VVTIV — Secure Healthcare Platform for Therapists",
        shortDescription:
          "A confidential patient management platform for Belgian therapists — secure scheduling, AI-assisted patient communication, and centralised case management with strict data privacy.",
        fullDescription:
          "Built for VVTIV in Belgium, this platform provides therapists with a secure, all-in-one environment for managing their practice. Therapists can schedule sessions, track patient progress, manage case files, and communicate securely — all within a system designed from the ground up for healthcare confidentiality. A GPT-powered AI assistant helps patients with pre-session intake and between-session support, reducing therapist administrative load while improving patient engagement.",
        challenge:
          "Therapists at VVTIV were using a patchwork of generic tools — calendars, email, and shared drives — none of which were designed for healthcare confidentiality or therapeutic workflows. Patient data was scattered, communication wasn't secure, and there was no central view of a patient's journey across sessions.",
        solution:
          "We built a Next.js web application with a NestJS backend, enforcing strict RBAC so therapists only access their own patients' data. PostgreSQL handles all structured patient and session data, while Redis accelerates real-time session state and notification delivery. A GPT-4 powered chat layer handles patient intake and between-session support with configurable guardrails to keep conversations therapeutically appropriate.",
        results: [
          "End-to-end data isolation: therapists access only their own patient records",
          "GPT-4 AI assistant reduces therapist admin time with automated intake and support",
          "Centralised case management with full session history and progress tracking",
          "Secure in-platform messaging replaces insecure email and messaging apps",
          "Redis-backed real-time notifications for appointment reminders and follow-ups",
        ],
        metaTitle: "VVTIV Healthcare Platform for Therapists — Perla AI Case Study",
        metaDescription:
          "How Perla AI built a secure, GDPR-conscious healthcare platform for Belgian therapists — GPT-4 AI support, RBAC patient isolation, and centralised case management.",
      },
      fr: {
        title: "VVTIV — Plateforme de Santé Sécurisée pour Thérapeutes",
        shortDescription:
          "Une plateforme de gestion des patients confidentielle pour les thérapeutes belges — planification sécurisée, communication patient assistée par IA et gestion centralisée des dossiers.",
        fullDescription:
          "Construite pour VVTIV en Belgique, cette plateforme offre aux thérapeutes un environnement sécurisé tout-en-un pour gérer leur cabinet. Les thérapeutes peuvent planifier les séances, suivre la progression des patients, gérer les dossiers et communiquer en toute sécurité. Un assistant IA propulsé par GPT aide les patients avec l'accueil pré-séance et le soutien entre les séances.",
        challenge:
          "Les thérapeutes utilisaient un patchwork d'outils génériques — calendriers, email, drives partagés — aucun conçu pour la confidentialité des soins de santé. Les données patients étaient dispersées, la communication n'était pas sécurisée et il n'y avait pas de vue centrale du parcours d'un patient.",
        solution:
          "Nous avons construit une application web Next.js avec un backend NestJS, appliquant un RBAC strict pour que les thérapeutes n'accèdent qu'aux données de leurs propres patients. PostgreSQL gère toutes les données structurées, Redis accélère l'état de session en temps réel. Une couche de chat GPT-4 gère l'accueil des patients et le soutien entre séances.",
        results: [
          "Isolation des données de bout en bout : les thérapeutes accèdent uniquement aux dossiers de leurs propres patients",
          "L'assistant IA GPT-4 réduit le temps administratif avec l'accueil et le soutien automatisés",
          "Gestion centralisée des dossiers avec historique complet des séances et suivi de la progression",
          "La messagerie sécurisée en plateforme remplace les emails et applications de messagerie non sécurisés",
          "Notifications en temps réel basées sur Redis pour les rappels de rendez-vous",
        ],
        metaTitle:
          "VVTIV Plateforme de Santé pour Thérapeutes — Étude de Cas Perla AI",
        metaDescription:
          "Comment Perla AI a développé une plateforme de santé sécurisée pour les thérapeutes belges — support IA GPT-4, isolation des patients RBAC et gestion centralisée des dossiers.",
      },
      ar: {
        title: "VVTIV — منصة رعاية صحية آمنة للمعالجين النفسيين",
        shortDescription:
          "منصة إدارة مرضى سرية للمعالجين النفسيين البلجيكيين — جدولة آمنة ومساعد ذكاء اصطناعي للتواصل مع المرضى وإدارة مركزية للحالات.",
        fullDescription:
          "بُنيت لـ VVTIV في بلجيكا، توفر هذه المنصة للمعالجين بيئة آمنة شاملة لإدارة ممارستهم. يمكن للمعالجين جدولة الجلسات وتتبع تقدم المرضى وإدارة ملفات الحالات والتواصل بأمان. يساعد مساعد ذكاء اصطناعي مدعوم بـ GPT المرضى في الاستقبال قبل الجلسة والدعم بين الجلسات.",
        challenge:
          "كان المعالجون يستخدمون مجموعة متنوعة من الأدوات العامة — تقاويم وبريد إلكتروني ومحركات مشتركة — ولم يكن أي منها مصمماً لسرية الرعاية الصحية. كانت بيانات المرضى متفرقة والتواصل غير آمن ولم يكن هناك عرض مركزي لرحلة المريض.",
        solution:
          "بنينا تطبيق ويب Next.js مع خلفية NestJS، مع تطبيق RBAC صارم حتى يتمكن المعالجون من الوصول فقط إلى بيانات مرضاهم. يتعامل PostgreSQL مع جميع البيانات المنظمة، بينما يسرّع Redis حالة الجلسة في الوقت الفعلي. تتولى طبقة دردشة GPT-4 استقبال المرضى والدعم بين الجلسات.",
        results: [
          "عزل بيانات من طرف إلى طرف: يصل المعالجون فقط إلى سجلات مرضاهم",
          "يقلل مساعد الذكاء الاصطناعي GPT-4 من وقت الإدارة بالاستقبال والدعم الآلي",
          "إدارة مركزية للحالات مع تاريخ كامل للجلسات وتتبع التقدم",
          "تستبدل المراسلة الآمنة داخل المنصة البريد الإلكتروني وتطبيقات المراسلة غير الآمنة",
          "إشعارات في الوقت الفعلي مدعومة بـ Redis لتذكيرات المواعيد",
        ],
        metaTitle:
          "VVTIV منصة الرعاية الصحية للمعالجين — دراسة حالة Perla AI",
        metaDescription:
          "كيف بنت Perla AI منصة رعاية صحية آمنة للمعالجين النفسيين البلجيكيين — دعم ذكاء اصطناعي GPT-4، عزل المرضى RBAC وإدارة مركزية للحالات.",
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
