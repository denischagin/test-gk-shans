import React from 'react'
import type { TProduct } from '@/entities/product'
import { Card } from '@/shared/ui'

export type ProductCardProps = TProduct & {
  inCart: boolean
  inFavorites: boolean
  onAddToFavorites: (product: TProduct) => void
  onRemoveFromFavorites: (productId: number) => void
  onAddToCart: (product: TProduct) => void
  onRemoveFromCart: (productId: number) => void
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {
    inCart,
    inFavorites,
    onAddToCart,
    onRemoveFromCart,
    onAddToFavorites,
    onRemoveFromFavorites,
    ...product
  } = props

  return (
    <Card>
      <Card.Img
        src={product.preview_picture}
        alt={product.name}
      />

      <Card.Content>
        <Card.Price
          price={product.price}
          discountPrice={product.price_discount}
        />

        <Card.Title title={product.name} />

        <Card.Actions>
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
                'button button--var-filled button--size-small ' +
                (inCart ? 'button_disabled' : '')
              }
              onClick={() =>
                inCart ? onRemoveFromCart(product.id) : onAddToCart(product)
              }
            >
              {inCart ? 'В корзине' : 'В корзину'}
            </button>
          )}
          {product.available && (
            <button
              className={
                'button button--var-text button--size-small ' +
                (inFavorites ? 'button_disabled' : '')
              }
              onClick={() =>
                inFavorites
                  ? onRemoveFromFavorites(product.id)
                  : onAddToFavorites(product)
              }
            >
              {inFavorites ? 'В избранном' : 'В избранное'}
            </button>
          )}
        </Card.Actions>
      </Card.Content>
    </Card>
  )
}
