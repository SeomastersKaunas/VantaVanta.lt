"use client";

import ProductImageGallery from "@/components/ProductImageGallery";
import { useLanguage, useTranslations } from "@/contexts/LanguageContext";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useState } from "react";
import QuoteModal from "./QuoteModal";

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-inter mb-3 text-[16px] font-[500] leading-[1.5em]">{children}</p>
    ),
    h3: ({ children }) => (
      <h3 className="font-inter mt-6 mb-2 text-lg font-bold ">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="font-inter mb-4 list-disc list-inside space-y-0.5 pl-2 text-gray-900">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="font-inter mb-4 list-decimal list-inside space-y-0.5 pl-2 text-gray-900">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-800">{children}</strong>
    ),
  },
};

export default function ProductDetails({ product }: { product: any }) {
  const { locale } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const title = product.title?.[locale] || "No Title";
  const subTitle = product.subTitle?.[locale];
  const cardContent = product.cardContent?.[locale];
  const mainContent = product.content?.[locale];

  const galleryImages = [product.mainImage, ...(product.gallery || [])];
  const t = useTranslations();

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-[30px] sm:px-6 sm:py-[30px] sm:pb-0 lg:grid lg:grid-cols-2 lg:gap-x-[50px] lg:px-8">
          <ProductImageGallery images={galleryImages} productName={title} />

          <div className="pt-10 lg:mt-0">
            <h1 className="text-3xl font-[700] leading-[100%] tracking-[-2px] sm:text-[40px]">
              {title}
            </h1>
            {subTitle && (
              <p className="mt-[13px] leading-[100%] text-[16px] text-gray-500">
                {subTitle}
              </p>
            )}

            {cardContent && (
              <div className="mt-6 prose max-w-none border border-black bg-[#E4D7CC] p-[25px] text-[14px] leading-[29px]  tracking-[-0.7px]">
                <PortableText
                  value={cardContent}
                  components={portableTextComponents}
                />
              </div>
            )}

            <div className="mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex cursor-pointer items-center justify-between gap-x-6 bg-[#0F543F] px-8 py-4 text-[26px] font-medium -tracking-[1.2px] text-white transition-colors hover:bg-[#0d5741] max-w-[471px] w-full "
              >
                <span>{t("cta.button")}</span>
                {/* <ArrowRight
                  className="w-12 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                /> */}
                <img
                  src="/arr.svg"
                  alt=""
                  className="transition-transform group-hover:translate-x-1 h-[22px] object-contain"
                />
              </button>
            </div>

            {mainContent && (
              <div className="mt-10 max-w-none">
                <PortableText
                  value={mainContent}
                  components={portableTextComponents}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
