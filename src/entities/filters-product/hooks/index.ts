import { useAppDispatch, useAppSelector } from '@/app/config'
import { changeFilter } from '@/entities/filters-product'
import type { TFiltersProductItem } from '@/entities/filters-product'
import type { TProduct } from '@/entities/product'

export const useFiltersProductStore = () => {
  const items = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch()

  const change = (
    field: keyof TProduct,
    filterItem: TFiltersProductItem = {},
  ) => dispatch(changeFilter({ field: field, item: filterItem }))

  return { items, change }
}
