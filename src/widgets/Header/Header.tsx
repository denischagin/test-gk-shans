import { NavLink } from 'react-router'
import css from './Header.module.scss'
import { PATHS } from '@/shared/constants'
import { useFavoritesStore } from '@/entities/favorites'
import { useCartStore } from '@/entities/cart'
import { Index } from '@/shared/ui'

export const Header = () => {
  const { items: cart } = useCartStore()
  const { items: favorites } = useFavoritesStore()

  const links = [
    { title: 'Каталог', to: PATHS.products },
    {
      title: 'Избранное',
      to: PATHS.favorites,
      count: favorites.length,
    },
    {
      title: 'Корзина',
      to: PATHS.cart,
      count: cart.length,
    },
  ]

  return (
    <header className={css.header}>
      <div className={css.header__container + ' container'}>
        <p className={css.header__title}>НАЗВАНИЕ САЙТА</p>
        <nav className={css.menu}>
          <ul className={css['menu__list']}>
            {links.map(({ title, to, count }) => (
              <Index
                key={to}
                value={count}
              >
                <li className={css['menu__item']}>
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
              </Index>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
