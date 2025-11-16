"use client";

import Image from "next/image";
import { useTranslations } from "@/contexts/LanguageContext";
import { useState } from "react";
import QuoteModal from "./QuoteModal";

const CtaSection = () => {
  const t = useTranslations();
  const [formModal, setFormModal] = useState(false);

  return (
    <>
      <section className="relative max-w-[1440px] mx-auto px-8 h-min">
        <div className=" relative w-full h-min  py-[20px] md:py-[76px] px-[20px] md:px-[50px] lg:py-[60px] lg:px-[90px] w-full">
          <div className="absolute inset-0 z-0">
            <Image
              src="/cta-bg.avif"
              alt="Warm interior of a traditional wooden sauna"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="relative z-10">
            <div className="">
              <h2 className="text-[35px] max-w-[650px] lg:max-w-[550px] font-medium text-white  leading-[100%] tracking-[-1.2px]">
                {t("cta.title")}
              </h2>
              <p className="mt-5 lg:mt-[30px] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] tracking-[-0.95px] font-light text-white max-w-[550px] lg:max-w-[650px]">
                {t("cta.paragraph")}
              </p>
              <div className="mt-5 lg:mt-[30px]">
                <button
                  onClick={() => {
                    setFormModal(true);
                  }}
                  className="group flex cursor-pointer items-center justify-center gap-[60px] lg:gap-[90px] leading-[1] bg-[#0F543F] px-[25px] md:px-[30px] py-[18px] md:py-[22px] text-[26px] font-medium -tracking-[1.2px] text-white transition-colors hover:bg-[#0d5741]"
                >
                  <span>{t("cta.button")}</span>

                  <img
                    src="/arr.svg"
                    alt=""
                    className="transition-transform group-hover:translate-x-1 h-[16px] md:h-[22px] object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteModal isOpen={formModal} onClose={() => setFormModal(false)} />
    </>
  );
};

export default CtaSection;
