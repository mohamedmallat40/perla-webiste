"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@react-aria/i18n";

import { title, subtitle } from "@/components/primitives";
import { useTranslations } from "@/hooks/use-translation";

const TechnoSection = () => {
  const { t } = useTranslations();
  const { locale } = useLocale();
  const isRTL = locale === "ar";

  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#336791",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
    },
    {
      name: "GraphQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      color: "#E10098",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      color: "#DC382D",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
  ];

  return (
    <section className="relative w-full py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={title({ size: "lg", class: "mb-6" })}>
            Technologies We{" "}
            <span className={title({ color: "pink", size: "lg" })}>Master</span>
          </h2>
          <p className={subtitle({ class: "max-w-2xl mx-auto" })}>
            {t("description_tech_we_use") ||
              "Cutting-edge technologies that power our innovative solutions"}
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                y: -8,
              }}
            >
              <div className="relative mb-4">
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-content1 border border-divider shadow-small flex items-center justify-center group-hover:shadow-medium transition-all duration-300"
                  whileHover={{
                    borderColor: tech.color,
                    boxShadow: `0 8px 25px ${tech.color}20`,
                  }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>

                {/* Floating dot */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                  style={{ backgroundColor: tech.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>

              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">11+</div>
            <div className="text-sm text-default-500">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">5+</div>
            <div className="text-sm text-default-500">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">100+</div>
            <div className="text-sm text-default-500">Projects</div>
          </div>
        </motion.div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default TechnoSection;
