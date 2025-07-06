import React from "react";

export default function VendorCard({ vendor }) {
  return (
    <div className="bg-white rounded shadow p-4 border hover:shadow-lg">
      <h3 className="text-lg font-bold mb-2">{vendor.name}</h3>
      <p>قیمت: {vendor.price} تومان</p>
      <p>سرعت: {vendor.speed} ⭐</p>
      <p>امنیت: {vendor.security} 🔒</p>
      <p>امتیاز کاربران: {vendor.rating} ⭐</p>
    </div>
  );
}
