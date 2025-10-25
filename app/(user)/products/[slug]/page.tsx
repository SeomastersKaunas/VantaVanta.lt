import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { client } from "@/sanity/lib/client";

const productQuery = `*[_type == "product" && (slug.lt.current == $slug || slug.en.current == $slug)][0]{
  _id,
  title,
  slug,
  mainImage,
  gallery,
  category,
  cardContent,
  content
}`;

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const product = await client.fetch(productQuery, {
    slug,
  });

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
