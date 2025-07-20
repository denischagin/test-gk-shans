import { useParams } from 'react-router'
import css from './ProductCardPage.module.scss'
import { useFetchAllProductsQuery } from '@/entities/product'
import { Label } from '@/shared/ui'
import { useMemo } from 'react'
import { useCartStore } from '@/entities/cart'
import { useFavoritesStore } from '@/entities/favorites'

export const ProductCardPage = () => {
  const { data: productsList } = useFetchAllProductsQuery()
  const { productId } = useParams()
  const { items: cart, add: addToCart, remove: removeFromCart } = useCartStore()
  const {
    items: favorites,
    add: addToFavorites,
    remove: removeFromFavorites,
  } = useFavoritesStore()

  const product = useMemo(() => {
    return productsList?.items.find((item) => item.id === Number(productId))
  }, [productsList, productId])
  const inCart = useMemo(() => {
    return cart.find((item) => item.id === Number(productId))
  }, [cart, productId])
  const inFavorites = useMemo(() => {
    return favorites.find((item) => item.id === Number(productId))
  }, [favorites, productId])

  if (!product) return <div>Не найден продукт</div>

  const {
    name,
    preview_picture,
    price,
    price_discount,
    characteristics,
    labels,
  } = product

  return (
    <div className={css.product}>
      <div className="container">
        <div className={css.product__container}>
          <img
            className={css.product__image}
            src={preview_picture}
            alt={name}
          />

          <div className={css.product__info}>
            <ul className={css.product__labels}>
              {Object.entries(labels).map(([labelValue, labelText]) => (
                <Label
                  key={labelValue}
                  variant={labelValue}
                >
                  {labelText}
                </Label>
              ))}
            </ul>
            <h1 className={css.product__name + ' text--size-xl'}>{name}</h1>

            <div className={css['product__price-container']}>
              <p className={css['product__price-discount']}>{price_discount}</p>
              <p className={css['product__price']}>{price}</p>
            </div>
            <div className={css.product__actions}>
              {!product.available && (
                <button
                  className="button button--var-filled button--size-small"
                  disabled
                >
                  Отсутствует
                </button>
              )}
              {product.available && (
                <button
                  className={
                    'button button--var-filled button--size-medium ' +
                    (inCart ? 'button_disabled' : '')
                  }
                  onClick={() =>
                    inCart ? removeFromCart(product.id) : addToCart(product)
                  }
                >
                  {inCart ? 'В корзине' : 'В корзину'}
                </button>
              )}
              {product.available && (
                <button
                  className={
                    'button button--var-text button--size-medium ' +
                    (inFavorites ? 'button_disabled' : '')
                  }
                  onClick={() =>
                    inFavorites
                      ? removeFromFavorites(product.id)
                      : addToFavorites(product)
                  }
                >
                  {inFavorites ? 'В избранном' : 'В избранное'}
                </button>
              )}
            </div>

            <h2>Характеристики</h2>
            <ul className={css.product__chars}>
              {characteristics.map((charsItem) => (
                <li key={charsItem.value}>
                  <h3>{charsItem.label}</h3>
                  <p>{charsItem.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
