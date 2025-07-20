import { ProductsList } from '@/widgets/ProductsList'
import css from './ProductsPage.module.scss'
import { Filters } from '@/widgets/Filters'

export const ProductsPage = () => {
  return (
    <div className={css.products + ' container'}>
      <div className={css.products__items}>
        <input
          className="input input--var-outlined"
          placeholder="Поиск товаров..."
        />
        <ProductsList />
      </div>

      <div className={css.panel}>
        <Filters />
      </div>
    </div>
  )
}
