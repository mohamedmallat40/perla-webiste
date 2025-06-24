"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";

import { useTranslations } from "@/hooks/use-translation";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  companyLogo?: string;
}

export default function TestimonialsSection() {
  const { theme, systemTheme } = useTheme();
  const { t } = useTranslations();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t("testimonial_1_name"),
      role: t("testimonial_1_role"),
      company: t("testimonial_1_company"),
      content: t("testimonial_1_content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      companyLogo: "/logos/aramco.png",
    },
    {
      id: 2,
      name: t("testimonial_2_name"),
      role: t("testimonial_2_role"),
      company: t("testimonial_2_company"),
      content: t("testimonial_2_content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b167?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: t("testimonial_3_name"),
      role: t("testimonial_3_role"),
      company: t("testimonial_3_company"),
      content: t("testimonial_3_content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            icon="lucide:star"
            className={`w-5 h-5 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : currentTheme === "dark"
                  ? "text-gray-600"
                  : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 ${
          currentTheme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"
            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        }`}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${
            currentTheme === "dark"
              ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
              : "bg-gradient-to-br from-blue-200/30 to-purple-200/30"
          }`}
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${
            currentTheme === "dark"
              ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
              : "bg-gradient-to-br from-purple-200/30 to-pink-200/30"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                currentTheme === "dark"
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  : "bg-blue-100 text-blue-600 border border-blue-200"
              }`}
            >
              <Icon icon="lucide:heart" className="w-4 h-4 mr-2" />
              {t("testimonials_badge")}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span
              className={
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }
            >
              {t("testimonials_heading_1")}&nbsp;
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t("testimonials_heading_2")}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-3xl mx-auto ${
              currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("testimonials_subtitle")}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className={`group relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                currentTheme === "dark"
                  ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600/50"
                  : "bg-white/70 border-gray-200/50 hover:bg-white/90 hover:border-gray-300/50"
              }`}
            >
              {/* Quote icon */}
              <div
                className={`absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-br from-blue-500 to-purple-500"
                    : "bg-gradient-to-br from-blue-400 to-purple-400"
                }`}
              >
                <Icon icon="lucide:quote" className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Content */}
              <blockquote
                className={`text-lg mb-6 leading-relaxed ${
                  currentTheme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-offset-2 ring-blue-500/30 ring-offset-transparent"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-semibold ${
                      currentTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className={`text-sm ${
                      currentTheme === "dark"
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-blue-500 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                    : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl backdrop-blur-sm border ${
            currentTheme === "dark"
              ? "bg-gray-800/30 border-gray-700/50"
              : "bg-white/50 border-gray-200/50"
          }`}
        >
          {[
            { label: t("stats_clients"), value: "150+", icon: "lucide:users" },
            {
              label: t("stats_projects"),
              value: "500+",
              icon: "lucide:briefcase",
            },
            {
              label: t("stats_satisfaction"),
              value: "99%",
              icon: "lucide:smile",
            },
            { label: t("stats_countries"), value: "25+", icon: "lucide:globe" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                    : "bg-gradient-to-br from-blue-100 to-purple-100"
                }`}
              >
                <Icon
                  icon={stat.icon}
                  className={`w-6 h-6 ${
                    currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                />
              </div>
              <div
                className={`text-3xl font-bold mb-1 ${
                  currentTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm ${
                  currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
