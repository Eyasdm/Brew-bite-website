import { useQuery } from "@tanstack/react-query";
import { fetchMenuItems } from "@/services/menuItems";
import { useMenuFilterStore } from "@/store/useMenuFilterStore";

export function useMenuItems() {
  const { category, subCategory } = useMenuFilterStore();

  return useQuery({
    queryKey: ["menu-items", category, subCategory],
    queryFn: () =>
      fetchMenuItems({
        category,
        subCategory: subCategory === "all" ? null : subCategory,
      }),
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
}
