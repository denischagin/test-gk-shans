import { NavLink } from 'react-router'
import css from './Header.module.scss'
import { PATHS } from '@/shared/constants'

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header__container + ' container'}>
        <p className={css.header__title}>НАЗВАНИЕ САЙТА</p>
        <nav className={css.menu}>
          <ul className={css['menu__list']}>
            <li className={css['menu__item']}>
              <NavLink
                to={PATHS.products}
                className={({ isActive }) =>
                  isActive
                    ? `${css['menu__link']} ${css['menu__link_active']}`
                    : css['menu__link']
                }
              >
                Главная
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                to={PATHS.favorites}
                className={({ isActive }) =>
                  isActive
                    ? `${css['menu__link']} ${css['menu__link_active']}`
                    : css['menu__link']
                }
              >
                Избранное
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                to={PATHS.cart}
                className={({ isActive }) =>
                  isActive
                    ? `${css['menu__link']} ${css['menu__link_active']}`
                    : css['menu__link']
                }
              >
                Корзина
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
