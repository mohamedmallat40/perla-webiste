import { FC, useState, useEffect } from "react";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";

interface HeroLandingSectionProps {
  className?: string;
}

export const HeroLandingSection: FC<HeroLandingSectionProps> = ({
  className,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const installCommand = "Let's code the future";


  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
<section
  className=" flex items-center justify-between flex-nowrap overflow-hidden lg:overflow-visible h-[calc(70vh-64px)] "
>
<img src="/svg/looper-pattern.svg" alt="pattern" className="absolute w-full left-0 rotate-[223deg]" />

<div >
     <div className="relative z-20 flex flex-col gap-6 lg:w-1/2 xl:mt-10">
  
        <div className="leading-8 text-center md:leading-10 md:text-left">
          <div className="inline-block">
            <h1 className={title({ size: "md" })}>
            Your Partner for &nbsp;
            </h1>
            <h1 className={title({ size: "md", color: "violet" })}>
            AI-Driven&nbsp;
            </h1>
          </div>
          <h1 className={title({ size: "md" })}>
          Mobile and Web Innovation
          </h1>
        </div>
        
        <h2 className={subtitle({ fullWidth: true, className: "text-center md:text-left lg:pr-8" })}>
        Delivering intelligent digital solutions with AI, web, and mobile development tailored to your business goals.
        </h2>
        
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Link 
            href="https://calendly.com/mohamedmallat40" 
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover w-full md:h-11 md:w-auto"
          >
            Get Started
            <svg 
              aria-hidden="true" 
              fill="none"
              focusable="false" 
              height="1em" 
              role="presentation" 
              viewBox="0 0 24 24" 
              width="1em" 
              className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
            >
              <path 
                d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeMiterlimit="10" 
                strokeWidth="2"
              />
              <path 
                d="M4.08325 14H23.7183" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeMiterlimit="10" 
                strokeWidth="2"
              />
            </svg>
          </Link>
          
          <div className="items-center justify-between h-fit gap-2 px-3 py-1.5 text-small bg-default/40 text-default-700 hidden w-full rounded-full md:flex sm:w-auto">
            <pre className="bg-transparent text-inherit font-mono font-normal inline-block whitespace-nowrap">
              <span className="select-none"> </span>  {installCommand}
            </pre>
            <button 
              type="button" 
              aria-label="Copy to clipboard" 
              className="group inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 gap-2 rounded-full px-0 !gap-0 transition-transform-colors-opacity motion-reduce:transition-none bg-transparent min-w-8 w-8 h-8 group relative z-10 text-large text-inherit data-[hover=true]:bg-transparent"
              data-copied={copied ? "true" : "false"}
            >

              <svg 
                aria-hidden="true" 
                fill="none" 
                focusable="false" 
                height="1em" 
                role="presentation" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                viewBox="0 0 24 24" 
                width="1em" 
                className="absolute text-inherit opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50 transition-transform-opacity"
              >
                <path d="M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"></path>
                <path d="M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"></path>
                <path d="M16 12.9C16 9.4 14.6 8 11.1 8"></path>
              </svg>
            </button>
          </div>
          
          <a 
            className="tap-highlight-transparent no-underline hover:opacity-hover active:opacity-disabled transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-6 min-w-24 h-12 text-medium gap-3 rounded-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default text-foreground data-[hover=true]:opacity-hover w-full md:hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" focusable="false">
              <path 
                clipRule="evenodd" 
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" 
                fill="currentColor" 
                fillRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
      
    </div>
    </section>
  );
};

export default HeroLandingSection;