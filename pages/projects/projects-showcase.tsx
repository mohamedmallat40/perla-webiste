import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useLocale } from "@react-aria/i18n";
import NextLink from "next/link";
import Image from "next/image";

import { projects } from "@/config/projects";
import { useTranslations } from "@/hooks/use-translation";
import { title, subtitle } from "@/components/primitives";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

const gradientMap: Record<number, string> = {
  1: "from-blue-600/20 via-indigo-500/10 to-violet-600/20",
  2: "from-emerald-500/20 via-teal-400/10 to-cyan-500/20",
  3: "from-orange-500/20 via-amber-400/10 to-yellow-500/20",
  4: "from-pink-500/20 via-rose-400/10 to-fuchsia-500/20",
  5: "from-violet-500/20 via-purple-400/10 to-indigo-500/20",
};

const ProjectsShowcase: React.FC = () => {
  const { t } = useTranslations();
  const { locale } = useLocale();
  const lang = locale.slice(0, 2) as "en" | "fr" | "ar";
  const isRTL = lang === "ar";

  const [featured, ...rest] = projects;

  const getCategory = (p: typeof projects[0]) =>
    lang === "fr" ? p.categoryFr : lang === "ar" ? p.categoryAr : p.category;

  return (
    <section
      id="portfolio"
      className="w-full bg-background"
      aria-label="Portfolio — featured projects"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Perla AI — Featured Projects Portfolio" />
      <meta itemProp="description" content="Case studies and featured projects built by Perla AI" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-tiny font-medium bg-gradient-to-r from-primary-500/20 to-violet-500/20 text-primary border border-primary/30 backdrop-blur-sm mb-6"
          >
            {t("portfolio_badge")}
          </motion.span>

          <h2 className="mb-4">
            <span className={title({ size: "lg" })}>{t("portfolio_heading_1")}{" "}</span>
            <span className={title({ color: "pink", size: "lg" })}>{t("portfolio_heading_2")}</span>
          </h2>
          <p className={subtitle({ class: "max-w-2xl mx-auto" })}>
            {t("portfolio_subtitle")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* ── Featured card (spans 2 cols on lg) ── */}
          {(() => {
            const tr = featured.translations[lang] || featured.translations.en;
            const category = getCategory(featured);

            return (
              <motion.div
                key={featured.slug}
                custom={0}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="lg:col-span-2 group"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content="1" />
                <meta itemProp="url" content={`https://perla-it.com/projects/${featured.slug}`} />

                <div className={`relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] shadow-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>

                  {/* Screenshot or gradient header */}
                  <div className={`relative w-full h-52 overflow-hidden bg-gradient-to-br ${gradientMap[featured.id]}`}>
                    {featured.images.length > 0 ? (
                      <Image
                        src={featured.images[0]}
                        alt={`${tr.title} preview`}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-7xl opacity-40">{featured.icon}</span>
                      </div>
                    )}
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent" />

                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-7">
                    <div className={`flex items-center gap-3 mb-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-2xl">
                        {featured.icon}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary block">{category}</span>
                        <span className="text-xs text-default-400">{featured.client} · {featured.year}</span>
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold text-foreground mb-2 ${isRTL ? "text-right" : ""}`}>
                      {tr.title}
                    </h3>
                    <p className={`text-default-500 leading-relaxed text-sm mb-5 flex-1 ${isRTL ? "text-right" : ""}`}>
                      {tr.shortDescription}
                    </p>

                    <div className={`flex flex-wrap gap-2 mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                      {featured.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary-100/80 text-default-700 dark:text-default-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {featured.technologies.length > 5 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary-100/80 text-default-500">
                          +{featured.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <Button
                      as={NextLink}
                      href={`/projects/${featured.slug}`}
                      variant="light"
                      color="primary"
                      size="sm"
                      className={`font-medium self-start group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? "self-end group-hover:translate-x-0 group-hover:-translate-x-1" : ""}`}
                      endContent={<ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />}
                    >
                      {t("portfolio_view_project")}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* ── Remaining 4 cards ── */}
          {rest.map((project, idx) => {
            const tr = project.translations[lang] || project.translations.en;
            const category = getCategory(project);

            return (
              <motion.div
                key={project.slug}
                custom={idx + 1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="group"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(idx + 2)} />
                <meta itemProp="url" content={`https://perla-it.com/projects/${project.slug}`} />

                <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] shadow-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                  {/* Gradient header */}
                  <div className={`relative w-full h-32 overflow-hidden bg-gradient-to-br ${gradientMap[project.id]}`}>
                    {project.images.length > 0 ? (
                      <Image
                        src={project.images[0]}
                        alt={`${tr.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-5xl opacity-30">{project.icon}</span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/70 to-transparent" />

                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className={`flex items-center gap-2.5 mb-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="flex justify-center p-1.5 rounded-full items-center bg-secondary-100/80 text-xl">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary block">{category}</span>
                        <span className="text-xs text-default-400">{project.client}</span>
                      </div>
                    </div>

                    <h3 className={`text-base font-bold text-foreground mb-2 leading-snug ${isRTL ? "text-right" : ""}`}>
                      {tr.title}
                    </h3>
                    <p className={`text-default-500 leading-relaxed text-sm mb-4 flex-1 line-clamp-3 ${isRTL ? "text-right" : ""}`}>
                      {tr.shortDescription}
                    </p>

                    <div className={`flex flex-wrap gap-1.5 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary-100/80 text-default-700 dark:text-default-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary-100/80 text-default-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <Button
                      as={NextLink}
                      href={`/projects/${project.slug}`}
                      variant="light"
                      color="primary"
                      size="sm"
                      className={`font-medium self-start group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? "self-end group-hover:translate-x-0 group-hover:-translate-x-1" : ""}`}
                      endContent={<ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />}
                    >
                      {t("portfolio_view_project")}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            as={Link}
            href="https://calendly.com/mohamedmallat40"
            isExternal
            variant="bordered"
            color="primary"
            size="lg"
            className="font-semibold"
          >
            {t("portfolio_cta_button")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
