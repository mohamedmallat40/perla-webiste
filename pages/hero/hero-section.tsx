import { FC } from "react";
import { useLocale } from "@react-aria/i18n";
import Link from "next/link";

import { useTranslations } from "../../hooks/use-translation";

import { title, subtitle } from "@/components/primitives";

interface HeroLandingSectionProps {
  className?: string;
}

export const HeroLandingSection: FC<HeroLandingSectionProps> = ({
  className,
}) => {
  const { locale } = useLocale();
  const isRTL = locale === "ar";

  const { t } = useTranslations();

  return (
    <section
      className="flex items-center justify-between flex-nowrap overflow-hidden lg:overflow-visible h-[calc(70vh-64px)]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <img
        alt="pattern"
        className={`absolute w-full ${isRTL ? "right-0 rotate-[43deg]" : "left-0 rotate-[223deg]"}`}
        loading="lazy"
        src="/svg/looper-pattern.svg"
      />

      <div className="w-full">
        <div
          className={`relative z-20 flex flex-col gap-6 lg:w-3/5 xl:mt-10 ${isRTL ? "items-end" : ""}`}
        >
          <h1
            className={`leading-8 text-center md:leading-10 ${isRTL ? "md:text-right" : "md:text-left"}`}
          >
            <span className="inline-block">
              <span className={title({ size: "md" })}>
                {t("hero_title_1")}&nbsp;
              </span>
              <span className={title({ size: "md", color: "violet" })}>
                {t("hero_title_2")}&nbsp;
              </span>
            </span>
            <span className={title({ size: "md", fullWidth: true })}>{t("hero_title_3")}</span>
          </h1>

          <h2
            className={subtitle({
              fullWidth: true,
              className: `text-center ${isRTL ? "md:text-right" : "md:text-left"}`,
            })}
          >
            {t("hero_subtitle")}
          </h2>

          <div
            className={`flex flex-col items-center gap-4 ${isRTL ? "md:flex-row ml-auto" : "md:flex-row"}`}
          >
            <Link
              className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover w-full md:h-11 md:w-auto"
              href="https://calendly.com/mohamedmallat40"
            >
              {t("service_hero_section_title_1")}&nbsp;
              <svg
                aria-hidden="true"
                className={`${isRTL ? "group-data-[hover=true]:-translate-x-0.5" : "group-data-[hover=true]:translate-x-0.5"} outline-none transition-transform`}
                fill="none"
                focusable="false"
                height="1em"
                role="presentation"
                viewBox="0 0 24 24"
                width="1em"
              >
                <path
                  d={
                    isRTL
                      ? "M7.165 6.91821L0.0834 13.9999L7.165 21.0815"
                      : "M16.835 6.91821L23.9166 13.9999L16.835 21.0815"
                  }
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <path
                  d={isRTL ? "M19.9168 14H0.2817" : "M4.08325 14H23.7183"}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div id="services_id" />
      </div>
    </section>
  );
};

export default HeroLandingSection;
