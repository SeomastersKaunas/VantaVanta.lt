"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "@/contexts/LanguageContext";
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CustomCheckbox = ({
    id,
    name,
    label,
    checked,
    onChange,
}: {
    id: string;
    name: string;
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <label htmlFor={id} className="flex cursor-pointer items-center">
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />

            <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-black transition-colors md:h-10 md:w-10 ${checked ? "border-[#0F543F] bg-[#0F543F]" : "bg-white"}`}
            >
                <Check
                    className={`h-5 w-5 text-white transition-opacity md:h-6 md:w-6 ${checked ? "opacity-100" : "opacity-0"}`}
                    strokeWidth={3}
                />
            </div>
            <span className="ml-3 text-[14px] leading-tight text-gray-800 md:ml-4 md:text-[17px]">
                {label}
            </span>
        </label>
    );
};

const QuoteModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const t = useTranslations();
    const modalRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        whisks: { oak: false, canadian: false, birch: false },
        quantity: "50",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            whisks: { ...prev.whisks, [name]: checked },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        onClose();
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fade-in"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-lg rounded-3xl bg-white p-6 py-10 md:py-14 shadow-xl md:max-w-[716px] md:rounded-[39px] md:p-14"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-transform hover:scale-110 md:-top-6 md:-right-6 md:h-16 md:w-16"
                    aria-label="Close form"
                >
                    <X className="h-6 w-6 md:h-8 md:w-8" />
                </button>

                <div className="mb-6 md:mb-8">
                    <Link href="/" className="group">
                        <Image
                            src="/logo.jpg"
                            alt="Vanta Vanta Logo"
                            width={170}
                            height={65}
                            className="h-[50px] w-auto object-contain md:h-[65px]"
                        />
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-[14px] font-medium text-gray-800 md:text-[17px]"
                        >
                            {t("quote_form.name_label")}{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block h-12 w-full rounded-lg border border-black bg-transparent px-4 outline-none transition-colors focus:border-2 focus:border-[#0F543F] md:mt-[10px] md:h-[63px] md:rounded-[10px]"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact"
                            className="block text-[14px] font-medium text-gray-800 md:text-[17px]"
                        >
                            {t("quote_form.contact_label")}{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="contact"
                            id="contact"
                            required
                            value={formData.contact}
                            onChange={handleChange}
                            className="mt-1 block h-12 w-full rounded-lg border border-black bg-transparent px-4 outline-none transition-colors focus:border-2 focus:border-[#0F543F] md:mt-[10px] md:h-[63px] md:rounded-[10px]"
                        />
                    </div>

                    <div>
                        <label className="block text-[14px] font-medium text-gray-800 md:text-[17px]">
                            {t("quote_form.whisk_label")}{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-3 space-y-3 md:mt-4 md:space-y-4">
                            <CustomCheckbox
                                id="oak"
                                name="oak"
                                label={t("quote_form.whisk_option_oak")}
                                checked={formData.whisks.oak}
                                onChange={handleCheckboxChange}
                            />
                            <CustomCheckbox
                                id="canadian"
                                name="canadian"
                                label={t("quote_form.whisk_option_canadian")}
                                checked={formData.whisks.canadian}
                                onChange={handleCheckboxChange}
                            />
                            <CustomCheckbox
                                id="birch"
                                name="birch"
                                label={t("quote_form.whisk_option_birch")}
                                checked={formData.whisks.birch}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="quantity"
                            className="block text-[14px] font-medium text-gray-800 md:text-[17px]"
                        >
                            {t("quote_form.quantity_label")}{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="mt-1 block h-12 w-full rounded-lg border border-black bg-transparent px-4 outline-none transition-colors focus:border-2 focus:border-[#0F543F] md:mt-[10px] md:h-[63px] md:rounded-[10px]"
                        >
                            <option value="50">{t("quote_form.quantity_option_50")}</option>
                            <option value="100">{t("quote_form.quantity_option_100")}</option>
                            <option value="200">{t("quote_form.quantity_option_200")}</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="group flex w-full cursor-pointer items-center justify-between rounded-lg bg-[#0F543F] px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-[#0d5741] md:rounded-md md:px-8 md:py-4 md:text-[26px] md:-tracking-[1.2px]"
                    >
                        <span>{t("quote_form.submit_button")}</span>
                        <ArrowRight
                            className="h-6 w-6 transition-transform group-hover:translate-x-1 md:h-10 md:w-10"
                            aria-hidden="true"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default QuoteModal;
