"use client";

import { Minus, Plus } from "lucide-react";
import { QtyButton } from "./QtyButton";
import { useCartStore } from "@/store/cartStore";

export function CartItem({ id, image_url, name, price, quantity }) {
  const addItem = useCartStore((s) => s.addItem);
  const decreaseItem = useCartStore((s) => s.decreaseItem);

  if (quantity === 0) return null;

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
          <img
            src={image_url}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">${Number(price).toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <QtyButton onClick={() => decreaseItem(id)}>
          <Minus size={14} />
        </QtyButton>

        <span className="w-6 text-center font-medium">{quantity}</span>

        <QtyButton onClick={() => addItem({ id, image_url, name, price })}>
          <Plus size={14} />
        </QtyButton>
      </div>
    </div>
  );
}

export function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm text-gray-600">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
