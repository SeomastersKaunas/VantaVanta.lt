import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const SITE_URL = "https://www.vantavanta.lt";

const fallbackProductSlugs = [
  "berzo",
  "europinis-azuolas",
  "kanadietisko-azuolo",
];

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

  const productSlugs = products
    .map((product) => product.slug?.lt?.current)
    .filter((slug): slug is string => Boolean(slug));

  const slugs = productSlugs.length > 0 ? productSlugs : fallbackProductSlugs;

  const productRoutes: MetadataRoute.Sitemap = slugs.map((slug) => {
    const product = products.find((item) => item.slug?.lt?.current === slug);

    return {
      url: `${SITE_URL}/produktai/${slug}`,
      lastModified: product?._updatedAt
        ? new Date(product._updatedAt as string)
        : now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...productRoutes];
}
