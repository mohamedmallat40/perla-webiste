import React, { useEffect } from "react";
import { useRouter } from "next/router";

export const PerformanceOptimizer: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement("link");
      criticalCSS.rel = "preload";
      criticalCSS.as = "style";
      criticalCSS.href = "/critical.css";
      document.head.appendChild(criticalCSS);

      // Preload hero image
      const heroImage = new Image();
      heroImage.src = "/hero-image.webp";

      // Preload fonts
      const fontPreload = document.createElement("link");
      fontPreload.rel = "preload";
      fontPreload.as = "font";
      fontPreload.type = "font/woff2";
      fontPreload.crossOrigin = "anonymous";
      fontPreload.href = "/fonts/inter-var.woff2";
      document.head.appendChild(fontPreload);
    };

    // Optimize images with loading="lazy" and proper sizing
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

    // Remove unused CSS (basic implementation)
    const removeUnusedCSS = () => {
      // This would be better implemented with a build-time tool
      // For now, we'll just ensure critical CSS is loaded first
      const criticalElements = [
        "nav",
        "header",
        "main",
        ".hero",
        ".navbar",
        ".btn-primary",
      ];

      // Mark critical elements for faster rendering
      criticalElements.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.contentVisibility = "auto";
            el.style.containIntrinsicSize = "0 200px";
          }
        });
      });
    };

    // Implement resource hints
    const addResourceHints = () => {
      // Prefetch likely next pages
      const prefetchPages = [
        "/services",
        "/technologies",
        "/about",
        "/contact",
      ];

      prefetchPages.forEach((page) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = page;
        document.head.appendChild(link);
      });
    };

    // Optimize Core Web Vitals
    const optimizeCoreWebVitals = () => {
      // Reduce Cumulative Layout Shift (CLS)
      const preventLayoutShift = () => {
        // Set aspect ratios for images
        const images = document.querySelectorAll(
          "img:not([width]):not([height])",
        );
        images.forEach((img) => {
          if (img instanceof HTMLImageElement) {
            img.style.aspectRatio = "16/9"; // Default aspect ratio
          }
        });

        // Reserve space for dynamic content
        const dynamicContainers = document.querySelectorAll("[data-dynamic]");
        dynamicContainers.forEach((container) => {
          if (container instanceof HTMLElement) {
            container.style.minHeight = "200px";
          }
        });
      };

      // Improve Largest Contentful Paint (LCP)
      const improveLCP = () => {
        // Preload LCP candidate
        const lcpElements = document.querySelectorAll(
          "h1, .hero-title, .main-image",
        );
        lcpElements.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.fontDisplay = "swap";
          }
        });
      };

      // Optimize First Input Delay (FID)
      const optimizeFID = () => {
        // Break up long tasks
        if ("scheduler" in window && "postTask" in (window as any).scheduler) {
          const scheduler = (window as any).scheduler;
          scheduler.postTask(
            () => {
              // Non-critical JavaScript
              optimizeImages();
              removeUnusedCSS();
            },
            { priority: "background" },
          );
        } else {
          // Fallback for browsers without scheduler API
          setTimeout(() => {
            optimizeImages();
            removeUnusedCSS();
          }, 0);
        }
      };

      preventLayoutShift();
      improveLCP();
      optimizeFID();
    };

    // Run optimizations
    preloadCriticalResources();
    addResourceHints();

    // Run after DOM is ready
    if (document.readyState === "complete") {
      optimizeCoreWebVitals();
    } else {
      window.addEventListener("load", optimizeCoreWebVitals);
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", optimizeCoreWebVitals);
    };
  }, []);

  // Route change optimization
  useEffect(() => {
    const handleRouteChange = () => {
      // Scroll to top on route change
      window.scrollTo(0, 0);

      // Update page view for analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("config", "GA_TRACKING_ID", {
          page_path: router.asPath,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      {/* Critical CSS inlining would go here in a real implementation */}
      <style jsx>{`
        /* Critical above-the-fold styles */
        nav {
          display: flex;
        }
        .hero {
          min-height: 60vh;
        }
        .btn-primary {
          background: linear-gradient(45deg, #f12960, #f32181);
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          color: white;
        }
      `}</style>
    </>
  );
};

// Web Vitals reporting
export const reportWebVitals = (metric: any) => {
  if (typeof window !== "undefined") {
    console.log("Web Vital:", metric);

    // Send to analytics
    if ((window as any).gtag) {
      (window as any).gtag("event", metric.name, {
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value,
        ),
        event_category: "Web Vitals",
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
};
