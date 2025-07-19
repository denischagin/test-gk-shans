import { useFiltersProductStore } from '@/entities/filters-product'
import css from './Filters.module.scss'

export const Filters = () => {
  const { change, items } = useFiltersProductStore()

  return (
    <div className={css.filters}>
      <div className={css.filters__header}>
        <h3 className={css.filters__title}>Фильтры</h3>
        <button className={css.filters__reset}>Сбросить все</button>
      </div>

      <div className={css['filter-group']}>
        <h4 className={css['filter-group__title']}>Цена, ₽</h4>
        <div className={css['price-range']}>
          <input
            type="number"
            placeholder="От"
            className={css['price-range__input']}
            value={items['price_discount']?.min}
            onChange={(e) =>
              change('price_discount', { min: e.target.valueAsNumber })
            }
          />
          <span className={css['price-range__separator']}>-</span>
          <input
            type="number"
            placeholder="До"
            className={css['price-range__input']}
            value={items['price_discount']?.max}
            onChange={(e) =>
              change('price_discount', { max: e.target.valueAsNumber })
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
                checked={!!items['available']?.contains}
                onChange={(e) =>
                  change('available', {
                    contains: e.target.checked,
                  })
                }
              />
              <span className={css.option__label}>Есть в наличии</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}
