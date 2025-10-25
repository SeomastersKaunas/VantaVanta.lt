"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const FullScreenModal = ({
  src,
  alt,
  onClose,
}: {
  src: string;
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white transition-opacity hover:opacity-75"
        aria-label="Close image viewer"
      >
        <X size={32} />
      </button>

      {/* The image container. We stop propagation so clicking the image doesn't close the modal. */}
      <div
        className="relative h-full w-full max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
};

const ProductImageGallery = ({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) => {
  const [mainImage, ...thumbnails] = images;
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main Image - now clickable */}
        <div
          className="relative aspect-square w-full cursor-pointer bg-gray-100 p-4 transition-transform hover:scale-105"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={selectedImage}
            alt={`Main image of ${productName}`}
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-4">
          {thumbnails.map((thumb, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(thumb)}
              className={`relative aspect-square w-full transition-opacity hover:opacity-80 ${
                selectedImage === thumb
                  ? "ring-2 ring-gray-900 ring-offset-2"
                  : ""
              }`}
            >
              <Image
                src={thumb}
                alt={`Thumbnail ${index + 1} of ${productName}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* The Modal is rendered here when isModalOpen is true */}
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
