import type {
  TFiltersProductItem,
  TFiltersProductStore,
} from '@/entities/filters-product/types'
import type { TProduct } from '@/entities/product'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const DEFAULT_FILTERS_STATE: TFiltersProductStore = {
  available: { contains: true },
  price_discount: { min: 0, max: 99999 },
}

const initialState = DEFAULT_FILTERS_STATE
export const filtersSlice = createSlice({
  initialState,
  name: 'filters',
  reducers: {
    changeFilter: (
      state,
      action: PayloadAction<{
        field: keyof TProduct
        item: TFiltersProductItem
      }>,
    ) => {
      const field = action.payload.field
      if (state[field] === undefined) {
        state[field] = action.payload.item
      } else {
        state[field] = {
          ...state[field],
          ...action.payload.item,
        }
      }
    },
  },
})

export const { changeFilter } = filtersSlice.actions
