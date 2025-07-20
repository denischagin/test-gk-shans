import type { TSortProductItem, TSortProductStore } from '../types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: TSortProductStore = {
  current: { field: 'default', direction: 'default' },
}

export const sortSlice = createSlice({
  initialState: initialState,
  name: 'sort',
  reducers: {
    changeSort: (state, action: PayloadAction<TSortProductItem>) => {
      state.current = action.payload
    },
  },
})

export const { changeSort } = sortSlice.actions
