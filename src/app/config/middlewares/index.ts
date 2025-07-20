import type { RootState } from '@/app/config'
import { addToCart, removeFromCart } from '@/entities/cart'
import { CartStorageService } from '@/entities/cart/services'
import { addToFavorites, removeFromFavorites } from '@/entities/favorites'
import { FavoritesStorageService } from '@/entities/favorites/services'
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

export const cartMiddlware = createListenerMiddleware()
export const favoritesMiddlware = createListenerMiddleware()

cartMiddlware.startListening({
  matcher: isAnyOf(addToCart, removeFromCart),
  effect: (_, listenerApi) => {
    const state = listenerApi.getState() as RootState
    CartStorageService.setToLS(state.cart.items)
  },
})

favoritesMiddlware.startListening({
  matcher: isAnyOf(addToFavorites, removeFromFavorites),
  effect: (_, listenerApi) => {
    const state = listenerApi.getState() as RootState
    FavoritesStorageService.setToLS(state.favorites.items)
  },
})
