import {
  DEFAULT_FILTERS_STATE,
  useFiltersProductStore,
} from '@/entities/filters-product'
import css from './Filters.module.scss'
import type { TProduct } from '@/entities/product'
import { Fragment, type ChangeEvent } from 'react'
import {
  useSortProductStore,
  type TSortProductItem,
} from '@/entities/sort-product'

const sortVariants: { field: keyof TProduct; title: string }[] = [
  { field: 'price_discount', title: 'По цене' },
  { field: 'name', title: 'По названию' },
]

export const Filters = () => {
  const { change: changeFilters, items: filterItems } = useFiltersProductStore()
  const { item: sort, change: changeSort } = useSortProductStore()

  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const [field, direction] = e.target.value.split(':')
    changeSort({ field, direction } as TSortProductItem)
  }

  return (
    <div className={css.filters}>
      <div className={css.filters__header}>
        <h3 className={css.filters__title}>Фильтры</h3>
        <button
          className={css.filters__reset}
          onClick={() => {
            changeFilters(
              'price_discount',
              DEFAULT_FILTERS_STATE['price_discount'],
            )
            changeFilters('available', DEFAULT_FILTERS_STATE['available'])
          }}
        >
          Сбросить все
        </button>
      </div>

      <div className={css['filter-group']}>
        <h4 className={css['filter-group__title']}>Цена, ₽</h4>
        <div className={css['price-range']}>
          <input
            type="number"
            placeholder="От"
            className={
              'input input--var-outlined input--size-small ' +
              css['price-range__input']
            }
            value={filterItems['price_discount']?.min ?? ''}
            onChange={(e) =>
              changeFilters('price_discount', {
                min: Number.isNaN(e.target.valueAsNumber)
                  ? undefined
                  : e.target.valueAsNumber,
              })
            }
          />
          <span className={css['price-range__separator']}>-</span>
          <input
            type="number"
            placeholder="До"
            className={
              'input input--var-outlined input--size-small ' +
              css['price-range__input']
            }
            value={filterItems['price_discount']?.max ?? ''}
            onChange={(e) =>
              changeFilters('price_discount', {
                max: Number.isNaN(e.target.valueAsNumber)
                  ? undefined
                  : e.target.valueAsNumber,
              })
            }
          />
        </div>
      </div>

      <div className={css['filter-group']}>
        <h4 className={css['filter-group__title']}>Наличие</h4>
        <ul className={css.optionsList}>
          <li className={css.optionsList__item}>
            <label className={css.option}>
              <input
                type="checkbox"
                className={css.option__input}
                checked={!!filterItems['available']?.contains}
                onChange={(e) =>
                  changeFilters('available', {
                    contains: e.target.checked,
                  })
                }
              />
              <span className={css.option__label}>Есть в наличии</span>
            </label>
          </li>
        </ul>
      </div>

      <div className={css['filter-group']}>
        <h4 className={css['filter-group__title']}>Сортировка</h4>
        <select
          className="input input--var-outlined input--size-small"
          value={[sort.current.field, sort.current.direction].join(':')}
          onChange={handleChangeSort}
        >
          <option value="default:default">--- Сортировка ---</option>
          {sortVariants.map(({ field, title }) => (
            <Fragment key={field}>
              <option value={field + ':ASC'}>{title} ↑</option>
              <option value={field + ':DESC'}>{title} ↓</option>
            </Fragment>
          ))}
        </select>
      </div>
    </div>
  )
}
