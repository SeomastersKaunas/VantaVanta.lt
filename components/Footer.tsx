"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "@/contexts/LanguageContext";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-black text-white mt-[100px]">
      <div className="mx-auto max-w-[1440px]  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center min-h-[154px] justify-between gap-8 md:flex-row">
          {/* Left Column: Logo and Tagline */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="group">
              <Image
                src={"/logo-white.png"}
                alt="LOGOO"
                width={1000}
                height={1000}
                className="h-[75px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right Column: Contact and Copyright */}
          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <a
              href="tel:+37061912200"
              className="text-[21px] leading-[100%] tracking-[1.5px] text-white transition-colors hover:text-gray-300"
            >
              +370 619 12200
            </a>
            <p className="mt-3 text-[10px] leading-[100%]  uppercase text-gray-500">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
