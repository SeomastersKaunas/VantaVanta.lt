"use client";

import Image from "next/image";
import { useTranslations } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  const t = useTranslations();

  return (
    <section className="relative max-w-[1440px] mx-auto px-4 lg:px-8">
      <div className=" relative  py-12 sm:py-20 w-full">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-bg.jpg"
            alt="Warm interior of a traditional wooden sauna"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-[100px]">
          <div className="">
            <h2 className="text-[35px] max-w-[450px] font-medium text-white  leading-[100%] tracking-[-1.2px]">
              {t("cta.title")}
            </h2>
            <p className="mt-10 text-[19px] leading-[27px] tracking-[-0.95px] font-light text-white max-w-[620px]">
              {t("cta.paragraph")}
            </p>
            <div className="mt-10">
              <button className="group flex cursor-pointer items-center justify-between gap-x-6 bg-[#0F543F] px-8 py-4 text-[26px] font-medium -tracking-[1.2px] text-white transition-colors hover:bg-[#0d5741] max-w-[471px] w-full ">
                <span>{t("cta.button")}</span>
                <ArrowRight
                  className="w-12 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
