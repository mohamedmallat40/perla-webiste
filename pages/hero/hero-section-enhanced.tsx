"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Zap } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@react-aria/i18n";
import clsx from "clsx";

import { title, subtitle } from "@/components/primitives";
import { useTranslations } from "@/hooks/use-translation";

export default function EnhancedHeroSection() {
  const { t } = useTranslations();
  const { locale } = useLocale();
  const isRTL = locale === "ar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={clsx(
        "relative z-10 min-h-[80vh] flex items-center",
        "bg-gradient-to-br from-background via-background to-background/80",
        "overflow-hidden",
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--heroui-primary-100)_0%,_transparent_50%)] opacity-20" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={clsx(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            isRTL && "lg:grid-flow-col-dense",
          )}
        >
          {/* Left Content */}
          <motion.div
            className={clsx(
              "space-y-8",
              isRTL ? "lg:col-start-2 text-right" : "text-left",
            )}
            variants={itemVariants}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-4 h-4" />
                Web Development Experts
              </motion.div>

              <motion.h1
                className={clsx(
                  "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                  isRTL && "text-right",
                )}
                variants={itemVariants}
              >
                Build. Scale.{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Succeed.
                </span>
              </motion.h1>

              <motion.p
                className={clsx(
                  "text-lg md:text-xl text-default-600 max-w-2xl",
                  isRTL && "text-right",
                )}
                variants={itemVariants}
              >
                Transform your vision into powerful web solutions. Fast,
                reliable, and built to grow with your business.
              </motion.p>
            </div>

            <motion.div
              className={clsx(
                "flex flex-col sm:flex-row gap-4",
                isRTL ? "sm:flex-row-reverse" : "",
              )}
              variants={itemVariants}
            >
              <Link
                href="https://calendly.com/mohamedmallat40"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight
                  className={clsx(
                    "w-4 h-4 transition-transform group-hover:translate-x-1",
                    isRTL && "rotate-180 group-hover:-translate-x-1",
                  )}
                />
              </Link>

              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-default-200 text-foreground font-medium transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105">
                View Portfolio
              </button>
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className={clsx("space-y-6", isRTL ? "lg:col-start-1" : "")}
            variants={itemVariants}
          >
            {/* Quick Start Card */}
            <motion.div
              className="relative group"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-content1/80 backdrop-blur-xl border border-divider/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-primary/30">
                <div
                  className={clsx(
                    "flex items-center gap-3 mb-4",
                    isRTL && "flex-row-reverse",
                  )}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Quick Launch</h3>
                </div>
                <p
                  className={clsx(
                    "text-default-600 text-sm leading-relaxed",
                    isRTL && "text-right",
                  )}
                >
                  Get your project live in weeks, not months. Our streamlined
                  process delivers results fast.
                </p>
              </div>
            </motion.div>

            {/* Innovation Card */}
            <motion.div
              className="relative group"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-content1/80 backdrop-blur-xl border border-divider/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-secondary/30">
                <div
                  className={clsx(
                    "flex items-center gap-3 mb-4",
                    isRTL && "flex-row-reverse",
                  )}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Modern Tech</h3>
                </div>
                <p
                  className={clsx(
                    "text-default-600 text-sm leading-relaxed",
                    isRTL && "text-right",
                  )}
                >
                  Built with cutting-edge technologies for performance,
                  security, and scalability.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={itemVariants}
        >
          {[
            { number: "50+", label: "Projects" },
            { number: "99%", label: "Success Rate" },
            { number: "24/7", label: "Support" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-default-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
