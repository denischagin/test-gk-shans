import { useFavoritesStore } from '@/entities/favorites'
import css from './FavoritesProducts.module.scss'
import { Card } from '@/shared/ui'

export const FavoritesProducts = () => {
  const { items: favoritesProducts, remove: removeFromFavorites } =
    useFavoritesStore()

  if (!favoritesProducts.length)
    return <p className="text--size-xl">Нет товаров в избранном</p>

  return (
    <div className={css.list}>
      {favoritesProducts.map((product) => (
        <Card>
          <Card.Img
            src={product.preview_picture}
            alt={product.name}
          />

          <Card.Content>
            <Card.Price
              price={product.price}
              discountPrice={product.price_discount}
            />

            <Card.Title title={product.name} />

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
