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
  demoUrl?: string;
  githubUrl?: string;
  status: "completed" | "ongoing" | "featured";
  year: string;
  client: string;
  impact: string;
  color: string;
}

export default function ProjectsShowcase() {
  const { theme, systemTheme } = useTheme();
  const { t } = useTranslations();
  const { locale } = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isRTL = locale === "ar";

  const projects: Project[] = [
    {
      id: 1,
      name: "ai-workflow-automator",
      title: "AI Workflow Automator",
      description:
        "Revolutionary AI-powered platform that transforms business operations through intelligent automation, reducing manual tasks by 75% and boosting productivity across all departments.",
      category: "AI & Machine Learning",
      technologies: [
        "Next.js",
        "OpenAI GPT-4",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "Python",
        "TensorFlow",
      ],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      status: "featured",
      year: "2024",
      client: "TechCorp Solutions",
      impact: "75% efficiency boost",
      color: "blue",
      demoUrl: "https://demo.ai-automator.com",
      githubUrl: "https://github.com/perla-it/ai-automator",
    },
    {
      id: 2,
      name: "smart-ecommerce-platform",
      title: "Smart E-commerce Platform",
      description:
        "Next-generation e-commerce solution featuring AI-driven product recommendations, real-time inventory management, and seamless multi-channel integration.",
      category: "E-commerce & Retail",
      technologies: [
        "React",
        "Node.js",
        "Stripe",
        "MongoDB",
        "AWS",
        "Redis",
        "GraphQL",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      status: "completed",
      year: "2024",
      client: "RetailMax Global",
      impact: "300% sales increase",
      color: "green",
      demoUrl: "https://retailmax-demo.com",
    },
    {
      id: 3,
      name: "healthcare-management-system",
      title: "Healthcare Management System",
      description:
        "Comprehensive digital health platform with telemedicine capabilities, patient records management, and AI-powered diagnostic assistance for modern healthcare facilities.",
      category: "Healthcare & Medical",
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "Docker",
        "Redis",
        "WebRTC",
        "FHIR",
      ],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
      status: "completed",
      year: "2023",
      client: "MediCare Plus",
      impact: "50% faster diagnosis",
      color: "pink",
      demoUrl: "https://medicare-demo.com",
    },
    {
      id: 4,
      name: "fintech-trading-platform",
      title: "FinTech Trading Platform",
      description:
        "Advanced real-time trading platform with algorithmic trading capabilities, comprehensive analytics, and institutional-grade security for professional traders.",
      category: "FinTech & Banking",
      technologies: [
        "React",
        "Python",
        "FastAPI",
        "WebSocket",
        "Chart.js",
        "PostgreSQL",
        "Kafka",
      ],
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop",
      status: "ongoing",
      year: "2024",
      client: "InvestPro Capital",
      impact: "Real-time analytics",
      color: "purple",
      demoUrl: "https://investpro-demo.com",
    },
    {
      id: 5,
      name: "smart-city-dashboard",
      title: "Smart City IoT Dashboard",
      description:
        "Comprehensive smart city management platform integrating IoT sensors, traffic optimization, energy management, and citizen services in one unified dashboard.",
      category: "IoT & Smart Cities",
      technologies: [
        "Angular",
        "IoT Sensors",
        "InfluxDB",
        "Grafana",
        "MQTT",
        "Python",
        "TensorFlow",
      ],
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&h=800&fit=crop",
      status: "completed",
      year: "2023",
      client: "Smart City Initiative",
      impact: "40% energy savings",
      color: "orange",
      demoUrl: "https://smartcity-demo.com",
    },
    {
      id: 6,
      name: "blockchain-supply-chain",
      title: "Blockchain Supply Chain",
      description:
        "Transparent and immutable supply chain tracking system leveraging blockchain technology to ensure product authenticity and complete traceability from source to consumer.",
      category: "Blockchain & Web3",
      technologies: [
        "Solidity",
        "Web3.js",
        "Ethereum",
        "IPFS",
        "React",
        "Hardhat",
        "MetaMask",
      ],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop",
      status: "featured",
      year: "2024",
      client: "LogiChain Global",
      impact: "100% transparency",
      color: "indigo",
      demoUrl: "https://logichain-demo.com",
      githubUrl: "https://github.com/perla-it/blockchain-supply",
    },
  ];

  const categories = [
    "all",
    "AI & Machine Learning",
    "E-commerce & Retail",
    "Healthcare & Medical",
    "FinTech & Banking",
    "IoT & Smart Cities",
    "Blockchain & Web3",
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "featured":
        return "lucide:star";
      case "ongoing":
        return "lucide:clock";
      case "completed":
        return "lucide:check-circle";
      default:
        return "lucide:circle";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "featured":
        return "text-yellow-500";
      case "ongoing":
        return "text-blue-500";
      case "completed":
        return "text-green-500";
      default:
        return "text-default-500";
    }
  };

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
        {/* Header Section */}
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

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/5 dark:bg-default-400/10 backdrop-blur-lg rounded-large border border-default-200/50">
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

        {/* Projects Grid - HeroUI Style */}
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
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className={`group relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] ${
                  index === 0
                    ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-6"
                    : ""
                }`}
              >
                {/* Project Image Section */}
                <div
                  className={`relative overflow-hidden ${index === 0 ? "md:order-1" : ""}`}
                >
                  <div className="relative h-64 md:h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm ${
                          project.status === "featured"
                            ? "bg-yellow-500/90"
                            : project.status === "ongoing"
                              ? "bg-blue-500/90"
                              : "bg-green-500/90"
                        }`}
                      >
                        <Icon
                          icon={getStatusIcon(project.status)}
                          className="w-3 h-3"
                        />
                        {project.status === "featured"
                          ? "Featured"
                          : project.status === "ongoing"
                            ? "In Progress"
                            : "Completed"}
                      </div>
                    </div>

                    {/* Project Actions Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`flex p-6 z-10 w-full justify-start items-start shrink-0 overflow-inherit color-inherit subpixel-antialiased ${
                    index === 0
                      ? "md:order-2 md:flex-col md:justify-center"
                      : "flex-col"
                  } gap-4`}
                >
                  {/* Meta Information */}
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-500 rounded-full font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs text-default-400">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-semibold group-hover:text-pink-500 transition-colors duration-300 ${
                      index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-default-500 leading-relaxed ${
                      index === 0 ? "text-base lg:text-lg" : "text-sm"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Client & Impact */}
                  <div className="space-y-2 w-full">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="lucide:building-2"
                        className="w-4 h-4 text-default-400"
                      />
                      <span className="text-xs text-default-400">Client:</span>
                      <span className="text-xs font-medium text-foreground">
                        {project.client}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="lucide:trending-up"
                        className="w-4 h-4 text-green-500"
                      />
                      <span className="text-xs text-default-400">Impact:</span>
                      <span className="text-xs font-medium text-green-500">
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="w-full">
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

                  {/* Action Buttons */}
                  <div className="flex gap-2 w-full mt-4">
                    <Link href={`/projects/${project.name}`} className="flex-1">
                      <button className="w-full bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-500 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 text-sm">
                        <Icon icon="lucide:info" className="w-4 h-4" />
                        View Details
                      </button>
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-default-100/10 hover:bg-default-100/20 border border-default-200/50 text-default-500 hover:text-foreground py-2 px-3 rounded-lg transition-all duration-300"
                      >
                        <Icon icon="lucide:github" className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="p-8 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-blue-500/10 backdrop-blur-sm border border-pink-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-default-500 mb-6 max-w-2xl mx-auto">
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
        </motion.div>
      </motion.div>
    </section>
  );
}