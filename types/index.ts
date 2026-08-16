import type { MenuCategory, MenuSubCategory } from "./db";

export type { MenuCategory, MenuSubCategory };

/** An item as stored in the cart (Zustand `cartStore`). */
export interface CartItem {
  id: string;
  image_url: string | null;
  name: string;
  price: number;
  quantity: number;
}

/** Minimum shape needed to add something to the cart — `cartStore.addItem`. */
export type CartAddableItem = Omit<CartItem, "quantity">;

/** Params accepted by `services/menuItems.fetchMenuItems`. */
export interface FetchMenuItemsParams {
  category?: MenuCategory;
  subCategory?: MenuSubCategory | null;
}

/** Props shared by the hand-drawn SVG icon components in `components/icons/`. */
export interface SvgIconProps {
  size?: number;
  className?: string;
}

/**
 * Payload `app/cart/page.tsx` passes to `useCreateOrder`'s `placeOrder`.
 * `orderType` is kept as a plain `string` (not a "pickup" | "delivery"
 * literal union) because it round-trips through Radix's `RadioGroup`,
 * whose `value`/`onValueChange` are typed as plain `string`.
 * `total` is a `string` because it comes from `.toFixed(2)` at the call
 * site (unlike `tax`, which is coerced back to `number` with a leading `+`)
 * — that asymmetry is pre-existing, not introduced by this migration.
 */
export interface PlaceOrderInput {
  customerName: string;
  phone: string;
  notes: string;
  orderType: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: string;
}
