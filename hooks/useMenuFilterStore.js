import { create } from "zustand";

export const useMenuFilterStore = create((set) => ({
  category: "drink",
  subCategory: "all",
  search: "",

  // Set main category and reset dependent filters
  setCategory: (category) =>
    set({
      category,
      subCategory: "all",
      search: "",
    }),

  // Set sub category (coffee, non-coffee, all, etc.)
  setSubCategory: (subCategory) => set({ subCategory }),

  // Set search query
  setSearch: (search) => set({ search }),
}));