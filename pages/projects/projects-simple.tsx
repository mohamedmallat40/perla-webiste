import { useLocale } from "@react-aria/i18n";
import { Icon } from "@iconify/react";
import Link from "next/link";

import { useTranslations } from "@/hooks/use-translation";
import { title, subtitle } from "@/components/primitives";

const ProjectsShowcase: React.FC = () => {
  const { t } = useTranslations();
  const { locale } = useLocale();
  const isRTL = locale === "ar";

  const projects = [
    {
      name: "ai-workflow-automator",
      title: "AI Workflow Automator",
      description:
        "Revolutionary AI-powered platform that transforms business operations through intelligent automation.",
      category: "AI & Automation",
      icon: "lucide:brain",
      status: "Featured",
    },
    {
      name: "smart-ecommerce-platform",
      title: "Smart E-commerce Platform",
      description:
        "Next-generation e-commerce solution featuring AI-driven recommendations and real-time analytics.",
      category: "E-commerce",
      icon: "lucide:shopping-cart",
      status: "Completed",
    },
    {
      name: "healthcare-management-system",
      title: "Healthcare Management System",
      description:
        "Comprehensive digital health platform with telemedicine capabilities and patient records management.",
      category: "Healthcare",
      icon: "lucide:heart-pulse",
      status: "Completed",
    },
    {
      name: "fintech-trading-platform",
      title: "FinTech Trading Platform",
      description:
        "Advanced real-time trading platform with algorithmic trading capabilities and comprehensive analytics.",
      category: "FinTech",
      icon: "lucide:trending-up",
      status: "Ongoing",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      {/* Header */}
      <div
        className={`text-center mb-16 ${isRTL ? "text-right" : "text-left"} md:text-center`}
      >
        <div className="mb-4">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-tiny font-medium bg-secondary-100/80 text-pink-500">
            <Icon icon="lucide:rocket" className="w-3 h-3 mr-1" />
            Our Portfolio
          </span>
        </div>

        <div className="leading-8 md:leading-10 mb-6">
          <h1 className={title({ size: "lg" })}>Featured&nbsp;</h1>
          <h1 className={title({ size: "lg", color: "pink" })}>Projects</h1>
        </div>

        <h2
          className={subtitle({
            fullWidth: true,
            className: `text-center max-w-3xl mx-auto`,
          })}
        >
          Explore our innovative solutions that have transformed businesses
          across industries
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          >
            <div
              className={
                isRTL
                  ? "flex p-3 z-10 flex-row-reverse w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0"
                  : "flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0"
              }
            >
              <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                <Icon icon={project.icon} className="text-pink-500 w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold">{project.title}</p>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-500 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
              <p
                className={
                  isRTL
                    ? "font-normal text-medium text-default-500 text-right mb-4"
                    : "font-normal text-medium text-default-500 mb-4"
                }
              >
                {project.description}
              </p>
              <Link href={`/projects/${project.name}`}>
                <button className="w-full bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-500 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300">
                  <Icon icon="lucide:eye" className="w-4 h-4" />
                  View Project
                  <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
