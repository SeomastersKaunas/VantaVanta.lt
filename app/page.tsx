import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import StorySection from "@/components/StorySection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProductShowcase />
      <StorySection />
      <CtaSection />
    </div>
  );
}
