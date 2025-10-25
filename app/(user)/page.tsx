import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import StorySection from "@/components/StorySection";
import { client } from "@/sanity/lib/client";

const productsQuery = `*[_type == "product"]{
  _id,
  "title": title,
  "slug": slug,
  "category": category,
  "mainImage": mainImage,
}`;

export default async function Home() {
  const products = await client.fetch(productsQuery);

  return (
    <div className="">
      <Hero />
      <ProductShowcase products={products} />
      <StorySection />
      <CtaSection />
    </div>
  );
}
