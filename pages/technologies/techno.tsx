"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@react-aria/i18n";

import { title, subtitle } from "@/components/primitives";
import { useTranslations } from "@/hooks/use-translation";

const TechnoSection = () => {
  const { t } = useTranslations();

  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Go",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "NestJS",
      icon: "https://nestjs.com/img/logo-small.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "Google Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={title({ size: "lg", class: "mb-4" })}>
            Technologies We{" "}
            <span className={title({ color: "pink", size: "lg" })}>Use</span>
          </h2>
          <p className={subtitle({ class: "max-w-xl mx-auto opacity-80" })}>
            {t("description_tech_we_use") ||
              "Modern tools that power our digital solutions"}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
            >
              <motion.div
                className="w-18 h-18 rounded-xl bg-content1/50 backdrop-blur-sm flex items-center justify-center mb-3 transition-all duration-300"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(var(--heroui-content1), 0.8)",
                  boxShadow: "0 8px 25px rgba(var(--heroui-primary), 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <motion.img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.6, ease: "easeInOut" },
                  }}
                />
              </motion.div>

              <span className="text-xs font-medium text-default-600 group-hover:text-foreground transition-colors duration-200">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnoSection;
