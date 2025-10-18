"use client";

import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                "transition-all duration-300 text-sm px-3 py-1 rounded-full text-blue-100/80 md:hover:text-blue-400"
            )}
        >
            {language.toUpperCase()}
        </button>
    )
}
