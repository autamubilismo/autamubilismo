import { useEffect } from "react";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") el.setAttribute(k, v);
  });
}

export function useSeoMeta({ title, description, image, url, type = "article" }) {
  useEffect(() => {
    if (!title) return;

    const pageUrl = url || (typeof window !== "undefined" ? window.location.href : "");

    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description || "" });

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description || "",
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: pageUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image || "" });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description || "",
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image || "" });
  }, [title, description, image, url, type]);
}
