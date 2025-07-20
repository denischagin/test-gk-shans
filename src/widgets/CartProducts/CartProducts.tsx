import { useCartStore } from '@/entities/cart'
import css from './CartProducts.module.scss'
import { Card } from '@/shared/ui'

export const CartProducts = () => {
  const { items: cartProducts, remove: removeFromCart } = useCartStore()

  if (!cartProducts.length)
    return <p className="text--size-xl">Нет товаров в корзине</p>

  return (
    <div className={css.list}>
      {cartProducts.map((product) => (
        <Card key={product.id}>
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
              <button
                className="button button--var-outlined"
                onClick={() => removeFromCart(product.id)}
              >
                Удалить из корзины
              </button>
            </Card.Actions>
          </Card.Content>
        </Card>
      ))}
    </div>
  )
}
