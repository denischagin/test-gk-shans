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

const initialState = {
  filters: DEFAULT_FILTERS_STATE,
  search: '',
}
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
      if (state.filters[field] === undefined) {
        state.filters[field] = action.payload.item
      } else {
        state.filters[field] = {
          ...state.filters[field],
          ...action.payload.item,
        }
      }
    },
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
})

export const { changeFilter, changeSearch } = filtersSlice.actions
