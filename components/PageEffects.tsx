import React, { useEffect } from "react";
import { useRouter } from "next/router";

export const PageEffects: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = "lazy";
        }
        if (!img.decoding) {
          img.decoding = "async";
        }
      });
    };

    const reserveDynamicSpace = () => {
      const dynamicContainers = document.querySelectorAll("[data-dynamic]");
      dynamicContainers.forEach((container) => {
        if (container instanceof HTMLElement) {
          container.style.minHeight = "200px";
        }
      });
    };

    const runOptimizations = () => {
      if ("scheduler" in window && "postTask" in (window as any).scheduler) {
        (window as any).scheduler.postTask(
          () => {
            optimizeImages();
            reserveDynamicSpace();
          },
          { priority: "background" },
        );
      } else {
        setTimeout(() => {
          optimizeImages();
          reserveDynamicSpace();
        }, 0);
      }
    };

    if (document.readyState === "complete") {
      runOptimizations();
    } else {
      window.addEventListener("load", runOptimizations);
    }

    return () => {
      window.removeEventListener("load", runOptimizations);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return null;
};

// Web Vitals reporting
export const reportWebVitals = (_metric: any) => {
  // Analytics not yet configured
};
