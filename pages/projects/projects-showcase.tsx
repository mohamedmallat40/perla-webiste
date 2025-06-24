import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingCart,
  Heart,
  TrendingUp,
  Monitor,
  Smartphone,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { title, subtitle } from "@/components/primitives";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  gradient: string;
  technologies: string[];
  status: "completed" | "in-progress" | "planning";
}

const projects: Project[] = [
  {
    id: "ai-workflow",
    title: "AI Workflow Automator",
    description:
      "Revolutionary AI-powered platform that transforms business operations through intelligent automation and predictive analytics.",
    category: "AI & Machine Learning",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    status: "completed",
  },
  {
    id: "ecommerce-platform",
    title: "Next-Gen E-commerce",
    description:
      "Comprehensive e-commerce solution with AI-driven recommendations, real-time inventory, and seamless payment integration.",
    category: "E-commerce",
    icon: <ShoppingCart className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    status: "completed",
  },
  {
    id: "healthcare-system",
    title: "Digital Health Platform",
    description:
      "Comprehensive healthcare management system with telemedicine capabilities, patient records, and appointment scheduling.",
    category: "Healthcare",
    icon: <Heart className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    status: "in-progress",
  },
  {
    id: "fintech-platform",
    title: "FinTech Trading Hub",
    description:
      "Advanced real-time trading platform with comprehensive analytics, risk management, and portfolio optimization tools.",
    category: "Finance",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    technologies: ["React", "WebSocket", "GraphQL", "Docker"],
    status: "completed",
  },
  {
    id: "web-platform",
    title: "Enterprise Web Suite",
    description:
      "Scalable web application suite for enterprise resource planning with advanced analytics and reporting capabilities.",
    category: "Web Development",
    icon: <Monitor className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-500",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    status: "planning",
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile App",
    description:
      "Feature-rich mobile application with offline capabilities, push notifications, and seamless cloud synchronization.",
    category: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-teal-500 to-blue-500",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    status: "in-progress",
  },
];

const statusColors = {
  completed: "bg-success/20 text-success border-success/30",
  "in-progress": "bg-warning/20 text-warning border-warning/30",
  planning: "bg-default/20 text-default-600 border-default/30",
};

const statusLabels = {
  completed: "Completed",
  "in-progress": "In Progress",
  planning: "Planning",
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
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
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

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={title({ size: "lg", class: "mb-4" })}>
          Featured{" "}
          <span className={title({ color: "pink", size: "lg" })}>Projects</span>
        </h2>
        <p className={subtitle({ class: "text-lg max-w-2xl mx-auto" })}>
          Explore our innovative solutions that push the boundaries of
          technology and deliver exceptional user experiences
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="group"
          >
            <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] border border-white/10 dark:border-default-400/20 transition-all duration-300 group-hover:bg-white/10 dark:group-hover:bg-default-400/15 group-hover:border-white/20 dark:group-hover:border-default-400/30">
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}
                >
                  {statusLabels[project.status]}
                </div>
              </div>

              {/* Header with Icon and Gradient */}
              <div className="relative p-6 pb-4">
                <div
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <div className="text-white">{project.icon}</div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-default-500 mt-1 font-medium">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-6 pb-4">
                <p className="text-default-600 text-sm leading-relaxed group-hover:text-default-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-lg bg-default-100/80 dark:bg-default-800/60 text-default-700 dark:text-default-300 border border-default-200/50 dark:border-default-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-lg bg-default-100/80 dark:bg-default-800/60 text-default-500 border border-default-200/50 dark:border-default-700/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Footer with Action */}
              <div className="p-6 pt-0">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between"
                >
                  <Button
                    as={Link}
                    href="#"
                    variant="light"
                    size="sm"
                    className="text-default-600 group-hover:text-white transition-colors duration-300 p-0 h-auto bg-transparent"
                    endContent={
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    }
                  >
                    View Details
                  </Button>

                  <Button
                    as={Link}
                    href="#"
                    isIconOnly
                    variant="light"
                    size="sm"
                    className="text-default-500 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>

              {/* Hover Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Button
          as={Link}
          href="#"
          variant="bordered"
          size="lg"
          className="border-pink-500/50 text-pink-500 hover:bg-pink-500/10 transition-all duration-300"
          endContent={<ExternalLink className="w-5 h-5" />}
        >
          View All Projects
        </Button>
      </motion.div>
    </section>
  );
};

export default ProjectsShowcase;
