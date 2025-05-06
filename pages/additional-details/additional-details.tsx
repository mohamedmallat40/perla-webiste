'use client';

import { title, subtitle } from "@/components/primitives";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 flex-col gap-2 bg-transparent dark:bg-transparent before:bg-background/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200 border-t border-b border-divider px-8  flex justify-center items-center ">
      <div className="w-full  py-10 grid grid-cols-12 gap-6 md:gap-0 z-20">
        {/* Left side - Text content */}
      <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
        <div className="flex flex-col">
          <h1 className="tracking-tight font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl inline">
            Let's make the
          </h1>
          <div>
            <h1 className="tracking-tight inline font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl">
              Web&nbsp;
            </h1>
            <h1 className={title({ color: "violet", size: "md" })}>Prettier</h1>
          </div>
        </div>
        <p className={subtitle()}>
          Experience it firsthand and show us your creations!
        </p>
        <div className="flex flex-row gap-3 justify-start">
          <Link
            href="/docs/guide/installation"
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-full bg-secondary text-secondary-foreground data-[hover=true]:opacity-hover text-sm"
          >
            Modern UI libraries
            <ArrowRight className="group-hover:translate-x-0.5 outline-none transition-transform" size={16} />
          </Link>
          <Link
            href="https://github.com/heroui-inc/heroui"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-highlight-transparent no-underline hover:opacity-hover active:opacity-disabled transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-4 min-w-20 h-10 gap-2 rounded-full bg-transparent border-default text-foreground data-[hover=true]:opacity-hover text-sm"
          >
            Github
          </Link>
        </div>
      </div>

      {/* Right side - Cards */}
      <div className="col-span-12 md:col-span-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col relative overflow-hidden h-auto text-foreground shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none hover:scale-[1.01] border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
              <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                  className="text-pink-500"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M8 2v3"></path>
                    <path d="M16 2v3M7 13h8M7 17h5M16 3.5c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15z"></path>
                  </g>
                </svg>
              </div>
              <p className="text-base font-semibold">Getting Started</p>
            </div>
            <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
              <p className="font-normal text-medium text-default-500">
                Make beautiful, modern, and fast websites/applications regardless
                of your design experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col relative overflow-hidden h-auto text-foreground shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none hover:scale-[1.01] border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
              <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                <svg
                  aria-hidden="true"
                  height="24"
                  viewBox="0 0 256 256"
                  width="24"
                  className="text-pink-500"
                >
                  <path
                    d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-base font-semibold">HeroUI + Next.js</p>
            </div>
            <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
              <p className="font-normal text-medium text-default-500">
                HeroUI is fully compatible with the new Next.js{" "}
                <code className="px-2 py-1 h-fit font-mono font-normal inline-block whitespace-nowrap bg-default/40 text-default-700 text-small rounded-small">
                  app/
                </code>{" "}
                directory structure.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}