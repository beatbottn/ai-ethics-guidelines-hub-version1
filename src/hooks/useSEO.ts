import { useEffect } from "react";

const SITE_URL = "https://aiethicsuxr.org";

interface SEOProps {
  title: string;
  description: string;
  /** Path including leading slash, e.g. "/about". Defaults to current location.pathname */
  path?: string;
  /** Optional JSON-LD object to inject as application/ld+json */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const useSEO = ({ title, description, path, jsonLd }: SEOProps) => {
  useEffect(() => {
    const route = path ?? window.location.pathname;
    const canonicalUrl = `${SITE_URL}${route === "/" ? "/" : route.replace(/\/$/, "")}`;

    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", "index, follow");

    // OG + Twitter
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    // Canonical link
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // JSON-LD (per-route). Tag with data-seo so we can clean up on route change.
    document.head.querySelectorAll('script[type="application/ld+json"][data-seo="route"]').forEach((n) => n.remove());
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "route");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, JSON.stringify(jsonLd)]);
};
