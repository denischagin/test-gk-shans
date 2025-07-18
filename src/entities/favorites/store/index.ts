import type { TFavoritesStore } from '@/entities/favorites'
import type { TProduct } from '@/entities/product'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: TFavoritesStore = {
  items: [],
}

export const favoritesSlice = createSlice({
  initialState: initialState,
  name: 'favorites',
  reducers: {
    addToFavorites(state, action: PayloadAction<TProduct>) {
      state.items.push(action.payload)
    },

    removeFromFavorites(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
