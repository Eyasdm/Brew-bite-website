"use client";

import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useCreateOrder() {
  const router = useRouter();

  const items = useCartStore((s) => s.items);
  const totalPrice = useCartStore((s) => s.totalPrice());
  const clearCart = useCartStore((s) => s.clearCart);

  const mutation = useMutation({
    mutationFn: async ({ customerName, phone, orderType, notes }) => {
      if (!items.length) {
        throw new Error("Your cart is empty");
      }

      // 1️⃣ Insert order
      const { data: order, error } = await supabase
        .from("orders")
        .insert({
          customer_name: customerName,
          customer_phone: phone || null,
          type: orderType,
          source: "online",
          status: "pending",
          total_price: totalPrice,
          notes: notes || null,
        })
        .select("id, order_number")
        .single();

      if (error) throw error;

      // 2️⃣ Insert order items
      const orderItems = items.map((item) => ({
        order_id: order.id,
        menu_item_id: item.id,
        quantity: item.quantity,
        item_price: item.price,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      return order;
    },

    // ✅ Success
    onSuccess: (order) => {
      clearCart();

      toast.success(`Order ${order.order_number} placed successfully ☕`);

      router.push(`/order/success?order=${order.order_number}`);
    },

    // ❌ Error
    onError: (error) => {
      toast.error(error?.message || "Something went wrong. Please try again.");
    },
  });

  return {
    placeOrder: mutation.mutate,
    isLoading: mutation.isPending,
  };
}
