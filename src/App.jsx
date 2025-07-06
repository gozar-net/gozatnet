import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VendorList from "./components/VendorList";
import VendorForm from "./components/VendorForm";

function App() {
  const { i18n } = useTranslation();
  return (
    <div dir={i18n.language === "fa" ? "rtl" : "ltr"} className="bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      <VendorList />
      <VendorForm />
    </div>
  );
}

export default App;
