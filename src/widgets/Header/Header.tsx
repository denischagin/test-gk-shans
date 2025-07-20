import { NavLink } from 'react-router'
import css from './Header.module.scss'
import { PATHS } from '@/shared/constants'

const links = [
  { title: 'Каталог', to: PATHS.products },
  { title: 'Избранное', to: PATHS.favorites },
  { title: 'Корзина', to: PATHS.cart },
]

export const Header = () => {
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
