import type { TCartStore } from '@/entities/cart'
import type { TProduct } from '@/entities/product'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: TCartStore = {
  items: [],
}

export const cartSlice = createSlice({
  initialState: initialState,
  name: 'cart',
  reducers: {
    addToCart(state, action: PayloadAction<TProduct>) {
      state.items.push(action.payload)
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
