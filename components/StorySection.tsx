"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "@/contexts/LanguageContext";

const StorySection = () => {
  const t = useTranslations();

  return (
    <section className=" py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between gap-y-12 gap-x-24 px-4 lg:px-8">
        {/* Left Column: Image with Caption */}
        <figure className="flex flex-col shrink-0 ">
          <div className="relative aspect-square max-w-[472px] w-full shrink-0 ">
            <Image
              src="/story.png"
              alt={t("story.image_caption_line1")}
              width={1000}
              height={1000}
              className="object-cover w-full h-auto aspect-square"
            />
          </div>
          <figcaption className="bg-black h-[84px] w-full flex flex-col justify-center px-6 text-base leading-[23px] tracking-[-0.7px] text-white">
            <p>{t("story.image_caption_line1")}</p>
            <p className="font-light text-white/80 text-[14px]">
              {t("story.image_caption_line2")}
            </p>
          </figcaption>
        </figure>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[31px] font-medium tracking-[-1.2px] leading-1 ">
            vanta vanta<sup className="text-[14px]">&copy;</sup> istorija
          </h2>

          <div className="mt-6">
            <p className="tracking-[-1px] text-[18px] leading-[100%] font-medium text-black">
              {t("story.subtitle_line1")}
            </p>
            <p className="tracking-[-1px] text-[18px] leading-[100%] mt-[3px] font-bold italic text-black">
              {t("story.subtitle_line2")}
            </p>
          </div>

          <p
            dangerouslySetInnerHTML={{ __html: t("story.paragraph") }}
            className="mt-6 text-[19px] leading-[27px] tracking-[-0.95px] font-light "
          ></p>

          <div className="mt-8 border border-black bg-[#E4D7CC] p-6 px-8">
            <p className="text-[16px] font-medium leading-[24px] tracking-[-1px] ">
              {t("story.highlight_box")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
