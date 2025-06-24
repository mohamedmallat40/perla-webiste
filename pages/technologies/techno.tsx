"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@react-aria/i18n";

import { title, subtitle } from "@/components/primitives";
import { useTranslations } from "@/hooks/use-translation";

const TechnoSection = () => {
  const { t } = useTranslations();
  const { locale } = useLocale();
  const isRTL = locale === "ar";
  const [selectedCategory, setSelectedCategory] = useState("All");

  const technologies = [
    {
      id: 1,
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
      description: "Component-based UI library",
      level: "Expert",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      name: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
      description: "React production framework",
      level: "Expert",
      color: "from-gray-700 to-gray-900",
    },
    {
      id: 3,
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Language",
      description: "Typed JavaScript superset",
      level: "Expert",
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 4,
      name: "Python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Language",
      description: "Versatile programming language",
      level: "Expert",
      color: "from-yellow-400 to-blue-500",
    },
    {
      id: 5,
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
      description: "JavaScript runtime environment",
      level: "Expert",
      color: "from-green-500 to-green-700",
    },
    {
      id: 6,
      name: "NestJS",
      img: "https://nestjs.com/img/logo-small.svg",
      category: "Backend",
      description: "Scalable Node.js framework",
      level: "Advanced",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 7,
      name: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Database",
      description: "Advanced relational database",
      level: "Expert",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 8,
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database",
      description: "NoSQL document database",
      level: "Advanced",
      color: "from-green-600 to-green-800",
    },
    {
      id: 9,
      name: "Docker",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "DevOps",
      description: "Container platform",
      level: "Advanced",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 10,
      name: "AWS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      category: "Cloud",
      description: "Cloud computing platform",
      level: "Advanced",
      color: "from-orange-400 to-orange-600",
    },
    {
      id: 11,
      name: "GraphQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      category: "API",
      description: "Query language for APIs",
      level: "Advanced",
      color: "from-pink-500 to-purple-600",
    },
    {
      id: 12,
      name: "Redis",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      category: "Cache",
      description: "In-memory data structure",
      level: "Advanced",
      color: "from-red-500 to-red-700",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Language",
    "Database",
    "DevOps",
    "Cloud",
    "API",
    "Cache",
  ];

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  const levelColors = {
    Expert: "bg-gradient-to-r from-emerald-500 to-green-500",
    Advanced: "bg-gradient-to-r from-blue-500 to-indigo-500",
    Intermediate: "bg-gradient-to-r from-yellow-500 to-orange-500",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative w-full flex flex-col items-center z-20 mt-16 lg:mt-32 px-6 py-20">
      <div className="max-w-7xl flex flex-col gap-12 w-full">
        {/* Enhanced Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 justify-center w-full text-center items-center">
            <div className="flex md:inline-flex flex-col md:flex-row items-center gap-3">
              <motion.h1
                className={title({ size: "lg" })}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("title_tech_we_use") || "Technologies We"} &nbsp;
              </motion.h1>
              <motion.span
                className={title({ color: "pink", size: "lg" })}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Master
              </motion.span>
              <motion.svg
                aria-hidden="true"
                className="text-pink-500 ml-2"
                fill="none"
                focusable="false"
                height="50"
                role="presentation"
                viewBox="0 0 24 24"
                width="50"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <path
                  d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z"
                  fill="currentColor"
                />
              </motion.svg>
            </div>
          </div>
          <motion.p
            className={
              isRTL ? subtitle() + " text-right mt-6" : subtitle() + " mt-6"
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t("description_tech_we_use") ||
              "Cutting-edge technologies and frameworks that power our innovative solutions"}
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={categoryVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={categoryItemVariants}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                  : "bg-content1 text-default-600 border-divider hover:border-primary/50 hover:text-primary hover:bg-primary/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Technologies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group perspective-1000"
              >
                <div className="relative overflow-hidden rounded-3xl bg-content1 border border-divider shadow-medium hover:shadow-large transition-all duration-500 transform-gpu hover:border-primary/30">
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-8 z-10">
                    {/* Level Badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white ${levelColors[tech.level]}`}
                      >
                        {tech.level}
                      </div>
                    </div>

                    {/* Tech Icon with Advanced Animation */}
                    <motion.div
                      className="relative mb-6"
                      initial={{ rotateY: 0 }}
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative">
                        <motion.div
                          className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <img
                            alt={tech.name}
                            className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110"
                            src={tech.img}
                          />
                        </motion.div>

                        {/* Floating Particles */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-primary/60"
                            style={{
                              top: `${Math.random() * 80}px`,
                              left: `${Math.random() * 80}px`,
                            }}
                            animate={{
                              y: [-10, 10, -10],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.3 + index * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Tech Info */}
                    <div className="space-y-3">
                      <motion.h3
                        className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                        layoutId={`title-${tech.id}`}
                      >
                        {tech.name}
                      </motion.h3>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {tech.category}
                        </span>
                      </div>

                      <motion.p
                        className="text-sm text-default-600 group-hover:text-default-800 transition-colors duration-300"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {tech.description}
                      </motion.p>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-default-500">
                          Proficiency
                        </span>
                        <span className="text-xs font-medium text-default-700">
                          {tech.level === "Expert"
                            ? "95%"
                            : tech.level === "Advanced"
                              ? "85%"
                              : "75%"}
                        </span>
                      </div>
                      <div className="w-full bg-default-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full ${levelColors[tech.level]} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              tech.level === "Expert"
                                ? "95%"
                                : tech.level === "Advanced"
                                  ? "85%"
                                  : "75%",
                          }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Stats Section */}
        <motion.div
          className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-divider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <motion.div
                className="text-4xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {technologies.length}+
              </motion.div>
              <p className="text-default-600 font-medium">
                Technologies Mastered
              </p>
            </motion.div>

            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <motion.div
                className="text-4xl font-bold text-secondary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                5+
              </motion.div>
              <p className="text-default-600 font-medium">Years Experience</p>
            </motion.div>

            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <motion.div
                className="text-4xl font-bold text-success mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                100+
              </motion.div>
              <p className="text-default-600 font-medium">Projects Delivered</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-success/20 to-warning/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Code Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-default-300/30 text-sm font-mono"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          >
            {["<>", "{...}", "[]", "()", "=>", "&&"][i]}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnoSection;
