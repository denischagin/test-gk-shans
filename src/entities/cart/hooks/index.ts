import { useAppDispatch, useAppSelector } from '@/app/config'
import { addToCart, removeFromCart } from '@/entities/cart'
import type { TProduct } from '@/entities/product'

export const useCartStore = () => {
  const { items } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const add = (product: TProduct) => dispatch(addToCart(product))
  const remove = (productId: number) => dispatch(removeFromCart(productId))

  return { items, add, remove }
}
