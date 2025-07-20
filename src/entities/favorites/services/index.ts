import { parseArrayProducts, type TProduct } from '@/entities/product'
import { STORAGE_KEYS } from '@/shared/constants'

class Service {
  getFromLS(): TProduct[] {
    const result = localStorage.getItem(STORAGE_KEYS.favorites)
    if (result === null) return []
    const parsedProducts = parseArrayProducts(result)
    return parsedProducts ?? []
  }
  setToLS(value: TProduct[]) {
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(value))
  }
}

export const FavoritesStorageService = new Service()
