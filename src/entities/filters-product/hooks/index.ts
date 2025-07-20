import { useAppDispatch, useAppSelector } from '@/app/config'
import { changeFilter, changeSearch } from '@/entities/filters-product'
import type { TFiltersProductItem } from '@/entities/filters-product'
import type { TProduct } from '@/entities/product'

export const useFiltersProductStore = () => {
  const items = useAppSelector((state) => state.filters.filters)
  const dispatch = useAppDispatch()

  const change = (
    field: keyof TProduct,
    filterItem: TFiltersProductItem = {},
  ) => dispatch(changeFilter({ field: field, item: filterItem }))

  return { items, change }
}

export const useSearchProductStore = () => {
  const search = useAppSelector((state) => state.filters.search)
  const dispatch = useAppDispatch()

  const change = (value: string) => {
    dispatch(changeSearch(value))
  }

  return { search, change }
}
