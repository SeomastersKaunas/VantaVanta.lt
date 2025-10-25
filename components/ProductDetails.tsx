"use client";

import ProductImageGallery from "@/components/ProductImageGallery";
import { useLanguage, useTranslations } from "@/contexts/LanguageContext";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import QuoteModal from "./QuoteModal";


const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-3 text-[16px] leading-[29px]">{children}</p>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 text-lg font-bold ">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-disc list-inside space-y-2 pl-2 text-gray-600">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-decimal list-inside space-y-2 pl-2 text-gray-600">
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
}


export default function ProductDetails({ product }: { product: any }) {
  const { locale } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const title = product.title?.[locale] || "No Title";
  const cardContent = product.cardContent?.[locale];
  const mainContent = product.content?.[locale];

  const galleryImages = [product.mainImage, ...(product.gallery || [])];
  const t = useTranslations();


  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24 sm:pb-0 lg:grid lg:grid-cols-2 lg:gap-x-24 lg:px-8">
          <ProductImageGallery images={galleryImages} productName={title} />

          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-medium leading-[100%] tracking-[-2px] sm:text-[56px]">
              {title}
            </h1>

            {cardContent && (
              <div className="mt-10 prose max-w-none border border-black bg-[#E4D7CC] p-6 text-[14px] leading-[29px]  tracking-[-0.7px]">
                <PortableText value={cardContent}
                  components={portableTextComponents}
                />
              </div>
            )}

            <div className="mt-8">

              <button
                onClick={() => setIsModalOpen(true)}

                className="group flex cursor-pointer items-center justify-between gap-x-6 bg-[#0F543F] px-8 py-4 text-[26px] font-medium -tracking-[1.2px] text-white transition-colors hover:bg-[#0d5741] max-w-[471px] w-full ">
                <span>{t("cta.button")}</span>
                <ArrowRight
                  className="w-12 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
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
