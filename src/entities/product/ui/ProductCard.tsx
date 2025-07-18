import React from 'react'
import css from './ProductCard.module.scss'
import type { TProduct } from '@/entities/product'

type ProductCardProps = {
  product: TProduct
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
}) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(product.price_discount)

  const isDiscount = product.price !== product.price_discount

  const slicedName = product.name.slice(0, 40) + '...'

  return (
    <article className={`${css.card} ${className || ''}`}>
      <img
        src={product.preview_picture}
        className={css.card__preview}
      />
      <div className={css.card__content}>
        <div className={css.card__price}>
          <p className="text--size-xl text-primary-dark">{formattedPrice} </p>
          {isDiscount && <p className={css.card__discount}>{product.price}</p>}
        </div>
        <h3 className="text--size-md">{slicedName}</h3>
        <div className={css['card__actions']}>
          <button
            className="button button--var-filled button--size-small"
            disabled={!product.available}
          >
            {product.available ? 'В корзину' : 'Отсутствует'}
          </button>
          {product.available && (
            <button className="button button--var-text button--size-small">
              В избранное
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
