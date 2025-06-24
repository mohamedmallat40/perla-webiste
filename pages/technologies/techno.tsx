"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@react-aria/i18n";

import { title, subtitle } from "@/components/primitives";
import { useTranslations } from "@/hooks/use-translation";

const TechnoSection = () => {
  const { t } = useTranslations();
  const { locale } = useLocale();
  const isRTL = locale === "ar";
  const [selectedTech, setSelectedTech] = useState(null);

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
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "#FF9900",
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
    <section className="relative w-full flex flex-col items-center py-32 px-6 overflow-hidden">
      <div className="max-w-4xl w-full text-center">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className={title({ size: "lg", class: "mb-6" })}>
            Our{" "}
            <span className={title({ color: "pink", size: "lg" })}>
              Tech Stack
            </span>
          </h2>
          <p className={subtitle({ class: "max-w-2xl mx-auto opacity-70" })}>
            {t("description_tech_we_use") ||
              "Technologies we master to build exceptional digital experiences"}
          </p>
        </motion.div>

        {/* Orbital Constellation */}
        <div className="relative w-full h-[700px] flex items-center justify-center">
          {/* Center Core */}
          <motion.div
            className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white shadow-2xl z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "loop", ease: "linear", repeatType: "loop" }}
          >
            <span className="text-white text-sm font-bold">PERLA</span>
          </motion.div>

          {/* Technology Orbits */}
          {technologies.map((tech, index) => {
            const angle = (index / technologies.length) * 2 * Math.PI;
            const radius = 220 + (index % 3) * 60; // Varied orbit distances
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: x,
                  y: y,
                  rotate: -360,
                }}
                transition={{
                  duration: 8 + index,
                  repeat: Infinity, repeatType: "loop",
                  ease: "linear", repeatType: "loop",
                }}
              >
                <motion.div
                  className="relative w-20 h-20 rounded-2xl bg-white dark:bg-content1 shadow-lg border border-divider flex items-center justify-center cursor-pointer group"
                  whileHover={{
                    scale: 1.2,
                    zIndex: 20,
                  }}
                  onHoverStart={() => setSelectedTech(tech)}
                  onHoverEnd={() => setSelectedTech(null)}
                  style={{
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />

                  {/* Connection Line to Center */}
                  <div
                    className="absolute w-0.5 bg-gradient-to-r from-transparent via-default-300 to-transparent opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{
                      height: `${radius}px`,
                      left: "50%",
                      top: "50%",
                      transformOrigin: "top center",
                      transform: `translateX(-50%) rotate(${Math.atan2(-y, -x) + Math.PI / 2}rad)`,
                    }}
                  />

                  {/* Tech Name on Hover */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-content1 px-3 py-1 rounded-lg shadow-lg border border-divider whitespace-nowrap"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: selectedTech?.name === tech.name ? 1 : 0,
                      scale: selectedTech?.name === tech.name ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs font-medium text-foreground">
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Orbital Rings */}
          {[220, 280, 340].map((radius, index) => (
            <motion.div
              key={radius}
              className="absolute border border-divider rounded-full opacity-20"
              style={{
                width: radius * 2,
                height: radius * 2,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 30 + index * 10,
                repeat: Infinity, repeatType: "loop",
                ease: "linear", repeatType: "loop",
              }}
            />
          ))}

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity, repeatType: "loop",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Selected Technology Details */}
        <motion.div
          className="mt-16 h-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedTech ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedTech && (
            <div className="text-center">
              <motion.h3
                className="text-2xl font-bold text-foreground mb-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                key={selectedTech.name}
              >
                {selectedTech.name}
              </motion.h3>
              <motion.div
                className="w-16 h-1 mx-auto rounded-full"
                style={{ backgroundColor: selectedTech.color }}
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </motion.div>

        {/* Simple Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">12+</div>
            <div className="text-sm text-default-500">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-1">5+</div>
            <div className="text-sm text-default-500">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-1">100+</div>
            <div className="text-sm text-default-500">Projects</div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default TechnoSection;
