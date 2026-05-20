import { supabase } from "@/lib/supabase";

export async function fetchMenuItems({ category, subCategory }) {
  let query = supabase.from("menu_items").select("*").eq("is_available", true);

  if (category) {
    query = query.eq("category", category);
  }

  if (subCategory) {
    query = query.eq("sub_category", subCategory);
  }

  const { data, error } = await query.order("created_at", {
    ascending: true,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

/**
 * Fetches featured menu items for the homepage.
 * Prefers items with is_featured = true; falls back to the first 4 available
 * drinks if no featured flag exists on the table yet.
 */
export async function fetchFeaturedItems() {
  // Try featured items first
  const { data: featured, error: featuredError } = await supabase
    .from("menu_items")
    .select("id, name, price, image_url, category")
    .eq("is_available", true)
    .eq("is_featured", true)
    .limit(4);

  if (!featuredError && featured && featured.length > 0) {
    return featured;
  }

  // Fallback: first 4 available drink items
  const { data: fallback, error: fallbackError } = await supabase
    .from("menu_items")
    .select("id, name, price, image_url, category")
    .eq("is_available", true)
    .eq("category", "drink")
    .order("created_at", { ascending: true })
    .limit(4);

  if (fallbackError) throw new Error(fallbackError.message);

  return fallback ?? [];
}
