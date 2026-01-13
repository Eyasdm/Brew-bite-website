import { supabase } from "@/lib/supabase";

export async function createOrder(order) {
  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
