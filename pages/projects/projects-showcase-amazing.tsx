"use client";

import { useTheme } from "next-themes";
import { useLocale } from "@react-aria/i18n";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { useTranslations } from "@/hooks/use-translation";
import { title, subtitle } from "@/components/primitives";

interface Project {
  id: number;
  name: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  status: "completed" | "ongoing" | "featured";
  year: string;
  client: string;
  impact: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectsShowcase() {
  const { theme, systemTheme } = useTheme();
  const { t } = useTranslations();
  const { locale } = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isRTL = locale === "ar";

  const projects: Project[] = [
    {
      id: 1,
      name: "ai-workflow-automator",
      title: "AI Workflow Automator",
      description:
        "Revolutionary AI-powered platform that transforms business operations through intelligent automation, reducing manual tasks and boosting productivity across all departments.",
      category: "AI & Automation",
      technologies: [
        "Next.js",
        "OpenAI GPT-4",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "Python",
      ],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      status: "featured",
      year: "2024",
      client: "TechCorp Solutions",
      impact: "75% efficiency boost",
      demoUrl: "https://demo.ai-automator.com",
    },
    {
      id: 2,
      name: "smart-ecommerce-platform",
      title: "Smart E-commerce Platform",
      description:
        "Next-generation e-commerce solution featuring AI-driven recommendations, real-time analytics, and seamless payment integration.",
      category: "E-commerce",
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "AWS", "Redis"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      status: "completed",
      year: "2024",
      client: "RetailMax Global",
      impact: "300% sales increase",
      demoUrl: "https://retailmax-demo.com",
    },
    {
      id: 3,
      name: "healthcare-management-system",
      title: "Healthcare Management System",
      description:
        "Comprehensive digital health platform with telemedicine capabilities, patient records management, and AI-powered diagnostic assistance.",
      category: "Healthcare",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
      status: "completed",
      year: "2023",
      client: "MediCare Plus",
      impact: "50% faster diagnosis",
    },
    {
      id: 4,
      name: "fintech-trading-platform",
      title: "FinTech Trading Platform",
      description:
        "Advanced real-time trading platform with algorithmic trading capabilities, comprehensive analytics, and institutional-grade security.",
      category: "FinTech",
      technologies: ["React", "Python", "FastAPI", "WebSocket", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop",
      status: "ongoing",
      year: "2024",
      client: "InvestPro Capital",
      impact: "Real-time analytics",
    },
    {
      id: 5,
      name: "smart-city-dashboard",
      title: "Smart City IoT Dashboard",
      description:
        "Comprehensive smart city management platform integrating IoT sensors, traffic optimization, and energy management.",
      category: "IoT",
      technologies: ["Angular", "IoT Sensors", "InfluxDB", "Grafana", "MQTT"],
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&h=800&fit=crop",
      status: "completed",
      year: "2023",
      client: "Smart City Initiative",
      impact: "40% energy savings",
    },
    {
      id: 6,
      name: "blockchain-supply-chain",
      title: "Blockchain Supply Chain",
      description:
        "Transparent and immutable supply chain tracking system leveraging blockchain technology for complete product traceability.",
      category: "Blockchain",
      technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS", "React"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop",
      status: "featured",
      year: "2024",
      client: "LogiChain Global",
      impact: "100% transparency",
      githubUrl: "https://github.com/perla-it/blockchain-supply",
    },
  ];

  const categories = [
    "all",
    "AI & Automation",
    "E-commerce",
    "Healthcare",
    "FinTech",
    "IoT",
    "Blockchain",
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header Section - True HeroUI Style */}
        <motion.div
          variants={itemVariants}
          className={`text-center mb-16 ${isRTL ? "text-right" : "text-left"} md:text-center`}
        >
          <div className="mb-4">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-tiny font-medium bg-secondary-100/80 text-pink-500">
              <Icon icon="lucide:rocket" className="w-3 h-3 mr-1" />
              Our Portfolio
            </span>
          </div>

          <div className="leading-8 md:leading-10 mb-6">
            <h1 className={title({ size: "lg" })}>Featured&nbsp;</h1>
            <h1 className={title({ size: "lg", color: "pink" })}>Projects</h1>
          </div>

          <h2
            className={subtitle({
              fullWidth: true,
              className: `text-center ${isRTL ? "md:text-right" : "md:text-left"} lg:text-center max-w-3xl mx-auto`,
            })}
          >
            Explore our innovative solutions that have transformed businesses
            across industries
          </h2>
        </motion.div>

        {/* Category Filter - Perfect HeroUI Pills */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-1 bg-white/5 dark:bg-default-400/10 backdrop-blur-lg rounded-large border border-default-200/50">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-pink-500 text-white shadow-lg"
                    : "text-default-500 hover:text-foreground hover:bg-white/10"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid - SPECTACULAR HeroUI Cards */}
        <motion.div variants={containerVariants}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`group flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] hover:shadow-xl ${
                    index === 0
                      ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-0"
                      : ""
                  }`}
                >
                  {/* Image Section - STUNNING Visual */}
                  <div
                    className={`relative overflow-hidden ${index === 0 ? "md:rounded-r-none" : ""}`}
                  >
                    <div
                      className={`relative ${index === 0 ? "h-80" : "h-64"} overflow-hidden`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Beautiful Status Badge */}
                      <div className="absolute top-4 left-4">
                        <div
                          className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm border ${
                            project.status === "featured"
                              ? "bg-yellow-500/90 border-yellow-400/50"
                              : project.status === "ongoing"
                                ? "bg-blue-500/90 border-blue-400/50"
                                : "bg-green-500/90 border-green-400/50"
                          }`}
                        >
                          <Icon
                            icon={
                              project.status === "featured"
                                ? "lucide:star"
                                : project.status === "ongoing"
                                  ? "lucide:clock"
                                  : "lucide:check-circle"
                            }
                            className="w-3 h-3"
                          />
                          {project.status === "featured"
                            ? "Featured"
                            : project.status === "ongoing"
                              ? "In Progress"
                              : "Completed"}
                        </div>
                      </div>

                      {/* Interactive Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <div className="flex gap-3">
                          <Link href={`/projects/${project.name}`}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-white text-black px-4 py-2 rounded-full font-semibold flex items-center gap-2 text-sm shadow-lg"
                            >
                              <Icon icon="lucide:eye" className="w-4 h-4" />
                              View Details
                            </motion.button>
                          </Link>
                          {project.demoUrl && (
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 text-sm shadow-lg"
                            >
                              <Icon
                                icon="lucide:external-link"
                                className="w-4 h-4"
                              />
                              Demo
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section - Perfect HeroUI Card Body */}
                  <div
                    className={`flex p-6 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased ${
                      index === 0 ? "md:rounded-l-none" : "rounded-t-large"
                    } gap-2 pb-0 flex-col items-start`}
                  >
                    {/* Meta Information Row */}
                    <div className="flex justify-between items-center w-full mb-3">
                      <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-500 rounded-full font-medium">
                        {project.category}
                      </span>
                      <span className="text-xs text-default-400">
                        {project.year}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      className={`font-semibold text-foreground group-hover:text-pink-500 transition-colors duration-300 mb-2 ${
                        index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-default-500 leading-relaxed mb-4 ${
                        index === 0 ? "text-base" : "text-sm"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Client & Impact Information */}
                    <div className="space-y-2 w-full mb-4">
                      <div className="flex items-center gap-2">
                        <Icon
                          icon="lucide:building-2"
                          className="w-4 h-4 text-default-400"
                        />
                        <span className="text-xs text-default-400">
                          Client:
                        </span>
                        <span className="text-xs font-medium text-foreground">
                          {project.client}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          icon="lucide:trending-up"
                          className="w-4 h-4 text-green-500"
                        />
                        <span className="text-xs text-default-400">
                          Impact:
                        </span>
                        <span className="text-xs font-medium text-green-500">
                          {project.impact}
                        </span>
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="w-full mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-2 py-1 bg-default-100/10 text-default-400 rounded border border-default-200/30"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-default-100/10 text-default-400 rounded border border-default-200/30">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions - HeroUI Style */}
                  <div className="relative flex w-full p-6 pt-0 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                    <div className="flex gap-2 w-full">
                      <Link
                        href={`/projects/${project.name}`}
                        className="flex-1"
                      >
                        <button className="w-full bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-500 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 group/button">
                          <Icon icon="lucide:info" className="w-4 h-4" />
                          View Details
                          <Icon
                            icon="lucide:arrow-right"
                            className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300"
                          />
                        </button>
                      </Link>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-default-100/10 hover:bg-default-100/20 border border-default-200/50 text-default-500 hover:text-foreground py-3 px-4 rounded-lg transition-all duration-300"
                        >
                          <Icon icon="lucide:github" className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action - BEAUTIFUL HeroUI Card */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <div className="flex p-8 z-10 w-full justify-center items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-4 flex-col text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-default-500 mb-6 max-w-2xl">
                Let's discuss how we can bring your vision to life with
                cutting-edge technology and innovative solutions.
              </p>
              <motion.a
                href="https://calendly.com/mohamedmallat40"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon icon="lucide:calendar" className="w-5 h-5" />
                <span>Schedule a Meeting</span>
                <Icon icon="lucide:arrow-right" className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
