import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import StorySection from "@/components/StorySection";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

const productsQuery = `*[_type == "product"]{
  _id,
  title,
  subTitle,
  slug,
  category,
  mainImage,
}`;

export default async function Home() {
  const products = await client.fetch(
    productsQuery,
    {},
    { next: { revalidate: 0 } }
  );

  return (
    <div className="">
      <Hero />
      <ProductShowcase products={products} />
      <StorySection />
      <CtaSection />
    </div>
  );
}
