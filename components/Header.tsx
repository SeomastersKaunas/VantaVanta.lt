"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage, useTranslations } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations();
  const { locale, setLocale } = useLanguage();

  const handleLanguageChange = () => {
    const newLocale = locale === "lt" ? "en" : "lt";
    setLocale(newLocale);
  };

  const navLinks = [
    { href: "/vantos", key: "header.vantos" },
    { href: "/kokybe", key: "header.kokybe" },
    { href: "/kontaktai", key: "header.kontaktai" },
  ];

  return (
    <header className=" relative">
      <div className="mx-auto max-w-[1440px] py-5 sm:py-6 px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="cursor-pointer">
              <Image
                src={"/logo.jpg"}
                alt="LOGOO"
                width={1000}
                height={1000}
                className="h-[56px] md:h-[65px] w-auto object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-[16px] font-normal hover:text-black/70 transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>


          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={handleLanguageChange}
                className="flex items-center p-1.5 cursor-pointer rounded-[5px] hover:bg-gray-100 transition-colors"
                aria-label="Change language"
              >
                <img
                  src={locale === "lt" ? "/flag-one.png" : "/flag-two.webp"}
                  alt="Current language flag"
                  className="h-[15px] object-contain"
                />
              </button>
            </div>


            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>


      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
          <div className="space-y-1 px-4 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <button
                onClick={handleLanguageChange}
                className="flex w-full items-center space-x-3 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                <img
                  src={locale === "lt" ? "/flag-one.png" : "/flag-two.webp"}
                  alt="Switch language flag"
                  className="h-6 rounded-[2px] object-cover"
                />
                <span>{t("header.switchTo")}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
