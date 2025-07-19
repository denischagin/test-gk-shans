import { useCartStore } from '@/entities/cart'
import css from './CartPage.module.scss'
import { useMemo } from 'react'
import { formatPrice } from '@/shared/helpers'
import { CartProducts } from '@/widgets/CartProducts'

export const CartPage = () => {
  const { items: cartProducts } = useCartStore()

  const totalPrice = useMemo(() => {
    return cartProducts.reduce((prev, cur) => prev + cur.price_discount, 0)
  }, [cartProducts])

  return (
    <div className={css.cart + ' container'}>
      <CartProducts />

      <div className={css.cart__panel}>
        <div>
          <p className="text--size-xl">Итого к оплате:</p>
          <p className="text--size-xl">{formatPrice(totalPrice)}</p>
        </div>
        <button className="button button--var-filled">Купить</button>
      </div>
    </div>
  )
}
