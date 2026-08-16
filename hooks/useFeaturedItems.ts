import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedItems } from "@/services/menuItems";
import type { FeaturedMenuItem } from "@/types/db";

export function useFeaturedItems() {
  return useQuery<FeaturedMenuItem[], Error>({
    queryKey: ["featured-items"],
    queryFn: fetchFeaturedItems,
    staleTime: 1000 * 60 * 5, // 5 minutes — homepage data changes rarely
  });
}
