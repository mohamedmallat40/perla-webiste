import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:items-center lg:gap-12 lg:py-16 lg:px-6">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            We are the creator of Hero UI
            <span className="block text-indigo-600 dark:text-indigo-400">
              Powerful components
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-center lg:justify-start">
            <a
              href="#"
              className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded border border-gray-300 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring active:text-indigo-500 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0">
          <img
            src="/your-image-path.svg"
            alt="Hero"
            className="w-full max-w-md dark:hidden"
          />
          <img
            src="/your-image-path-dark.svg"
            alt="Hero Dark"
            className="hidden w-full max-w-md dark:block"
          />
        </div>
      </div>
    </section>
      </section>
    </DefaultLayout>
  );
}


  