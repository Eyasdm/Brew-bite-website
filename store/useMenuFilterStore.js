import { create } from "zustand";

export const useMenuFilterStore = create((set) => ({
  category: "drink",
  subCategory: "all",

  // Set main category
  setCategory: (category) =>
    set({
      category,
      subCategory: "all", // reset to all when main category changes
    }),

  // Set sub category (coffee, non-coffee, all, etc.)
  setSubCategory: (subCategory) =>
    set({
      subCategory,
    }),
}));
