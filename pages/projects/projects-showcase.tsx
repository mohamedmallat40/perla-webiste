import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingCart,
  Heart,
  TrendingUp,
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
  technologies: string[];
  status: "Live" | "Beta" | "Coming Soon";
}

const projects: Project[] = [
  {
    id: "ai-workflow",
    title: "AI Workflow Platform",
    description:
      "Intelligent automation platform that streamlines business operations with advanced AI capabilities.",
    category: "AI & Machine Learning",
    icon: <Sparkles className="w-5 h-5" />,
    technologies: ["Python", "TensorFlow", "React"],
    status: "Live",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Suite",
    description:
      "Complete e-commerce solution with AI recommendations and real-time analytics.",
    category: "E-commerce",
    icon: <ShoppingCart className="w-5 h-5" />,
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    status: "Live",
  },
  {
    id: "healthcare-system",
    title: "Health Management",
    description:
      "Digital healthcare platform with telemedicine and patient management features.",
    category: "Healthcare",
    icon: <Heart className="w-5 h-5" />,
    technologies: ["React", "Node.js", "MongoDB"],
    status: "Beta",
  },
  {
    id: "fintech-platform",
    title: "Trading Platform",
    description:
      "Real-time trading platform with advanced analytics and risk management tools.",
    category: "FinTech",
    icon: <TrendingUp className="w-5 h-5" />,
    technologies: ["React", "WebSocket", "GraphQL"],
    status: "Coming Soon",
  },
];

const statusConfig = {
  Live: {
    color:
      "bg-success-100 text-success-700 dark:bg-success-50 dark:text-success-800",
    dot: "bg-success-500",
  },
  Beta: {
    color:
      "bg-warning-100 text-warning-700 dark:bg-warning-50 dark:text-warning-800",
    dot: "bg-warning-500",
  },
  "Coming Soon": {
    color:
      "bg-default-100 text-default-600 dark:bg-default-100 dark:text-default-700",
    dot: "bg-default-400",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={title({ size: "lg", class: "mb-4" })}>
            Featured{" "}
            <span className={title({ color: "pink", size: "lg" })}>
              Projects
            </span>
          </h2>
          <p className={subtitle({ class: "max-w-2xl mx-auto" })}>
            Innovative solutions that drive business growth and enhance user
            experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl border border-divider bg-content1 shadow-small transition-all duration-300 hover:shadow-medium hover:border-default-300 dark:hover:border-default-600">
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${statusConfig[project.status].color}`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${statusConfig[project.status].dot}`}
                    />
                    {project.status}
                  </div>
                </div>

                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-primary-50 text-primary dark:bg-primary-100 dark:text-primary-700 mb-4">
                  {project.icon}
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {project.category}
                    </p>
                  </div>

                  <p className="text-default-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-default-100 text-default-700 dark:bg-default-200 dark:text-default-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <Button
                  as={Link}
                  href="#"
                  variant="light"
                  color="primary"
                  size="sm"
                  className="font-medium group-hover:translate-x-1 transition-transform duration-200"
                  endContent={<ArrowRight className="w-4 h-4" />}
                >
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            as={Link}
            href="#"
            variant="bordered"
            color="primary"
            size="lg"
            className="font-medium"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
