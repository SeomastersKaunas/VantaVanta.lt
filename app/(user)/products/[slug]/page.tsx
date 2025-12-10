import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

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

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
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
