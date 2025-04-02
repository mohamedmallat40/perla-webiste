"use client";

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
    );
  }
);

ScrollingBanner.displayName = "ScrollingBanner";

export default ScrollingBanner;
