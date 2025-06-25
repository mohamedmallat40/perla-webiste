"use client";

import type { IconProps } from "@iconify/react";
import React from "react";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import { Logo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { useTranslations } from "@/hooks/use-translation";

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
  services: [
    { name: "AI Development", href: "#" },
    { name: "AI Integration", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
  ],
  company: [
    { name: "Technologies", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Legal Notice", href: "#" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="mdi:linkedin" />,
    },
  ],
};

export default function EnhancedFooter() {
  const { t } = useTranslations();

  const renderList = React.useCallback(
    ({
      title,
      items,
    }: {
      title: string;
      items: { name: string; href: string }[];
    }) => (
      <div>
        <h3 className="text-small font-semibold text-default-600">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                className="text-default-400 hover:text-default-600 transition-colors"
                href={item.href}
                size="sm"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    [],
  );

  return (
    <footer className="flex w-full flex-col bg-background border-t border-divider">
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start gap-2">
              <Logo size={40} />
              <span className="text-lg font-bold text-foreground">PERLA</span>
            </div>
            <p className="text-small text-default-500 max-w-md">
              Innovative software solutions that transform ideas into digital
              reality. We specialize in AI, web development, and cutting-edge
              technology.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  isExternal
                  className="text-default-400 hover:text-primary transition-colors"
                  href={item.href}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: "Services",
                  items: footerNavigation.services,
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({
                  title: "Company",
                  items: footerNavigation.company,
                })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                {renderList({ title: "Legal", items: footerNavigation.legal })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider and Bottom Section */}
        <div className="mt-16 border-t border-divider pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-small text-default-400">
              <p>
                &copy; 2024 PERLA Code Innovators.{" "}
                {t("rights") || "All rights reserved."}
              </p>
              <div className="hidden sm:block">•</div>
              <p className="flex items-center gap-2">
                <Icon icon="mdi:map-marker" className="w-4 h-4" />
                {t("address") || "Tunisia, North Africa"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://calendly.com/mohamedmallat40"
                isExternal
                className="flex items-center gap-2 text-default-400 hover:text-primary transition-colors text-small"
              >
                <Icon icon="mdi:calendar" className="w-4 h-4" />
                Schedule Meeting
              </Link>
              <Link
                href={`mailto:${t("email") || "contact@perla.dev"}`}
                className="flex items-center gap-2 text-default-400 hover:text-primary transition-colors text-small"
              >
                <Icon icon="mdi:email" className="w-4 h-4" />
                {t("email") || "contact@perla.dev"}
              </Link>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
