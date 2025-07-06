import React, { useState } from "react";

export default function VendorForm() {
  const [form, setForm] = useState({ name: "", price: "", speed: "", security: "", rating: "" });

  const handleSubmit = e => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("vendors") || "[]");
    localStorage.setItem("vendors", JSON.stringify([...existing, form]));
    alert("فروشنده جدید اضافه شد (ذخیره در LocalStorage)");
    setForm({ name: "", price: "", speed: "", security: "", rating: "" });
  };

  return (
    <section className="bg-white py-8 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">افزودن فروشنده جدید</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={form[key]}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
            className="border p-2 rounded"
            required
          />
        ))}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          ثبت فروشنده
        </button>
      </form>
    </section>
  );
}
