/**
 * Row types mirroring the Supabase schema.
 *
 * The repo only ships `supabase/create_order.sql` (the `create_order` RPC),
 * not full `CREATE TABLE` statements, so these are derived from that RPC
 * plus every column actually read/written across services/hooks/components.
 * A couple of columns (`orders.status`, `orders.source`) are only ever set
 * server-side by the RPC and never read by the frontend, so they're kept as
 * `string` rather than guessing at an enum with no call site to verify it against.
 */

export type MenuCategory = "drink" | "food";
export type MenuSubCategory = "coffee" | "non-coffee" | "bakery" | "dessert";

export interface MenuItemRow {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: MenuCategory;
  sub_category: MenuSubCategory | null;
  is_available: boolean;
  created_at: string;
}

export interface OrderRow {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string | null;
  type: string;
  source: string;
  status: string;
  total_price: number;
  notes: string | null;
  created_at: string;
}

export interface OrderItemRow {
  id: string;
  order_id: string;
  menu_item_id: string;
  quantity: number;
  item_price: number;
}

/** Narrow select used by the order-success page: `id, quantity, item_price, menu_item_id`. */
export type OrderItemSummary = Pick<
  OrderItemRow,
  "id" | "quantity" | "item_price" | "menu_item_id"
>;

/** Narrow select used for the homepage: `id, name, price, image_url, category`. */
export type FeaturedMenuItem = Pick<
  MenuItemRow,
  "id" | "name" | "price" | "image_url" | "category"
>;

/** Narrow select used to build the menu lookup map on the order-success page. */
export type MenuLookupEntry = Pick<MenuItemRow, "id" | "name" | "image_url">;

/** Return row of the `create_order` RPC — `returns table (id uuid, order_number text)`. */
export interface CreateOrderResult {
  id: string;
  order_number: string;
}

/** A single line item inside the RPC's `p_items jsonb` array parameter. */
export interface CreateOrderItemInput {
  menu_item_id: string;
  quantity: number;
}

/** Positional params for `supabase.rpc("create_order", params)`. */
export interface CreateOrderParams {
  p_customer_name: string;
  p_customer_phone: string | null;
  p_type: string;
  p_notes: string | null;
  p_items: CreateOrderItemInput[];
}
