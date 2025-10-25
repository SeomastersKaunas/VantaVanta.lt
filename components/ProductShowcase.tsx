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
      <div className="relative h-52 w-full bg-[#F2F2F2] p-4 flex items-center justify-center group transition-colors group-hover:bg-neutral-200 sm:h-60">
        <Image
          src={urlFor(product.mainImage)?.url()}
          alt={title}
          width={1000}
          height={1000}
          className="object-contain w-[90%] h-auto transition-all duration-300 ease-in-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5">
        <p className="text-[10px] font-light tracking-[1.6px] italic uppercase">
          {category}
        </p>
        <p className="mt-1 text-[14px] uppercase font-medium tracking-[1.5px] text-black">
          {title}
        </p>
      </div>
    </Link>
  );
};

const ProductShowcase = ({ products }: { products: any[] }) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] flex justify-between flex-wrap gap-8 px-4 lg:gap-24 lg:px-8">
        <div className="relative h-[315px] max-w-[472px] w-full shrink-0">
          <Image
            src="/vanta-showcase.jpg"
            alt="Man in a sauna holding a vanta whisk"
            fill
            className="object-cover brightness-[0.85]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 472px"

          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-serif text-8xl text-white sm:text-9xl">
              vanta
            </span>
            <span className="font-serif text-8xl text-white sm:text-9xl">
              vanta
            </span>
          </div>
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
