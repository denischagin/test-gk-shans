import { useNavigate, useParams } from 'react-router'
import css from './ProductCardPage.module.scss'
import { useFetchAllProductsQuery } from '@/entities/product'
import { Label } from '@/shared/ui'
import { useMemo } from 'react'
import { useCartStore } from '@/entities/cart'
import { useFavoritesStore } from '@/entities/favorites'
import image from '@/shared/images/product.webp'

export const ProductCardPage = () => {
  const { data: productsList, isLoading } = useFetchAllProductsQuery()
  const { productId } = useParams()
  const { items: cart, add: addToCart, remove: removeFromCart } = useCartStore()
  const {
    items: favorites,
    add: addToFavorites,
    remove: removeFromFavorites,
  } = useFavoritesStore()
  const navigate = useNavigate()

  const product = useMemo(() => {
    return productsList?.items.find((item) => item.id === Number(productId))
  }, [productsList, productId])

  const inCart = useMemo(() => {
    return cart.find((item) => item.id === Number(productId))
  }, [cart, productId])

  const inFavorites = useMemo(() => {
    return favorites.find((item) => item.id === Number(productId))
  }, [favorites, productId])

  if (isLoading)
    return (
      <div className={css.loading}>
        <p className="text--size-3xl">Загрузка товаров...</p>
      </div>
    )
  if (!product)
    return (
      <div className={css.loading}>
        <p className="text--size-3xl">Товар не найден</p>
      </div>
    )

  const {
    name,
    preview_picture,
    price,
    price_discount,
    characteristics,
    labels,
  } = product

  const handleCartClick = () => {
    inCart ? removeFromCart(product.id) : addToCart(product)
  }
  const handleFavoritesClick = () => {
    inFavorites ? removeFromFavorites(product.id) : addToFavorites(product)
  }
  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <div className={css.product}>
      <button
        className={'button button--var-text ' + css.product__back}
        onClick={handleClickBack}
      >
        Назад
      </button>
      <div className="container">
        <div className={css.product__container}>
          <img
            className={css.product__image}
            src={preview_picture ?? image}
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
                  onClick={handleCartClick}
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
                  onClick={handleFavoritesClick}
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
