import { create } from "zustand";
import type { MenuCategory, MenuSubCategory } from "@/types";

interface MenuFilterState {
  category: MenuCategory;
  subCategory: MenuSubCategory | "all";
  search: string;

  setCategory: (category: MenuCategory) => void;
  setSubCategory: (subCategory: MenuSubCategory | "all") => void;
  setSearch: (search: string) => void;
}

export const useMenuFilterStore = create<MenuFilterState>()((set) => ({
  category: "drink",
  subCategory: "all",
  search: "",

  setCategory: (category) =>
    set({
      category,
      subCategory: "all",
      search: "",
    }),

  setSubCategory: (subCategory) => set({ subCategory }),

  setSearch: (search) => set({ search }),
}));
