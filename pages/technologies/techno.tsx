"use client";

import React from "react";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";
import { useTranslations } from "@/hooks/use-translation";

interface Tech {
  name: string;
  icon: string;
  invertDark?: boolean;
}

interface Row {
  label: string;
  dot: string;
  labelColor: string;
  borderPill: string;
  speed: string;
  reverse: boolean;
  techs: Tech[];
}

const rows: Row[] = [
  {
    label: "Frontend",
    dot: "bg-blue-500",
    labelColor: "text-blue-500",
    borderPill: "border-l-blue-500/60",
    speed: "28s",
    reverse: false,
    techs: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertDark: true },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  },
  {
    label: "Backend",
    dot: "bg-violet-500",
    labelColor: "text-violet-500",
    borderPill: "border-l-violet-500/60",
    speed: "24s",
    reverse: true,
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "NestJS", icon: "https://nestjs.com/img/logo-small.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", invertDark: true },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertDark: true },
    ],
  },
  {
    label: "Database",
    dot: "bg-emerald-500",
    labelColor: "text-emerald-500",
    borderPill: "border-l-emerald-500/60",
    speed: "22s",
    reverse: false,
    techs: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" },
    ],
  },
  {
    label: "Cloud & DevOps",
    dot: "bg-orange-500",
    labelColor: "text-orange-500",
    borderPill: "border-l-orange-500/60",
    speed: "20s",
    reverse: true,
    techs: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invertDark: true },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    ],
  },
  {
    label: "AI & LLMs",
    dot: "bg-pink-500",
    labelColor: "text-pink-500",
    borderPill: "border-l-pink-500/60",
    speed: "26s",
    reverse: false,
    techs: [
      { name: "ChatGPT", icon: "https://avatars.githubusercontent.com/u/14957082?s=40" },
      { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
      { name: "Mistral", icon: "https://avatars.githubusercontent.com/u/132372032?s=40" },
      { name: "DeepSeek", icon: "https://avatars.githubusercontent.com/u/148330874?s=40" },
      { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain", invertDark: true },
      { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
    ],
  },
];

const TechnoSection = () => {
  const { t } = useTranslations();
  const totalCount = rows.reduce((s, r) => s + r.techs.length, 0);

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Large faint background glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header — two-column asymmetric */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-default-400 mb-3">
              Full-stack capabilities
            </p>
            <h2 className="leading-tight">
              <span className={title({ size: "lg" })}>Technologies </span>
              <span className={title({ size: "lg", color: "pink" })}>We Use</span>
            </h2>
          </div>

          <p className="text-default-500 text-sm max-w-xs md:text-right leading-relaxed">
            {t("description_tech_we_use") || "Modern tools that power our digital solutions"}&nbsp;
            <span className="text-foreground font-semibold">{totalCount}+ tools</span> across the full stack and AI.
          </p>
        </motion.div>
      </div>

      {/* Scrolling rows — full bleed, no px constraint */}
      <div className="flex flex-col divide-y divide-default-100 dark:divide-default-800/60">
        {rows.map((row, rowIdx) => (
          <motion.div
            key={row.label}
            className="flex items-center gap-0"
            initial={{ opacity: 0, x: row.reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: rowIdx * 0.1 }}
          >
            {/* Pinned label */}
            <div className="shrink-0 w-36 lg:w-44 px-6 py-6 flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.dot}`} />
              <span className={`text-xs font-semibold tracking-wide uppercase ${row.labelColor}`}>
                {row.label}
              </span>
            </div>

            {/* Scroll strip */}
            <div
              className="relative flex-1 overflow-hidden py-3"
              style={
                {
                  "--duration": row.speed,
                  "--gap": "12px",
                } as React.CSSProperties
              }
            >
              {/* Left fade mask */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              {/* Right fade mask */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              <div
                className={`scrolling-horizontal gap-[--gap] hover:[animation-play-state:paused] ${
                  row.reverse ? "[animation-direction:reverse]" : ""
                }`}
              >
                {/* Original + duplicate for seamless loop */}
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex items-center gap-[--gap]">
                    {row.techs.map((tech) => (
                      <div
                        key={`${tech.name}-${copy}`}
                        className={`flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-xl bg-default-100/60 dark:bg-default-100/5 border border-default-200/60 dark:border-default-700/40 border-l-2 ${row.borderPill} whitespace-nowrap cursor-default select-none transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5`}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={`w-4 h-4 object-contain flex-shrink-0 ${tech.invertDark ? "dark:invert" : ""}`}
                          loading="lazy"
                        />
                        <span className="text-xs font-medium text-default-700 dark:text-default-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnoSection;
