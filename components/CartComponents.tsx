"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { QtyButton } from "./QtyButton";
import { useCartStore } from "@/store/cartStore";
import type { CartItem as CartItemData } from "@/types";

export function CartItem({ id, image_url, name, price, quantity }: CartItemData) {
  const addItem = useCartStore((s) => s.addItem);
  const decreaseItem = useCartStore((s) => s.decreaseItem);
  const removeItem = useCartStore((s) => s.removeItem);

  if (quantity === 0) return null;

  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-xl p-4 border border-gray-100">
      <div className="flex items-center gap-4">
        {/* Thumbnail */}
        <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
          {/* NOTE: image_url is nullable on MenuItemRow (a menu item can be added
              without an image), but this component — unlike MenuCard and
              FeaturedDrinksSection — never guarded against that; it always
              rendered <Image>. That's a pre-existing gap, not introduced here;
              left as-is per the type-only migration, just made explicit. */}
          <Image
            src={image_url!}
            alt={name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        {/* Name + price */}
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500 mt-0.5">
            ${Number(price).toFixed(2)} each
          </p>
          <p className="text-sm font-semibold text-gray-900 mt-0.5">
            ${(Number(price) * quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-end gap-3">
        {/* Remove button */}
        <button
          onClick={() => removeItem(id)}
          aria-label={`Remove ${name} from cart`}
          className="text-gray-300 hover:text-red-400 transition-colors"
        >
          <Trash2 size={16} />
        </button>

        {/* Qty stepper */}
        <div className="flex items-center gap-2">
          <QtyButton onClick={() => decreaseItem(id)}>
            <Minus size={14} />
          </QtyButton>

          <span className="w-6 text-center text-sm font-medium">
            {quantity}
          </span>

          <QtyButton onClick={() => addItem({ id, image_url, name, price })}>
            <Plus size={14} />
          </QtyButton>
        </div>
      </div>
    </div>
  );
}

interface SummaryRowProps {
  label: string;
  value: string;
}

export function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="flex justify-between text-sm text-gray-600">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
