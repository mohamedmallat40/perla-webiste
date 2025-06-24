"use client";

import { useTheme } from "next-themes";
import { useLocale } from "@react-aria/i18n";
import { Icon } from "@iconify/react";

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
}

export default function TestimonialsSection() {
  const { theme, systemTheme } = useTheme();
  const { t } = useTranslations();
  const { locale } = useLocale();

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

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className={`flex gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            icon="lucide:star"
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-default-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header Section */}
      <div
        className={`text-center mb-16 ${isRTL ? "text-right" : "text-left"} md:text-center`}
      >
        <div className="mb-4">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-tiny font-medium bg-secondary-100/80 text-pink-500">
            <Icon icon="lucide:heart" className="w-3 h-3 mr-1" />
            {t("testimonials_badge")}
          </span>
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
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] hover:scale-[1.02] group"
          >
            {/* Quote Icon */}
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary-100/80 flex items-center justify-center">
              <Icon icon="lucide:quote" className="w-4 h-4 text-pink-500" />
            </div>

            {/* Header with Avatar and Rating */}
            <div
              className={`flex p-6 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-3 pb-4 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-500/20 ring-offset-2 ring-offset-transparent"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white dark:border-gray-800" />
              </div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <h4 className="font-semibold text-foreground text-base">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-default-500">{testimonial.role}</p>
                <p className="text-sm text-pink-500 font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="relative flex w-full px-6 pb-4 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words overflow-y-auto subpixel-antialiased">
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <blockquote
                className={`font-normal text-medium text-default-500 leading-relaxed ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                "{testimonial.content}"
              </blockquote>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-large opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-pink-500/5 to-purple-500/5 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            label: t("stats_clients"),
            value: "150+",
            icon: "lucide:users",
            color: "text-pink-500",
          },
          {
            label: t("stats_projects"),
            value: "500+",
            icon: "lucide:briefcase",
            color: "text-blue-500",
          },
          {
            label: t("stats_satisfaction"),
            value: "99%",
            icon: "lucide:smile",
            color: "text-green-500",
          },
          {
            label: t("stats_countries"),
            value: "25+",
            icon: "lucide:globe",
            color: "text-purple-500",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] hover:scale-[1.02] group"
          >
            <div className="flex p-4 z-10 w-full justify-center items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-2">
              <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80">
                <Icon icon={stat.icon} className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div className="relative flex w-full px-4 pb-4 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-center overflow-y-auto subpixel-antialiased">
              <div className="text-2xl lg:text-3xl font-bold mb-1 text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-default-500">{stat.label}</div>
            </div>

            {/* Hover effect overlay */}
            <div
              className={`absolute inset-0 rounded-large opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${stat.color.replace("text-", "from-")}/5 to-transparent pointer-events-none`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
