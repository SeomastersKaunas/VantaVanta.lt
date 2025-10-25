import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
