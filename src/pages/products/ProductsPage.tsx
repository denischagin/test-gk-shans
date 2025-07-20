import { ProductsList } from '@/widgets/ProductsList'
import css from './ProductsPage.module.scss'
import { Filters } from '@/widgets/Filters'
import { useSearchProductStore } from '@/entities/filters-product'

export const ProductsPage = () => {
  const { change: changeSearch } = useSearchProductStore()

  return (
    <div className={css.products + ' container'}>
      <div className={css.products__items}>
        <input
          className="input input--var-outlined"
          placeholder="Поиск товаров..."
          onChange={(e) => changeSearch(e.target.value)}
        />
        <ProductsList />
      </div>

      <div className={css.panel}>
        <Filters />
      </div>
    </div>
  )
}
