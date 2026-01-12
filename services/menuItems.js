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
