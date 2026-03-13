import { MetadataRoute } from "next";
import { envAppConfig as env } from "@/packages/env/env.app";

const baseUrl = `https://${env.APP_HOST}`;

/**
 * Static application routes
 * Add all marketing pages here
 */
const staticRoutes = ["", "/pricing", "/features", "/docs", "/contact"];

/**
 * Sitemap generator
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
