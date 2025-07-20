import { useAppDispatch, useAppSelector } from '@/app/config'
import { changeSort, type TSortProductItem } from '@/entities/sort-product'

export const useSortProductStore = () => {
  const item = useAppSelector((state) => state.sort)
  const dispatch = useAppDispatch()

  const change = (state: TSortProductItem) => dispatch(changeSort(state))

  return { item, change }
}
