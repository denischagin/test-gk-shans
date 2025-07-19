import type { TProduct } from '@/entities/product'
import type { TFilters, TFiltersItem } from '@/shared/types'

export type TFiltersProductItem = TFiltersItem<TProduct>

export type TFiltersProductStore = TFilters<TProduct>
