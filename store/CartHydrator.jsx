// store/CartHydrator.jsx
"use client";

import { useEffect } from "react";
import { useCartStore } from "./cartStore";

const STORAGE_KEY = "brew-bite-cart";

export function CartHydrator() {
  const setItems = useCartStore((s) => s.setItems);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, [setItems]);

  return null;
}
