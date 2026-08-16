// store/CartHydrator.tsx
"use client";

import { useEffect } from "react";
import { useCartStore } from "./cartStore";
import type { CartItem } from "@/types";

const STORAGE_KEY = "brew-bite-cart";

export function CartHydrator() {
  const setItems = useCartStore((s) => s.setItems);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        // Corrupted data — wipe it so the app doesn't crash on every load
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, [setItems]);

  return null;
}
