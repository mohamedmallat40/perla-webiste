"use client";

import type { IconProps } from "@iconify/react";

import React from "react";
import { Link } from "@heroui/link";
import { Spacer } from "@heroui/spacer";
import { Icon } from "@iconify/react";

type SocialIconProps = Omit<IconProps, "icon">;

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Projects",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
];

const socialItems = [
  {
    name: "Facebook",
    href: "#",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:facebook" />
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:instagram" />
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:twitter" />
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:github" />
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:youtube-play" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
    
        <Spacer y={8} />   
        <p className="mt-1 text-center text-small text-default-400">
          &copy; PERLA Code Innovators. All rights reserved.
        </p>
        <Spacer y={2} />   
        <p className="text-center text-small text-default-400">
          AV Hedi khfach 2023. Ariana Tunis, Tunisia
        </p>
        <p className="text-center text-small text-default-400">
          Contact
        </p>
      </div>
    </footer>
  );
}
