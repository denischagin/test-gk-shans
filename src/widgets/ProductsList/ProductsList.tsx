import {
  ProductCard,
  useFetchAllProductsQuery,
  type TProduct,
} from '@/entities/product'
import css from './ProductsList.module.scss'
import { useCartStore } from '@/entities/cart'
import { useFavoritesStore } from '@/entities/favorites'
import { useCartFavoritesProducts } from './ProductsList.hooks'
import { useFilters } from '@/shared/hooks'
import { useFiltersProductStore } from '@/entities/filters-product'
import { useSort } from '@/shared/hooks/useSort'
import { useSortProductStore } from '@/entities/sort-product'

export const ProductsList = () => {
  const { data: productsList, isError, isLoading } = useFetchAllProductsQuery()
  const { items: productsFilters } = useFiltersProductStore()
  const {
    item: { current: sort },
  } = useSortProductStore()

  const {
    items: favoritesProducts,
    add: addToFavorites,
    remove: removeFromFavorites,
  } = useFavoritesStore()
  const {
    items: cartProducts,
    add: addToCart,
    remove: removeFromCart,
  } = useCartStore()

  const filteredProducts = useFilters<TProduct>(
    productsList?.items,
    productsFilters,
  )

  const sortProducts = useSort<TProduct>(
    filteredProducts,
    sort.field,
    sort.direction,
  )

  const favoritesCartProducts = useCartFavoritesProducts({
    cartProducts,
    favoritesProducts,
    productsList: sortProducts,
  })

  console.log(sortProducts)

  return (
    <>
      <div className={css.list}>
        {isError && (
          <p className="text--size-xl">Возникла ошибка при загрузке каталога</p>
        )}
        {!!favoritesCartProducts && !favoritesCartProducts.length && (
          <p className="text--size-xl">Нет товаров</p>
        )}
        {isLoading && <p className="text--size-xl">Загрузка товаров...</p>}
        {favoritesCartProducts?.map((productItem) => (
          <ProductCard
            key={productItem.id}
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
