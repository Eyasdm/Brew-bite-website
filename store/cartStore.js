import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],

  // Add item to cart
  addItem: (product) => {
    const items = get().items;
    const existingItem = items.find((i) => i.id === product.id);

    if (existingItem) {
      set({
        items: items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({
        items: [...items, { ...product, quantity: 1 }],
      });
    }
  },

  // Decrease item quantity
  decreaseItem: (id) => {
    const items = get().items;
    const item = items.find((i) => i.id === id);

    if (item.quantity === 1) {
      set({
        items: items.filter((i) => i.id !== id),
      });
    } else {
      set({
        items: items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        ),
      });
    }
  },

  // Remove item from cart
  removeItem: (id) => {
    set({
      items: get().items.filter((i) => i.id !== id),
    });
  },

  // Clear the cart
  clearCart: () => set({ items: [] }),

  // Calculate total price
  totalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  // Calculate total items count
  totalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));
