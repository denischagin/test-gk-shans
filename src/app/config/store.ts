import { cartSlice } from '@/entities/cart'
import { favoritesSlice } from '@/entities/favorites'
import { filtersSlice } from '@/entities/filters-product'
import { baseApi } from '@/shared/api'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [cartSlice.reducerPath]: cartSlice.reducer,
  [favoritesSlice.reducerPath]: favoritesSlice.reducer,
  [filtersSlice.reducerPath]: filtersSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
