import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa");
  };
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">GozarNet</h1>
        </div>
        <button onClick={toggleLang} className="border px-3 py-1 rounded">
          {i18n.language === "fa" ? "EN" : "FA"}
        </button>
      </div>
    </header>
  );
}
