import { useLocale } from "@react-aria/i18n";

const ProjectsShowcase: React.FC = () => {
  const { locale } = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold mb-4">
          Featured <span className="text-pink-500">Projects</span>
        </h2>
        <p className="text-default-500 text-lg max-w-2xl mx-auto">
          Explore our innovative solutions that have transformed businesses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large transition-transform-background border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
          <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
            <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
              <svg
                className="text-pink-500"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="text-base font-semibold">AI Workflow Automator</p>
          </div>
          <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
            <p className="font-normal text-medium text-default-500">
              Revolutionary AI-powered platform that transforms business
              operations through intelligent automation.
            </p>
          </div>
        </div>

        <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large transition-transform-background border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
          <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
            <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
              <svg
                className="text-pink-500"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M3 3H21L19 19L12 22L5 19L3 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="text-base font-semibold">E-commerce Platform</p>
          </div>
          <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
            <p className="font-normal text-medium text-default-500">
              Next-generation e-commerce solution with AI-driven recommendations
              and real-time analytics.
            </p>
          </div>
        </div>

        <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large transition-transform-background border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
          <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
            <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
              <svg
                className="text-pink-500"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M22 12H2M12 2V22"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="text-base font-semibold">Healthcare System</p>
          </div>
          <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
            <p className="font-normal text-medium text-default-500">
              Comprehensive digital health platform with telemedicine
              capabilities and patient management.
            </p>
          </div>
        </div>

        <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large transition-transform-background border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
          <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
            <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
              <svg
                className="text-pink-500"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12 2L2 22H22L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="text-base font-semibold">FinTech Platform</p>
          </div>
          <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
            <p className="font-normal text-medium text-default-500">
              Advanced real-time trading platform with algorithmic capabilities
              and comprehensive analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
