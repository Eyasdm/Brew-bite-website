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

// Fetches first 4 available drink items for the homepage
export async function fetchFeaturedItems() {
  const { data, error } = await supabase
    .from("menu_items")
    .select("id, name, price, image_url, category")
    .eq("is_available", true)
    .eq("category", "drink")
    .order("created_at", { ascending: true })
    .limit(4);

  if (error) throw new Error(error.message);

  return data ?? [];
}
