import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gms-lee-builders.vercel.app/sitemap.xml",
    host: "https://gms-lee-builders.vercel.app",
  };
}