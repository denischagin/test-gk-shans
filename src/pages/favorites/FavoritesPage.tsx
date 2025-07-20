import { FavoritesProducts } from '@/widgets/FavoritesProducts'
import css from './FavoritesPage.module.scss'

export const FavoritesPage = () => {
  return (
    <div className="container">
      <h1 className={'text--size-3xl ' + css.heading}>Избранное</h1>
      <FavoritesProducts />
    </div>
  )
}
