// lib/store/cartStore.ts
import { create } from "zustand"

interface CartState {
  cartCount: number
  setCart: (items: { product_id: string; quantity: number }[]) => void
  increment: () => void
  reset: () => void
}

export const useCartStore = create<CartState>((set) => ({
  cartCount: 0,
  setCart: (items) => {
    const total = items.reduce((sum, item) => sum + item.quantity, 0)
    set({ cartCount: total })
  },
  increment: () => set((state) => ({ cartCount: state.cartCount + 1 })),
  reset: () => set({ cartCount: 0 }),
}))
