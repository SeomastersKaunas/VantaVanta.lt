import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const dynamic = "force-dynamic";

const SITE_URL = "https://www.vantavanta.lt";

const productQuery = `*[_type == "product" && (
  slug.lt.current == $slug || 
  slug.en.current == $slug || 
  slug.ru.current == $slug || 
  slug.pl.current == $slug || 
  slug.de.current == $slug
)][0]{
  _id,
  title,
  subTitle,
  slug,
  mainImage,
  gallery,
  category,
  cardContent,
  content
}`;

// Extract plain text from Sanity Portable Text blocks (first ~160 chars).
function portableTextToPlain(blocks: any): string {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .filter((b: any) => b?._type === "block")
    .map((b: any) =>
      (b.children || [])
        .filter((c: any) => c?._type === "span" && typeof c.text === "string")
        .map((c: any) => c.text)
        .join("")
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  let product: any = null;
  try {
    product = await client.fetch(productQuery, { slug });
  } catch {
    product = null;
  }

  if (!product) {
    return {
      title: "Vanta | VantaVanta",
      description:
        "Pirties vantos – beržo, ąžuolo, kanadinio ąžuolo. Rankų darbo, natūraliai džiovintos.",
    };
  }

  const ltTitle: string = product.title?.lt || "Vanta";
  const ltSubtitle: string = product.subTitle?.lt || "";
  const cardText = portableTextToPlain(product.cardContent?.lt);
  const description =
    (cardText || `${ltTitle} – rankų darbo pirties vanta, natūraliai džiovinta. ${ltSubtitle}`)
      .slice(0, 158)
      .trim();

  const ltSlug: string = product.slug?.lt?.current || slug;
  const canonical = `${SITE_URL}/produktai/${ltSlug}`;

  let ogImage: string | undefined;
  try {
    if (product.mainImage) {
      ogImage = urlFor(product.mainImage)?.width(1200).height(630).url();
    }
  } catch {
    ogImage = undefined;
  }

  return {
    title: `${ltTitle} | VantaVanta`,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${ltTitle} | VantaVanta`,
      description,
      siteName: "VantaVanta",
      locale: "lt_LT",
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: ltTitle }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${ltTitle} | VantaVanta`,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await client.fetch(
    productQuery,
    {
      slug,
    },
    { next: { revalidate: 0 } }
  );

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
