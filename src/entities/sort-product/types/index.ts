import type { TProduct } from '@/entities/product'
import type { TSortDirection } from '@/shared/types'

export type TSortProductItem =
  | {
      field: keyof TProduct
      direction: TSortDirection
    }
  | {
      field: 'default'
      direction: 'default'
    }

export type TSortProductStore = {
  current: TSortProductItem
}
