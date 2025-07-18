import { ProductCard, useFetchAllProductsQuery } from '@/entities/product'
import css from './ProductsList.module.scss'
import { useMemo } from 'react'
import { useCart } from '@/entities/cart'
import { useFavorites } from '@/entities/favorites'

export const ProductsList = () => {
  const { data: productsList, isError, isLoading } = useFetchAllProductsQuery()

  const {
    items: favoritesProducts,
    add: addToFavorites,
    remove: removeFromFavorites,
  } = useFavorites()
  const {
    items: cartProducts,
    add: addToCart,
    remove: removeFromCart,
  } = useCart()

  const favoritesCartProducts = useMemo(() => {
    if (!productsList) return undefined

    return productsList.items.map((product) => {
      const inCart = cartProducts.some((item) => item.id === product.id)
      const inFavorites = favoritesProducts.some(
        (item) => item.id === product.id,
      )
      return { ...product, inCart, inFavorites }
    })
  }, [productsList, cartProducts, favoritesProducts])

  return (
    <>
      <div className={css.list}>
        {isError && (
          <p className="text--size-xl">Возникла ошибка при загрузке каталога</p>
        )}
        {!!productsList && !productsList.items.length && (
          <p className="text--size-xl">Нет товаров</p>
        )}
        {isLoading && <p className="text--size-xl">Загрузка товаров...</p>}
        {favoritesCartProducts?.map((productItem) => (
          <ProductCard
            onRemoveFromFavorites={removeFromFavorites}
            onAddToFavorites={addToFavorites}
            onRemoveFromCart={removeFromCart}
            onAddToCart={addToCart}
            {...productItem}
          />
        ))}
      </div>
    </>
  )
}
