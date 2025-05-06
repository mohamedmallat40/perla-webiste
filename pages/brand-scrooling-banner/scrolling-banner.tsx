"use client";

import { Spacer } from "@heroui/spacer";
import React from "react";

interface ScrollingBannerProps {
  className?: string;
  isReverse?: boolean;
  showShadow?: boolean;
  shouldPauseOnHover?: boolean;
  isVertical?: boolean;
  gap?: string;
  duration?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const ScrollingBanner = React.forwardRef<HTMLDivElement, ScrollingBannerProps>(
  (
    {
      className = "",
      isReverse,
      isVertical = false,
      gap = "1rem",
      shouldPauseOnHover = true,
      duration = 40,
      children,
      style,
    },
    ref
  ) => {
    return (
      <section className="mx-auto w-full max-w-6xl px-6 sm:py-32 lg:px-8 ">
        <div><div className="flex flex-col gap-2 justify-center w-full items-center"><div><h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Companies &nbsp;</h1><h1 className="tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">that</h1></div><div><h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">trust&nbsp;</h1><h1 className="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">our work.</h1></div></div><Spacer y={16} /></div>
      <div
        ref={ref}
        className={`flex ${isVertical ? "overflow-y-hidden" : "overflow-x-hidden w-full"} ${className}`}
        style={
          {
            "--gap": gap,
            "--duration": `${duration}s`,
            ...style,
          } as React.CSSProperties
        }
      >
        <div
          className={`flex w-max items-stretch gap-[--gap] ${
            isVertical ? "flex-col h-full" : ""
          } ${isReverse ? "[animation-direction:reverse]" : ""} ${
            shouldPauseOnHover ? "hover:[animation-play-state:paused]" : ""
          }`}
        >
          {React.Children.map(children, (child) => child)}
        </div>
      </div>
      </section>
    );
  }
);

ScrollingBanner.displayName = "ScrollingBanner";

export default ScrollingBanner;
