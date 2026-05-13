import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const SITE_URL = "https://www.vantavanta.lt";

type ProductSlug = {
  slug: {
    lt?: { current?: string };
    en?: { current?: string };
  };
  _updatedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  let products: ProductSlug[] = [];
  try {
    products = await client.fetch<ProductSlug[]>(
      `*[_type == "product" && defined(slug.lt.current)]{ slug, _updatedAt }`
    );
  } catch {
    products = [];
  }

  const productRoutes: MetadataRoute.Sitemap = products
    .map((p) => p.slug?.lt?.current)
    .filter((s): s is string => Boolean(s))
    .map((slug, i) => ({
      url: `${SITE_URL}/produktai/${slug}`,
      lastModified: products[i]?._updatedAt
        ? new Date(products[i]._updatedAt as string)
        : now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticRoutes, ...productRoutes];
}
