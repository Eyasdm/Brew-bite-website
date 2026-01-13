"use client";

import { useState, useEffect } from "react";

export function useLocaleStorageState(initialState, key) {
  const [value, setValue] = useState(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }

    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key, hydrated]);

  return [value, setValue, hydrated];
}
