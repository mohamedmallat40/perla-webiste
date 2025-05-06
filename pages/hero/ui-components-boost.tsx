"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

export default function UIUXSection() {
  const {theme} = useTheme();

  return (
    <section
      className="relative z-10 flex flex-col gap-2 w-full mt-16 lg:mt-44  overflow-hidden bg-cover bg-center"
      style={{
        // backgroundImage: `url('/logos/hero-background${theme==="dark" ? "":"-white"}.webp')`, // Background image URL
      }}
    >
      <img src={`/logos/hero-background${theme==="dark" ? "":"-white"}.webp`} alt="pattern" className="absolute w-full left-0  bounce-animation " />

      <div className="flex flex-col gap-8 min-h-[480px]">
        {/* Text Content */}
        <div className="z-30 flex w-screen h-full flex-col items-start justify-center leading-8 pt-4">
          <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-1 h-6 text-tiny rounded-full bg-primary text-primary-foreground ml-0.5 transition-colors bg-gradient-to-br from-cyan-600 to-blue-600">
            <span className="flex-1 text-inherit px-1 text-tiny font-semibold">
              PRO
            </span>
          </div>
          <div className="flex-col gap-2 items-start justify-center w-full mt-2 inline md:block">
            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-shadow">
              Ship&nbsp;
            </h1>
            <h1 className="tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b text-shadow">
              faster&nbsp;
            </h1>
            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-shadow">
              with&nbsp;
            </h1>
            <div className="flex flex-col sm:flex-row">
              <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-shadow">
                beautiful&nbsp;
              </h1>
              <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-shadow">
                and Modern UI Libraries
              </h1>
            </div>
          </div>
          <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal block max-w-full pr-12 text-foreground-500">
            development without compromising quality. By leveraging top UI
            libraries such as Hero UI, MUI, antd and others, we streamline the
            frontend development process, reducing time-to-market for your
            applications.
          </p>
          <div className="mt-4 text-foreground-600 font-medium space-y-2">
            {[
              "Faster Deployment – Pre-built, customizable components speed up development.",
              "Consistent UI/UX – Modern and responsive designs enhance user experience.",
              "Flexible & Scalable – Easily adaptable for future improvements.",
              "Figma Files Included",
            ].map((text, index) => (
              <div key={index} className="flex gap-x-4 items-center">
                <svg
                  fill="none"
                  height="11"
                  viewBox="0 0 13 11"
                  width="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6.4L4.14286 10L12 1"
                    stroke="#006FEE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Dark Gradient Overlays */}
        { theme==="dark"  ? <><div className="absolute md:hidden inset-0 pointer-events-none top-0 z-20">
          <div className="h-full w-full bg-[radial-gradient(at_40%_80%,_rgba(255,255,255,_0)_5%,_rgba(0,0,0,_0.8)_50%,_rgba(0,0,0,1)_100%)]"></div>
        </div>
        
        
        <div className="absolute hidden md:block md:inset-0 md:pointer-events-none md:top-0 md:z-20">
          <div className="h-full w-full bg-[radial-gradient(at_80%_50%,_rgba(255,255,255,_0)_20%,_rgba(0,0,0,_0.8)_40%,_rgba(0,0,0,1)_100%)]"></div>
        </div>
        </> : <>
        <div className="absolute hidden md:block md:inset-0 md:pointer-events-none md:top-0 md:z-20"><div className="h-full w-full bg-[radial-gradient(at_80%_50%,_rgba(0,0,0,_0)_20%,_rgba(255,255,255,_0.9)_40%,_rgba(255,255,255,1)_100%)]"></div></div>
        </>}
        
        
        
   
      </div>
    </section>
  );
}
