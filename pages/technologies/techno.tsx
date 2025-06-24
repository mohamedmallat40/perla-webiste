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
      id: 1,
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      id: 2,
      name: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      id: 3,
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Language",
    },
    {
      id: 4,
      name: "Python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Language",
    },
    {
      id: 5,
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
    },
    {
      id: 6,
      name: "NestJS",
      img: "https://nestjs.com/img/logo-small.svg",
      category: "Backend",
    },
    {
      id: 7,
      name: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Database",
    },
    {
      id: 8,
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database",
    },
    {
      id: 9,
      name: "Docker",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "DevOps",
    },
    {
      id: 10,
      name: "AWS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      category: "Cloud",
    },
    {
      id: 11,
      name: "GraphQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      category: "API",
    },
    {
      id: 12,
      name: "Redis",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      category: "Cache",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative gap-2 w-full flex flex-col items-center z-20 mt-16 lg:mt-32 px-6">
      <div className="max-w-6xl flex flex-col gap-8 w-full">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-2 justify-center w-full text-center items-center">
            <div className="flex md:inline-flex flex-col md:flex-row items-center gap-2">
              <h1 className={title({ size: "lg" })}>
                {t("title_tech_we_use") || "Technologies We"} &nbsp;
              </h1>
              <span className={title({ color: "pink", size: "lg" })}>
                Master
              </span>
              <motion.svg
                aria-hidden="true"
                className="text-pink-500 ml-2"
                fill="none"
                focusable="false"
                height="50"
                role="presentation"
                viewBox="0 0 24 24"
                width="50"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z"
                  fill="currentColor"
                />
              </motion.svg>
            </div>
          </div>
          <p
            className={
              isRTL ? subtitle() + " text-right mt-4" : subtitle() + " mt-4"
            }
          >
            {t("description_tech_we_use") ||
              "Cutting-edge technologies and frameworks that power our innovative solutions"}
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.2}s` }}
                className="relative flex flex-col items-center p-6 rounded-2xl bg-content1 border border-divider shadow-small transition-all duration-300 group-hover:shadow-medium group-hover:border-primary/30 group-hover:bg-primary/5"
              >
                {/* Tech Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <img
                      alt={tech.name}
                      className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                      src={tech.img}
                    />
                  </div>

                  {/* Floating particles effect */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/60"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-secondary/60"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3 + 0.5,
                    }}
                  />
                </div>

                {/* Tech Info */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-default-500 group-hover:text-default-700 transition-colors duration-300">
                    {tech.category}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-default-500 text-sm">
            {t("tech_cta") ||
              "Powered by modern technology stack for scalable, high-performance solutions"}
          </p>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
};

export default TechnoSection;
