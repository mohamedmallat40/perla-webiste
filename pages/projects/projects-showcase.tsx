"use client";

import { useTheme } from "next-themes";
import { useLocale } from "@react-aria/i18n";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
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
  gradient: string;
  icon: string;
  status: "completed" | "ongoing" | "featured";
  year: string;
  client: string;
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
        "Intelligent automation platform that streamlines business processes using advanced AI algorithms and machine learning.",
      category: "AI & Automation",
      technologies: ["Next.js", "OpenAI", "PostgreSQL", "Prisma", "TypeScript"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      gradient: "from-blue-500 to-cyan-500",
      icon: "lucide:brain",
      status: "featured",
      year: "2024",
      client: "TechCorp Solutions",
    },
    {
      id: 2,
      name: "smart-ecommerce-platform",
      title: "Smart E-commerce Platform",
      description:
        "Advanced e-commerce solution with AI-powered recommendations, real-time analytics, and seamless payment integration.",
      category: "E-commerce",
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "AWS"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      gradient: "from-green-500 to-emerald-500",
      icon: "lucide:shopping-cart",
      status: "completed",
      year: "2024",
      client: "RetailMax",
    },
    {
      id: 3,
      name: "healthcare-management-system",
      title: "Healthcare Management System",
      description:
        "Comprehensive patient management platform with appointment scheduling, medical records, and telemedicine features.",
      category: "Healthcare",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      gradient: "from-pink-500 to-rose-500",
      icon: "lucide:heart-pulse",
      status: "completed",
      year: "2023",
      client: "MediCare Plus",
    },
    {
      id: 4,
      name: "fintech-trading-app",
      title: "FinTech Trading Platform",
      description:
        "Real-time trading application with advanced charting, portfolio management, and automated trading strategies.",
      category: "FinTech",
      technologies: ["React", "Python", "FastAPI", "WebSocket", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      gradient: "from-purple-500 to-violet-500",
      icon: "lucide:trending-up",
      status: "ongoing",
      year: "2024",
      client: "InvestPro",
    },
    {
      id: 5,
      name: "smart-city-dashboard",
      title: "Smart City IoT Dashboard",
      description:
        "Comprehensive IoT monitoring system for smart city infrastructure with real-time data visualization and analytics.",
      category: "IoT",
      technologies: ["Angular", "IoT", "InfluxDB", "Grafana", "MQTT"],
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop",
      gradient: "from-orange-500 to-amber-500",
      icon: "lucide:building",
      status: "completed",
      year: "2023",
      client: "Smart City Initiative",
    },
    {
      id: 6,
      name: "blockchain-supply-chain",
      title: "Blockchain Supply Chain",
      description:
        "Transparent supply chain tracking system using blockchain technology for complete product traceability.",
      category: "Blockchain",
      technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS", "React"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      gradient: "from-indigo-500 to-blue-500",
      icon: "lucide:link",
      status: "featured",
      year: "2024",
      client: "LogiChain",
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
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className={`text-center mb-16 ${isRTL ? "text-right" : "text-left"} md:text-center`}
        >
          <div className="mb-4">
            <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-tiny font-medium bg-secondary-100/80 text-pink-500">
              <Icon icon="lucide:rocket" className="w-3 h-3 mr-1" />
              Our Work
            </span>
          </div>

          <div className="leading-8 md:leading-10 mb-6">
            <h1 className={title({ size: "lg" })}>Featured&nbsp;</h1>
            <h1 className={title({ size: "lg", color: "blue" })}>Projects</h1>
          </div>

          <h2
            className={subtitle({
              fullWidth: true,
              className: `text-center max-w-3xl mx-auto`,
            })}
          >
            Discover our latest innovations and successful client projects
            across various industries
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-1 bg-white/5 dark:bg-default-400/10 backdrop-blur-lg rounded-full border border-default-200/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-pink-500 text-white shadow-lg"
                    : "text-default-500 hover:text-foreground hover:bg-white/10"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] border border-default-200/50 hover:border-pink-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${
                      project.status === "featured"
                        ? "bg-yellow-500"
                        : project.status === "ongoing"
                          ? "bg-blue-500"
                          : "bg-green-500"
                    }`}
                  >
                    {project.status === "featured"
                      ? "⭐ Featured"
                      : project.status === "ongoing"
                        ? "🔄 Ongoing"
                        : "✅ Completed"}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <Icon icon={project.icon} className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <Link href={`/projects/${project.name}`}>
                    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                      <Icon icon="lucide:eye" className="w-4 h-4" />
                      View Project
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-pink-500 font-medium px-2 py-1 bg-pink-500/20 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-default-400">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-default-500 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <span className="text-xs text-default-400">Client: </span>
                  <span className="text-xs font-medium text-foreground">
                    {project.client}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-default-100/10 text-default-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-default-100/10 text-default-400 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <Link href={`/projects/${project.name}`}>
                  <button className="w-full bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-500 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300">
                    View Details
                    <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
