import type { TProduct } from '@/entities/product'
import { useMemo } from 'react'

export type TUseCartFavoritesProductsArgs = {
  productsList: TProduct[] | undefined
  cartProducts: TProduct[]
  favoritesProducts: TProduct[]
}
export const useCartFavoritesProducts = (
  args: TUseCartFavoritesProductsArgs,
) => {
  const { cartProducts, favoritesProducts, productsList } = args

  const favoritesCartProducts = useMemo(() => {
    if (!productsList) return undefined

    return productsList.map((product) => {
      const inCart = cartProducts.some((item) => item.id === product.id)
      const inFavorites = favoritesProducts.some(
        (item) => item.id === product.id,
      )
      return { ...product, inCart, inFavorites }
    })
  }, [productsList, cartProducts, favoritesProducts])

  return favoritesCartProducts
}
