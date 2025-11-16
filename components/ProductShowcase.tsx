"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const ProductCard = ({ product }: { product: any }) => {
  const { locale } = useLanguage();

  const title = product.title?.[locale] || "No title";
  const category = product.category?.[locale] || "No category";
  const slug = product.slug?.[locale]?.current || "";

  return (
    <Link
      href={`/products/${slug}`}
      className="group flex flex-col items-center text-center"
    >
      <div className="relative h-[210px] aspect-square! w-full bg-[#F2F2F2] p-4 flex items-center justify-center group transition-colors group-hover:bg-neutral-200">
        <Image
          src={urlFor(product.mainImage)?.url()}
          alt={title}
          width={1000}
          height={1000}
          className="object-contain w-[70%] aspect-square! h-auto transition-all duration-300 ease-in-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5">
        <p className="text-[13px] font-light tracking-[1.6px] italic uppercase">
          {category}
        </p>
        <p className="mt-1 text-[15px] uppercase font-medium tracking-[1.5px] text-black">
          {title}
        </p>
      </div>
    </Link>
  );
};

const ProductShowcase = ({ products }: { products: any[] }) => {
  return (
    <section id="productShowcase" className="bg-white pt-[80px] md:pt-[100px] pb-[54px] md:pb-[62px]">
      <div className="mx-auto max-w-[1440px] flex justify-between flex-wrap md:flex-nowrap gap-8 px-2 lg:gap-[60px] lg:px-8">
        <div className="relative h-[277px] md:max-w-[415px] w-full shrink-0">
          <Image
            src="/vanta-showcase.jpg"
            alt="Man in a sauna holding a vanta whisk"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 472px"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-full sm:gap-[15px]">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
