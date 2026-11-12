import type { MetadataRoute } from "next"; import { SITE, SERVICES } from "@/lib/site"; import { getPosts } from "@/lib/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/gallery", "/blog", "/contact", "/get-a-quote", ...SERVICES.map((s) => `/services/${s.slug}`), ...getPosts().map((p) => `/blog/${p.slug}`)];
  return pages.map((p) => ({ url: SITE.url + p }));
}
