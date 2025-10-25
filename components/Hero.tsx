"use client";

import Image from "next/image";
import { useTranslations } from "@/contexts/LanguageContext";

const Hero = () => {
  const t = useTranslations();

  return (
    <section className="relative flex h-[60vh] min-h-[500px] w-full items-center justify-center text-white md:h-[85vh] md:min-h-[700px]">
      <div className="absolute inset-3 z-0 ">
        <Image
          src="/hero-bg.png"
          alt="A dark, lush forest with tall pine trees"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1140px] items-end pb-[100px]">
        <div className="flex flex-col items-start justify-center p-8 max-w-[450px]">
          <h1 className="text-[31px] tracking-[-1px] font-medium">
            {t("hero.title")}
            <span className="inline-block border-b-2 border-white leading-[1.05]">
              {t("hero.title_underline")}
            </span>
          </h1>

          <p className="mt-3 text-[18px] [word-spacing:3px] leading-[25px] font-light tracking-[-0.7px] text-white">
            {t("hero.subtitle")}
          </p>

          <button className="mt-8 bg-white px-8 py-3 h-[50px] text-center text-[11px] leading-1 font-medium tracking-[2px] flex items-center justify-center  text-black transition-colors hover:bg-gray-200  rounded-[3px] cursor-pointer uppercase">
            {t("hero.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
