"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Image as SanityImage } from "sanity";
import { urlFor } from "@/sanity/lib/image";

const FullScreenModal = ({
  src,
  alt,
  onClose,
}: {
  src: SanityImage;
  alt: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 cursor-pointer z-50 text-white transition-opacity hover:opacity-75"
        aria-label="Close image viewer"
      >
        <X size={32} />
      </button>
      <div
        className="relative h-full w-full max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={urlFor(src).url()}
          alt={alt}
          fill
          className="object-contain "
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"

        />
      </div>
    </div>
  );
};

const ProductImageGallery = ({
  images,
  productName,
}: {
  images: SanityImage[];
  productName: string;
}) => {
  if (!images || images.length === 0) {
    return (
      <div className="aspect-square w-full bg-[#F2F2F2] flex items-center justify-center">
        <p>No Image Available</p>
      </div>
    );
  }

  const [mainImage, ...thumbnails] = images;
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          className="relative aspect-square w-full flex items-center justify-center cursor-pointer rounded-[24px] bg-[#F2F2F2] p-4 "
          onClick={() => {
            setIsModalOpen(true);
            setSelectedImage(mainImage);
          }}
        >
          <Image
            src={urlFor(mainImage).url()}
            alt={`Main image of ${productName}`}
            fill
            priority
            className="object-contain transition-transform hover:scale-105 max-w-[85%] rounded-[24px] w-full mx-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"

          />
        </div>

        {thumbnails.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {thumbnails.map((thumb, index) => (
              <button
                key={thumb._key || (thumb as any).asset._ref || index}
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedImage(thumb);
                }}
                className={`relative aspect-square w-full transition-opacity hover:opacity-80`}
              >
                <Image
                  src={urlFor(thumb).url()}
                  alt={`Thumbnail ${index + 1} of ${productName}`}
                  fill
                  className="object-cover rounded-[24px]"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 150px"

                />
              </button>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <FullScreenModal
          src={selectedImage}
          alt={`Full screen view of ${productName}`}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductImageGallery;
