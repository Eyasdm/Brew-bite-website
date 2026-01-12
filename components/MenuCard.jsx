"use client";

import { useCartStore } from "@/store/cartStore";

export default function MenuCard({ item }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col">
      {/* Image */}
      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-100">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <h3 className="font-semibold text-sm">{item.name}</h3>

      {/* description min 2 lines */}
      <p className="text-xs text-gray-500 mt-1 line-clamp-2 min-h-[32px]">
        {item.description}
      </p>

      {/* Price & status */}
      <div className="flex items-center justify-between mt-2">
        <span className="font-semibold text-sm">${item.price}</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700">
          Available
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => addItem(item)}
        className="mt-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full py-2 text-sm transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
