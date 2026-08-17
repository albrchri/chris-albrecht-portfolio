import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  /** Set to true to add <meta name="robots" content="noindex"> on this page. */
  noindex?: boolean;
}

function setMeta(selector: string, attrName: string, attrValue: string, value: string) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, noindex }: SeoProps) {
  useEffect(() => {
    // Primary
    document.title = title;
    const canonical = window.location.href.split("?")[0].split("#")[0];

    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
    }

    // Canonical URL
    if (!noindex) {
      setCanonical(canonical);
    } else {
      // Remove canonical for noindex pages
      document.querySelector('link[rel="canonical"]')?.remove();
    }

    // Open Graph
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    if (description) {
      setMeta('meta[property="og:description"]', "property", "og:description", description);
    }

    // Twitter Card
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:url"]', "name", "twitter:url", canonical);
    if (description) {
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }

    // Robots meta tag
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
