"use client";

import Image from "next/image";
import { useTranslations } from "@/contexts/LanguageContext";

const CtaSection = () => {
  const t = useTranslations();

  return (
    <section className="relative max-w-[1440px] mx-auto px-4">
      <div className=" relative  py-[20px] md:py-[100px] px-[20px] md:px-[90px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-bg.jpg"
            alt="Warm interior of a traditional wooden sauna"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10">
          <div className="">
            <h2 className="text-[35px] max-w-[550px] font-medium text-white  leading-[100%] tracking-[-1.2px]">
              {t("cta.title")}
            </h2>
            <p className="mt-10 text-[19px] leading-[27px] tracking-[-0.95px] font-light text-white max-w-[720px]">
              {t("cta.paragraph")}
            </p>
            <div className="mt-10">
              <button className="group flex cursor-pointer items-center justify-between gap-x-6 bg-[#0F543F] px-[25px] md:px-[30px] py-[18px] md:py-[22px] text-[26px] font-medium -tracking-[1.2px] text-white transition-colors hover:bg-[#0d5741] max-w-[471px] w-full ">
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
  );
};

export default CtaSection;
