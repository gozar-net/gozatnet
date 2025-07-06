import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="bg-blue-100 py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{t("hero.title")}</h2>
        <p className="mb-6">{t("hero.subtitle")}</p>
      </div>
    </section>
  );
}
