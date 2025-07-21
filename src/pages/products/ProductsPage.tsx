import { ProductsList } from '@/widgets/ProductsList'
import css from './ProductsPage.module.scss'
import { Filters } from '@/widgets/Filters'
import { useSearchProductStore } from '@/entities/filters-product'

export const ProductsPage = () => {
  const { search, change: changeSearch } = useSearchProductStore()

  return (
    <div className={css.products + ' container'}>
      <section className={css.products__items}>
        <input
          className={'input input--var-outlined ' + css.products__search}
          placeholder="Поиск товаров..."
          onChange={(e) => changeSearch(e.target.value)}
          type="search"
          value={search}
        />
        <ProductsList />
      </section>

      <aside className={css.panel}>
        <Filters />
      </aside>
    </div>
  )
}
