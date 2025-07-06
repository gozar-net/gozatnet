import React, { useEffect, useState } from "react";
import VendorCard from "./VendorCard";

export default function VendorList() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/vendors.json");
      const jsonVendors = await res.json();
      const localVendors = JSON.parse(localStorage.getItem("vendors") || "[]");
      setVendors([...jsonVendors, ...localVendors]);
    };
    fetchData();
  }, []);

  return (
    <section className="py-12 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">لیست فروشنده‌ها</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vendors.map((v, i) => (
          <VendorCard key={i} vendor={v} />
        ))}
      </div>
    </section>
  );
}
