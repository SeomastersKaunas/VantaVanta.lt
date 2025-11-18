"use client";

import Image from "next/image";
import { useTranslations } from "@/contexts/LanguageContext";

const Hero = () => {
  const t = useTranslations();

  return (
    <section className="relative flex h-[430px] w-full items-center justify-center text-white md:h-[700px] p-[12px] md:p-2">
      <div className="absolute inset-[12px] md:inset-2 z-0 ">
        <Image
          src="/hero-bg.png"
          alt="A dark, lush forest with tall pine trees"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1270px] items-center md:items-end md:pb-[90px] md:pl-[130px] pr-[15px]">
        <div className="flex flex-col items-start justify-center p-[16px] md:p-8 max-w-[460px]">
          <h1 className="text-[32px] tracking-[-1px] font-medium">
            {t("hero.title")}
            <br className="md:hidden h-0" />
            <span className="inline-block  text-[22px] md:text-[32px] md:translate-y-0 -translate-y-[7px] border-b-2 border-white leading-[1.05]">
              {t("hero.title_underline")}
            </span>
          </h1>

          <p
            dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }}
            className="mt-4 text-[15px] md:text-[18px] md:relative absolute bottom-[12px] md:bottom-auto md:right-auto pr-[12px] md:pr-0 leading-[12px] md:leading-[25px] font-light tracking-[-0.7px] text-white"
          ></p>

          <button className="mt-8 bg-white px-8 py-3 h-[50px] text-center text-[11px] leading-1 font-medium tracking-[2px] hidden md:flex items-center justify-center  text-black transition-colors hover:bg-gray-200  rounded-[3px] cursor-pointer uppercase">
            {t("hero.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
