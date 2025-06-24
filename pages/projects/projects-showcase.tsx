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
  results?: string;
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
      title: t("project_1_title"),
      description: t("project_1_description"),
      category: "AI & Automation",
      technologies: [
        "Next.js",
        "OpenAI GPT-4",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
      ],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      gradient: "from-blue-500 to-cyan-500",
      icon: "lucide:brain",
      status: "featured",
      year: "2024",
      client: "TechCorp Solutions",
      results: "40% productivity increase",
    },
    {
      id: 2,
      name: "smart-ecommerce-platform",
      title: t("project_2_title"),
      description: t("project_2_description"),
      category: "E-commerce",
      technologies: ["React Native", "Node.js", "Stripe", "MongoDB", "AWS"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      gradient: "from-green-500 to-emerald-500",
      icon: "lucide:shopping-cart",
      status: "completed",
      year: "2024",
      client: "RetailMax",
      results: "60% sales growth",
    },
    {
      id: 3,
      name: "healthcare-management-system",
      title: t("project_3_title"),
      description: t("project_3_description"),
      category: "Healthcare",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      gradient: "from-pink-500 to-rose-500",
      icon: "lucide:heart-pulse",
      status: "completed",
      year: "2023",
      client: "MediCare Plus",
      results: "50% efficiency boost",
    },
    {
      id: 4,
      name: "fintech-trading-app",
      title: t("project_4_title"),
      description: t("project_4_description"),
      category: "FinTech",
      technologies: ["React", "Python", "FastAPI", "WebSocket", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      gradient: "from-purple-500 to-violet-500",
      icon: "lucide:trending-up",
      status: "ongoing",
      year: "2024",
      client: "InvestPro",
      results: "Real-time trading",
    },
    {
      id: 5,
      name: "smart-city-dashboard",
      title: t("project_5_title"),
      description: t("project_5_description"),
      category: "IoT & Smart Cities",
      technologies: ["Angular", "IoT Sensors", "InfluxDB", "Grafana", "MQTT"],
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop",
      gradient: "from-orange-500 to-amber-500",
      icon: "lucide:building",
      status: "completed",
      year: "2023",
      client: "Smart City Initiative",
      results: "30% energy savings",
    },
    {
      id: 6,
      name: "blockchain-supply-chain",
      title: t("project_6_title"),
      description: t("project_6_description"),
      category: "Blockchain",
      technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS", "React"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      gradient: "from-indigo-500 to-blue-500",
      icon: "lucide:link",
      status: "featured",
      year: "2024",
      client: "LogiChain",
      results: "100% transparency",
    },
  ];

  const categories = [
    "all",
    "AI & Automation",
    "E-commerce",
    "Healthcare",
    "FinTech",
    "IoT & Smart Cities",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "featured":
        return "from-yellow-500 to-orange-500";
      case "ongoing":
        return "from-blue-500 to-cyan-500";
      case "completed":
        return "from-green-500 to-emerald-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "featured":
        return "Featured";
      case "ongoing":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return "Unknown";
    }
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
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className={`text-center mb-16 ${isRTL ? "text-right" : "text-left"} md:text-center`}
        >
          <div className="mb-4">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-tiny font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-500 border border-blue-500/30 backdrop-blur-sm"
            >
              <Icon icon="lucide:rocket" className="w-3 h-3 mr-1" />
              {t("projects_badge")}
            </motion.span>
          </div>

          <div className="leading-8 md:leading-10 mb-6">
            <h1 className={title({ size: "lg" })}>
              {t("projects_heading_1")}&nbsp;
            </h1>
            <h1 className={title({ size: "lg", color: "blue" })}>
              {t("projects_heading_2")}
            </h1>
          </div>

          <h2
            className={subtitle({
              fullWidth: true,
              className: `text-center ${isRTL ? "md:text-right" : "md:text-left"} lg:text-center max-w-3xl mx-auto`,
            })}
          >
            {t("projects_subtitle")}
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
                    ? "bg-blue-500 text-white shadow-lg"
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] border border-default-200/50 hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getStatusColor(project.status)} shadow-lg`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                    {getStatusText(project.status)}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon icon={project.icon} className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <Link href={`/projects/${project.name}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <Icon icon="lucide:eye" className="w-4 h-4" />
                      View Project
                      <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-blue-500 font-medium px-2 py-1 bg-blue-500/20 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-default-400">
                    {project.year}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-default-500 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Client & Results */}
                <div className="mb-4 space-y-2">
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
                  {project.results && (
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="lucide:target"
                        className="w-4 h-4 text-green-500"
                      />
                      <span className="text-xs text-default-400">Impact:</span>
                      <span className="text-xs font-medium text-green-500">
                        {project.results}
                      </span>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-default-100/10 text-default-400 rounded border border-default-200/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-default-100/10 text-default-400 rounded border border-default-200/30">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Call to Action */}
                <Link href={`/projects/${project.name}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-500/30 text-blue-500 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 group/button"
                  >
                    <span>View Details</span>
                    <Icon
                      icon="lucide:arrow-right"
                      className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300"
                    />
                  </motion.button>
                </Link>
              </div>

              {/* Animated Border */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, ${currentTheme === "dark" ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.1)"} 50%, transparent 70%)`,
                  backgroundSize: "200% 200%",
                  animation:
                    hoveredProject === project.id
                      ? "gradient-x 3s ease infinite"
                      : "none",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <Icon icon="lucide:plus-circle" className="w-5 h-5" />
            <span>Start Your Project</span>
            <Icon icon="lucide:arrow-right" className="w-5 h-5" />
          </motion.div>
          <p className="text-sm text-default-500 mt-4">
            Ready to bring your vision to life? Let's discuss your next project.
          </p>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
