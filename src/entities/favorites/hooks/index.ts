import { useAppDispatch, useAppSelector } from '@/app/config'
import { addToFavorites, removeFromFavorites } from '@/entities/favorites'
import type { TProduct } from '@/entities/product'

export const useFavorites = () => {
  const { items } = useAppSelector((state) => state.favorites)
  const dispatch = useAppDispatch()

  const add = (product: TProduct) => dispatch(addToFavorites(product))
  const remove = (productId: number) => dispatch(removeFromFavorites(productId))

  return { items, add, remove }
}
