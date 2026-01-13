"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { QtyButton } from "./QtyButton";

export default function MenuCard({ item }) {
  const addItem = useCartStore((s) => s.addItem);
  const decreaseItem = useCartStore((s) => s.decreaseItem);
  const qty = useCartStore((s) => s.getItemQty(item.id));

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-4 flex flex-col">
        {/* Image */}
        <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-100">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="font-semibold text-sm">{item.name}</h3>

        {/* Description */}
        <p className="text-xs text-gray-500 mt-1 line-clamp-2 min-h-[32px]">
          {item.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold text-sm">${item.price}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700">
            Available
          </span>
        </div>

        {/* Actions */}
        <div className="mt-3 space-y-2">
          {qty === 0 ? (
            <Button
              onClick={() => addItem(item)}
              className="w-full rounded-full bg-orange-500 hover:bg-orange-600"
            >
              Add to Cart
            </Button>
          ) : (
            <>
              {/* Quantity controls */}
              <div className="flex items-center justify-center gap-3">
                <QtyButton onClick={() => decreaseItem(item.id)}>
                  <Minus size={14} />
                </QtyButton>

                <span className="w-6 text-center text-sm font-medium">
                  {qty}
                </span>

                <QtyButton onClick={() => addItem(item)}>
                  <Plus size={14} />
                </QtyButton>
              </div>

              {/* View cart */}
              <Button
                variant="outline"
                className="w-full rounded-full flex items-center gap-2"
                asChild
              >
                <a href="/cart">
                  <ShoppingCart size={16} />
                  View Cart
                </a>
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
