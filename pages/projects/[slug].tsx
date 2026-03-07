import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@react-aria/i18n";
import { Button } from "@heroui/button";

import { projects, getProjectBySlug, getAllSlugs } from "@/config/projects";
import type { Project } from "@/config/projects";
import { useTranslations } from "@/hooks/use-translation";
import Footer from "@/pages/footer/footer";

interface ProjectPageProps {
  project: Project;
}


export default function ProjectPage({ project }: ProjectPageProps) {
  const { locale } = useLocale();
  const lang = locale.slice(0, 2) as "en" | "fr" | "ar";
  const isRTL = lang === "ar";
  const { t } = useTranslations();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tr =
    project.translations[lang] || project.translations.en;

  const category = lang === "fr"
    ? project.categoryFr
    : lang === "ar"
    ? project.categoryAr
    : project.category;

  const canonicalUrl = `https://perla-it.com/projects/${project.slug}`;

  // Structured data for the project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${canonicalUrl}#project`,
    name: project.translations.en.title,
    description: project.translations.en.shortDescription,
    url: canonicalUrl,
    creator: {
      "@type": "Organization",
      name: "Perla AI",
      url: "https://perla-it.com",
    },
    dateCreated: project.year,
    keywords: project.technologies.join(", "),
    inLanguage: ["en", "fr", "ar"],
    genre: project.category,
    abstract: project.translations.en.fullDescription,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://perla-it.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://perla-it.com/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.translations.en.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        {/* Primary Meta */}
        <title>{tr.metaTitle}</title>
        <meta name="description" content={tr.metaDescription} />
        <meta
          name="keywords"
          content={`${project.technologies.join(", ")}, ${project.category}, Perla AI, software development Tunisia`}
        />

        {/* Canonical + Hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={tr.metaTitle} />
        <meta property="og:description" content={tr.metaDescription} />
        <meta property="og:image" content={project.images[0] ? `https://perla-it.com${project.images[0]}` : "https://perla-it.com/og-image.png"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={tr.title} />
        <meta property="og:site_name" content="Perla AI" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="ar_TN" />
        <meta property="article:published_time" content={`${project.year}-01-01T00:00:00Z`} />
        <meta property="article:author" content="Perla AI" />
        <meta property="article:section" content={project.category} />
        {project.technologies.map((tech) => (
          <meta key={tech} property="article:tag" content={tech} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@perla_it" />
        <meta name="twitter:title" content={tr.metaTitle} />
        <meta name="twitter:description" content={tr.metaDescription} />
        <meta name="twitter:image" content="https://perla-it.com/og-image.png" />

        {/* Robots */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div
        className="min-h-screen bg-background"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Back link */}
        <div className="max-w-5xl mx-auto px-6 pt-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-default-500 hover:text-primary transition-colors"
          >
            {t("portfolio_back")}
          </Link>
        </div>

        {/* Hero */}
        <motion.div
          className="max-w-5xl mx-auto px-6 py-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category */}
          <div className={`flex flex-wrap items-center gap-3 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="text-sm font-medium text-primary">{category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-5xl mr-3">{project.icon}</span>{" "}
            {tr.title}
          </h1>

          <p className="text-xl text-default-600 leading-relaxed mb-10 max-w-3xl">
            {tr.shortDescription}
          </p>

          {/* Meta info bar */}
          <div className={`grid grid-cols-3 gap-6 p-6 rounded-2xl border border-divider bg-content1 mb-12`}>
            <div>
              <p className="text-xs text-default-500 uppercase tracking-wide mb-1">{t("portfolio_client")}</p>
              <p className="text-sm font-semibold text-foreground">{project.client}</p>
            </div>
            <div>
              <p className="text-xs text-default-500 uppercase tracking-wide mb-1">{t("portfolio_year")}</p>
              <p className="text-sm font-semibold text-foreground">{project.year}</p>
            </div>
            <div>
              <p className="text-xs text-default-500 uppercase tracking-wide mb-1">{t("portfolio_category")}</p>
              <p className="text-sm font-semibold text-foreground">{category}</p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-12">
            <p className="text-xs text-default-500 uppercase tracking-wide mb-3">{t("portfolio_technologies")}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary-50 text-primary dark:bg-primary-100/10 dark:text-primary-400 border border-primary-100 dark:border-primary-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot gallery */}
          {project.images.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-default-500 uppercase tracking-wide mb-4">Screenshots</p>
              <div className={`grid gap-4 ${project.images.length === 1 ? "grid-cols-1" : project.images.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-2"}`}>
                {project.images.map((src, i) => (
                  <motion.div
                    key={src}
                    className="relative aspect-video rounded-xl overflow-hidden cursor-zoom-in border border-divider bg-content1"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`${tr.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Screenshot enlarged"
                  width={1280}
                  height={720}
                  className="w-full h-auto object-contain"
                />
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-lg hover:bg-black/80 transition-colors"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-6 pb-20 space-y-12">
          {/* Full description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-default-600 leading-relaxed">
              {tr.fullDescription}
            </p>
          </motion.section>

          {/* Challenge / Solution / Results */}
          <div className="grid md:grid-cols-1 gap-8">
            {/* Challenge */}
            <motion.section
              className="p-8 rounded-2xl border border-divider bg-content1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-danger-50 text-danger dark:bg-danger-100/10">
                  <span className="text-xl">🎯</span>
                </div>
                <h2 className="text-xl font-bold text-foreground">{t("portfolio_challenge")}</h2>
              </div>
              <p className="text-default-600 leading-relaxed">{tr.challenge}</p>
            </motion.section>

            {/* Solution */}
            <motion.section
              className="p-8 rounded-2xl border border-divider bg-content1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary-50 text-primary dark:bg-primary-100/10">
                  <span className="text-xl">💡</span>
                </div>
                <h2 className="text-xl font-bold text-foreground">{t("portfolio_solution")}</h2>
              </div>
              <p className="text-default-600 leading-relaxed">{tr.solution}</p>
            </motion.section>

            {/* Results */}
            <motion.section
              className="p-8 rounded-2xl border border-divider bg-content1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-success-50 text-success dark:bg-success-100/10">
                  <span className="text-xl">📊</span>
                </div>
                <h2 className="text-xl font-bold text-foreground">{t("portfolio_results")}</h2>
              </div>
              <ul className="space-y-3">
                {tr.results.map((result, i) => (
                  <li key={i} className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-success-100 text-success-700 dark:bg-success-50 dark:text-success-800 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-default-600">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* CTA */}
          <motion.section
            className="text-center py-12 px-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t("portfolio_cta_title")}
            </h2>
            <p className="text-default-600 mb-8 max-w-xl mx-auto">
              {t("portfolio_cta_description")}
            </p>
            <div className={`flex flex-wrap gap-4 justify-center ${isRTL ? "flex-row-reverse" : ""}`}>
              <Button
                as="a"
                href="https://calendly.com/mohamedmallat40"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                size="lg"
                className="font-semibold"
              >
                {t("portfolio_cta_button")}
              </Button>
              <Button
                as={Link}
                href="/#portfolio"
                variant="bordered"
                color="primary"
                size="lg"
                className="font-semibold"
              >
                {t("portfolio_related")}
              </Button>
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
};
