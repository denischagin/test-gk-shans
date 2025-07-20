import { useFavoritesStore } from '@/entities/favorites'
import css from './FavoritesProducts.module.scss'
import { Card, Label } from '@/shared/ui'
import { PATHS } from '@/shared/constants'

export const FavoritesProducts = () => {
  const { items: favoritesProducts, remove: removeFromFavorites } =
    useFavoritesStore()

  if (!favoritesProducts.length)
    return <p className="text--size-xl">Нет товаров в избранном</p>

  return (
    <div className={css.list}>
      {favoritesProducts.map((product) => (
        <Card key={product.id}>
          <Card.Img
            src={product.preview_picture}
            alt={product.name}
          />

          <Card.Content>
            <Card.Labels>
              {Object.entries(product.labels).map(([labelValue, labelText]) => (
                <Label
                  key={labelValue}
                  variant={labelValue}
                >
                  {labelText}
                </Label>
              ))}
            </Card.Labels>
            <Card.Price
              price={product.price}
              discountPrice={product.price_discount}
            />

            <Card.Title
              title={product.name}
              to={`${PATHS.products}/${product.id}`}
            />

            <Card.Actions>
              <button
                className="button button--var-outlined"
                onClick={() => removeFromFavorites(product.id)}
              >
                Удалить из избранного
              </button>
            </Card.Actions>
          </Card.Content>
        </Card>
      ))}
    </div>
  )
}
