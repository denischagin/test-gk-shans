import React from 'react'
import css from './Card.module.scss'

export type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return <article className={`${css.card} ${className}`}>{children}</article>
}

Card.Img = ({ src, alt }: { src: string | undefined; alt: string }) => (
  <img
    src={src || ''}
    alt={alt}
    className={css.card__preview}
  />
)

Card.Content = ({ children }: { children: React.ReactNode }) => (
  <div className={css.card__content}>{children}</div>
)

Card.Price = ({
  price,
  discountPrice,
  currency = 'RUB',
}: {
  price: number
  discountPrice?: number
  currency?: string
}) => {
  const formatPrice = (value: number) =>
    new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency,
    }).format(value)

  return (
    <div className={css.card__price}>
      <p className="text--size-xl text-primary-dark">
        {formatPrice(discountPrice || price)}
      </p>
      {discountPrice && discountPrice !== price && (
        <p className={css.card__discount}>{formatPrice(price)}</p>
      )}
    </div>
  )
}

Card.Title = ({
  title,
  maxLength = 40,
}: {
  title: string
  maxLength?: number
}) => (
  <h3 className={css.card__title + ' text--size-md'}>
    {title.length > maxLength ? `${title.slice(0, maxLength)}...` : title}
  </h3>
)

Card.Actions = ({ children }: { children: React.ReactNode }) => (
  <div className={css.card__actions}>{children}</div>
)
