"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage, useTranslations } from "@/contexts/LanguageContext";
import { Menu, X, Globe, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import QuoteModal from "./QuoteModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const t = useTranslations();
  const { setLocale } = useLanguage();

  const languages = [
    { code: "lt", label: "Lietuvių", flag: "/flag-one.png" },
    { code: "en", label: "English", flag: "/flag-two.webp" },
    { code: "ru", label: "Русский", flag: "/falg-ru.png" },
    { code: "pl", label: "Polski", flag: "/flag-pl.png" },
    { code: "de", label: "Deutsch", flag: "/flag-gr.png" },
  ];

  const handleLanguageChange = (newLocale: any) => {
    setLocale(newLocale);
    setIsLangDropdownOpen(false);
  };

  const navLinks = [
    { href: "/#productShowcase", key: "header.vantos" },
    { href: "/#kokybe", key: "header.kokybe" },
    {
      href: "#",
      key: "header.kontaktai",
      onClickAction: () => setIsOpenModal(true),
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langDropdownRef]);

  return (
    <>
      <header className=" relative">
        <div className="mx-auto max-w-[1270px] py-[20px] pb-[20px] px-[15px]">
          <div className="flex items-center justify-between md:justify-around h-[64px]">
            <div className="shrink-0">
              <Link href="/" className="cursor-pointer">
                <Image
                  src={"/logo.jpg"}
                  alt="LOGOO"
                  width={200}
                  height={200}
                  priority
                  className="h-[56px] md:h-[64px] w-auto object-contain"
                />
              </Link>
            </div>

            <nav className="hidden md:flex md:items-center md:space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={link.onClickAction ? link.onClickAction : () => {}}
                  className="text-[16px] font-normal hover:text-black/70 transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <a
                href="tel:+37061912200"
                aria-label="Skambinti +370 619 12200"
                className="flex items-center gap-1.5 md:gap-2 px-1.5 md:px-3 py-1.5 rounded-[5px] hover:bg-gray-100 transition-colors text-black whitespace-nowrap"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                <span className="text-[13px] md:text-[15px] font-medium tracking-[0.3px] md:tracking-[0.5px]">
                  +370 619 12200
                </span>
              </a>

              <div
                className="hidden md:flex items-center space-x-2 relative"
                ref={langDropdownRef}
              >
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-0.5 p-1.5 cursor-pointer rounded-[5px] hover:bg-gray-100 transition-colors"
                  aria-label="Change language"
                >
                  <Globe className="h-5 w-5 text-gray-600" />
                  <ChevronDown
                    className={`h-4 w-4 text-gray-600 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`${isLangDropdownOpen ? "w-32 h-auto" : "w-0 h-0 overflow-hidden"} absolute top-full right-0 mt-2  bg-white rounded-md shadow-lg z-50`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="flex items-center w-full cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src={lang.flag}
                        alt={`${lang.label} flag`}
                        className="h-4 w-6 mr-2 object-cover"
                      />
                      {lang.label}
                    </button>
                  ))}
                </div>
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
                  onClick={
                    link.onClickAction
                      ? () => {
                          setIsMenuOpen(false);
                          link.onClickAction();
                        }
                      : () => setIsMenuOpen(false)
                  }
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="relative" ref={langDropdownRef}>
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="flex w-full items-center space-x-3 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Globe className="h-6 w-6 text-gray-600" />
                    <span>{t("header.switchTo")}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-600 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isLangDropdownOpen && (
                    <div className="mt-2 w-full bg-white rounded-md shadow-lg z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            handleLanguageChange(lang.code);
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <img
                            src={lang.flag}
                            alt={`${lang.label} flag`}
                            className="h-4 w-6 mr-2 object-cover"
                          />
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <QuoteModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </>
  );
}
