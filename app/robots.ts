import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://brewbite.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cart", "/order/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
