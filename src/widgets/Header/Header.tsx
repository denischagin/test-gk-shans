import { NavLink } from 'react-router'
import css from './Header.module.scss'
import { PATHS } from '@/shared/constants'
import { useFavoritesStore } from '@/entities/favorites'
import { useCartStore } from '@/entities/cart'

export const Header = () => {
  const { items: cart } = useCartStore()
  const { items: favorites } = useFavoritesStore()

  const links = [
    { title: 'Каталог', to: PATHS.products },
    {
      title: 'Избранное' + (favorites.length ? ` (${favorites.length})` : ''),
      to: PATHS.favorites,
    },
    {
      title: 'Корзина' + (cart.length ? ` (${cart.length})` : ''),
      to: PATHS.cart,
    },
  ]

  return (
    <header className={css.header}>
      <div className={css.header__container + ' container'}>
        <p className={css.header__title}>НАЗВАНИЕ САЙТА</p>
        <nav className={css.menu}>
          <ul className={css['menu__list']}>
            {links.map(({ title, to }) => (
              <li
                className={css['menu__item']}
                key={to}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? `${css['menu__link']} ${css['menu__link_active']}`
                      : css['menu__link']
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
