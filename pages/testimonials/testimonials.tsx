"use client";

import { useTheme } from "next-themes";
import { useLocale } from "@react-aria/i18n";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useTranslations } from "@/hooks/use-translation";
import { title, subtitle } from "@/components/primitives";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  companyLogo?: string;
  location: string;
  projectType: string;
  featured?: boolean;
}

export default function TestimonialsSection() {
  const { theme, systemTheme } = useTheme();
  const { t } = useTranslations();
  const { locale } = useLocale();
  const [activeTab, setActiveTab] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isRTL = locale === "ar";

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
      location: "Saudi Arabia",
      projectType: "AI Integration",
      featured: true,
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
      location: "United States",
      projectType: "Mobile App",
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
      location: "Tunisia",
      projectType: "Web Platform",
    },
    {
      id: 4,
      name: "Lisa Chen",
      role: "Product Director",
      company: "InnovateTech",
      content:
        "Their AI solutions revolutionized our workflow. The team's attention to detail and innovative approach exceeded our expectations.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      location: "Singapore",
      projectType: "AI Automation",
    },
    {
      id: 5,
      name: "David Rodriguez",
      role: "Startup Founder",
      company: "NextGen Solutions",
      content:
        "From concept to deployment, they delivered beyond expectations. Their technical expertise and professional approach are unmatched.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      location: "Spain",
      projectType: "Full Stack",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const filteredTestimonials =
    activeTab === "all"
      ? testimonials
      : testimonials.filter((t) =>
          t.projectType.toLowerCase().includes(activeTab.toLowerCase()),
        );

  const featuredTestimonial =
    testimonials.find((t) => t.featured) || testimonials[0];

  const StarRating = ({
    rating,
    size = "sm",
  }: {
    rating: number;
    size?: "sm" | "lg";
  }) => {
    const starSize = size === "lg" ? "w-6 h-6" : "w-4 h-4";
    return (
      <div className={`flex gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
          >
            <Icon
              icon="lucide:star"
              className={`${starSize} ${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-default-300"
              }`}
            />
          </motion.div>
        ))}
      </div>
    );
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
    hidden: { opacity: 0, y: 30 },
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
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 mt-5"
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
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-tiny font-medium bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-500 border border-pink-500/30 backdrop-blur-sm"
            >
              <Icon icon="lucide:heart" className="w-3 h-3 mr-1" />
              {t("testimonials_badge")}
            </motion.span>
          </div>

          <div className="leading-8 md:leading-10 mb-6">
            <h1 className={title({ size: "lg" })}>
              {t("testimonials_heading_1")}&nbsp;
            </h1>
            <h1 className={title({ size: "lg", color: "pink" })}>
              {t("testimonials_heading_2")}
            </h1>
          </div>

          <h2
            className={subtitle({
              fullWidth: true,
              className: `text-center ${isRTL ? "md:text-right" : "md:text-left"} lg:text-center max-w-3xl mx-auto`,
            })}
          >
            {t("testimonials_subtitle")}
          </h2>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-blue-500/10 backdrop-blur-sm border border-pink-500/20 p-8 lg:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Content */}
                  <div className={`${isRTL ? "lg:order-2" : ""} space-y-6`}>
                    <div className="flex items-center gap-4">
                      <StarRating
                        rating={testimonials[currentSlide].rating}
                        size="lg"
                      />
                      <span className="text-sm text-default-500">
                        {testimonials[currentSlide].projectType}
                      </span>
                    </div>

                    <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
                      "{testimonials[currentSlide].content}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[currentSlide].avatar}
                        alt={testimonials[currentSlide].name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-pink-500/20"
                      />
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">
                          {testimonials[currentSlide].name}
                        </h4>
                        <p className="text-default-500">
                          {testimonials[currentSlide].role}
                        </p>
                        <p className="text-pink-500 font-medium">
                          {testimonials[currentSlide].company} •{" "}
                          {testimonials[currentSlide].location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div
                    className={`${isRTL ? "lg:order-1" : ""} flex justify-center`}
                  >
                    <div className="relative">
                      <div className="w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-500/30">
                        <div className="w-48 h-48 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full flex items-center justify-center">
                          <Icon
                            icon="lucide:quote"
                            className="w-20 h-20 text-pink-500"
                          />
                        </div>
                      </div>
                      {/* Floating elements */}
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                      >
                        <Icon
                          icon="lucide:star"
                          className="w-4 h-4 text-white"
                        />
                      </motion.div>
                      <motion.div
                        animate={{
                          y: [0, 10, 0],
                          rotate: [0, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                        className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                      >
                        <Icon
                          icon="lucide:heart"
                          className="w-3 h-3 text-white"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="flex justify-between items-center mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        setIsAutoPlay(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-pink-500 w-8"
                          : "bg-default-300 hover:bg-pink-500/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Icon
                      icon={isAutoPlay ? "lucide:pause" : "lucide:play"}
                      className="w-4 h-4 text-foreground"
                    />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (prev) =>
                          (prev - 1 + testimonials.length) %
                          testimonials.length,
                      )
                    }
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Icon
                      icon="lucide:chevron-left"
                      className="w-4 h-4 text-foreground"
                    />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (prev) => (prev + 1) % testimonials.length,
                      )
                    }
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Icon
                      icon="lucide:chevron-right"
                      className="w-4 h-4 text-foreground"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-1 bg-white/5 dark:bg-default-400/10 backdrop-blur-lg rounded-full border border-default-200/50">
            {["all", "AI", "Mobile", "Web"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveTab(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === filter
                    ? "bg-pink-500 text-white shadow-lg"
                    : "text-default-500 hover:text-foreground hover:bg-white/10"
                }`}
              >
                {filter === "all" ? "All Projects" : `${filter} Projects`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredTestimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] border border-default-200/50 hover:border-pink-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quote Icon */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <Icon icon="lucide:quote" className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div
                    className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-500/20 group-hover:ring-pink-500/40 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white dark:border-gray-800" />
                    </div>
                    <div
                      className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}
                    >
                      <h4 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-default-500">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <p className="text-xs text-pink-500 font-medium">
                          {testimonial.company}
                        </p>
                        <span className="text-xs text-default-400">•</span>
                        <p className="text-xs text-default-400">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rating & Project Type */}
                  <div className="flex justify-between items-center mb-4">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-500 rounded-full">
                      {testimonial.projectType}
                    </span>
                  </div>

                  {/* Content */}
                  <blockquote
                    className={`text-sm text-default-500 leading-relaxed ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    "
                    {testimonial.content.length > 120
                      ? testimonial.content.slice(0, 120) + "..."
                      : testimonial.content}
                    "
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              label: t("stats_clients"),
              value: "9",
              icon: "lucide:users",
              color: "from-pink-500 to-rose-500",
              bgColor: "from-pink-500/20 to-rose-500/20",
              description: "Trusted Partners",
            },
            {
              label: t("stats_projects"),
              value: "14",
              icon: "lucide:briefcase",
              color: "from-blue-500 to-cyan-500",
              bgColor: "from-blue-500/20 to-cyan-500/20",
              description: "Successfully Delivered",
            },
            {
              label: t("stats_experience"),
              value: "5+",
              icon: "lucide:calendar",
              color: "from-green-500 to-emerald-500",
              bgColor: "from-green-500/20 to-emerald-500/20",
              description: "Years of Innovation",
            },
            {
              label: t("stats_countries"),
              value: "5",
              icon: "lucide:globe",
              color: "from-purple-500 to-violet-500",
              bgColor: "from-purple-500/20 to-violet-500/20",
              description: "Global Reach",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden rounded-xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] border border-default-200/50 hover:border-default-300/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10 p-6 text-center">
                <div className="mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      icon={stat.icon}
                      className={`w-6 h-6 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                    />
                  </div>
                </div>

                <motion.div
                  className={`text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.div>

                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-default-500">
                  {stat.description}
                </div>
              </div>

              {/* Floating decoration */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${stat.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
