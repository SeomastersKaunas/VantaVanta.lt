"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "@/contexts/LanguageContext";
import Link from "next/link";

type Product = {
  categoryKey: string;
  nameKey: string;
  imageUrl: string;
};

const products: Product[] = [
  {
    categoryKey: "products.quercus_category",
    nameKey: "products.quercus_name",
    imageUrl: "/product-one.png",
  },
  {
    categoryKey: "products.quercus_rubra_category",
    nameKey: "products.quercus_rubra_name",
    imageUrl: "/product-two.png",
  },
  {
    categoryKey: "products.betula_category",
    nameKey: "products.betula_name",
    imageUrl: "/product-three.png",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const t = useTranslations();
  return (
    <Link href={`/products/oak-vanta`} className="group flex flex-col items-center text-center">
      <div className="relative h-52 w-full bg-[#F2F2F2] p-4 flex items-center justify-center group transition-colors group-hover:bg-neutral-200 sm:h-60">
        <Image
          src={product.imageUrl}
          alt={t(product.nameKey)}
          width={1000}
          height={1000}
          className="object-contain w-[90%] h-auto transition-all duration-300 ease-in-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5">
        <p className="text-[10px] font-light tracking-[1.6px] italic uppercase">
          {t(product.categoryKey)}
        </p>
        <p className="mt-1 text-[14px] uppercase font-medium tracking-[1.5px] text-black">
          {t(product.nameKey)}
        </p>
      </div>
    </Link>
  );
};

const ProductShowcase = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] flex justify-between gap-8 px-4 lg:gap-24 lg:px-8">
        {/* Left Column: Image with Text Overlay */}
        <div className="relative h-[315px] max-w-[472px] w-full shrink-0">
          <Image
            src="/vanta-showcase.jpg"
            alt="Man in a sauna holding a vanta whisk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* The font here is a serif font like Times New Roman.
                You can add a custom font or use a Tailwind default. */}
            <span className="font-serif text-8xl text-white sm:text-9xl">
              vanta
            </span>
            <span className="font-serif text-8xl text-white sm:text-9xl">
              vanta
            </span>
          </div>
        </div>

        {/* Right Column: Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-full sm:gap-[15px]">
          {products.map((product) => (
            <ProductCard key={product.nameKey} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
