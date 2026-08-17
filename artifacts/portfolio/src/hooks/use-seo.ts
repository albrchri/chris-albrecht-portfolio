import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  /** Set to true to add <meta name="robots" content="noindex"> on this page. */
  noindex?: boolean;
}

export function useSeo({ title, description, noindex }: SeoProps) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // Manage robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", "noindex");
    } else {
      // Remove any noindex tag when navigating to a page that doesn't need it
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }
  }, [title, description, noindex]);
}
