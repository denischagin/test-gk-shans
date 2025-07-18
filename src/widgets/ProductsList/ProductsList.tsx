import { ProductCard, useFetchAllProductsQuery } from '@/entities/product'
import css from './ProductsList.module.scss'

export const ProductsList = () => {
  const { data: productsList } = useFetchAllProductsQuery()

  return (
    <>
      <div className={css.list}>
        {productsList?.items?.map((productItem) => (
          <ProductCard product={productItem} />
        ))}
      </div>
    </>
  )
}
