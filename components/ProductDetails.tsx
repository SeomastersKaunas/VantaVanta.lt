"use client";

import { notFound } from "next/navigation";
import { Product } from "@/lib/products";
import ProductImageGallery from "@/components/ProductImageGallery";
import { useTranslations } from "@/contexts/LanguageContext";

export default function ProductDetails({ product }: { product: Product }) {
  const t = useTranslations();

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:px-8">
        {/* Column 1: Image Gallery */}
        <ProductImageGallery
          images={product.images}
          productName={t(product.nameKey)}
        />

        {/* Column 2: Product Details */}
        <div className="mt-10 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t(product.nameKey)}
          </h1>

          <div className="mt-8 space-y-6 border border-gray-300 bg-stone-100 p-6 text-base text-gray-700">
            <p>{t(product.descriptionKey)}</p>
            <p>{t(product.sessionsNoteKey)}</p>
          </div>

          <div className="mt-10">
            <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#1A4738] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#13352A] focus:outline-none focus:ring-2 focus:ring-[#1A4738] focus:ring-offset-2">
              {t("product_page.cta_button")}
            </button>
          </div>

          {/* Details Section */}
          <div className="mt-10 space-y-8">
            {/* Benefits */}
            <div>
              <h3 className="font-bold text-gray-900">
                {t(product.benefits.titleKey)}
              </h3>
              <ul
                role="list"
                className="mt-4 list-inside list-disc space-y-2 pl-2 text-gray-600"
              >
                {product.benefits.items.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-bold text-gray-900">
                {t(product.specifications.titleKey)}
              </h3>
              <div className="mt-4 space-y-2 text-gray-600">
                {product.specifications.items.map((item) => (
                  <p key={item.valueKey}>
                    <span className="font-medium text-gray-800">
                      {item.label}
                    </span>{" "}
                    {t(item.valueKey)}
                  </p>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div>
              <h3 className="font-bold text-gray-900">
                {t(product.materials.titleKey)}
              </h3>
              <div className="mt-4 space-y-2 text-gray-600">
                {product.materials.items.map((item) => (
                  <p key={item}>{t(item)}</p>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            {t(product.disclaimerKey)}
          </p>
        </div>
      </div>
    </div>
  );
}
