import type { TFilters } from '@/shared/types'
import { useMemo } from 'react'

export const useFilters = <T extends Record<string, unknown>>(
  items: T[] | undefined,
  filters: TFilters<T>,
) => {
  return useMemo(() => {
    return items?.filter((item) => {
      return Object.entries(filters).every(([key, filterItem]) => {
        const field = item[key]

        if (filterItem?.min !== undefined && Number(field) <= filterItem.min) {
          return false
        }
        if (filterItem?.max !== undefined && Number(field) >= filterItem.max) {
          return false
        }
        if (
          filterItem?.contains !== undefined &&
          field !== filterItem.contains
        ) {
          return false
        }
        return true
      })
    })
  }, [items, filters])
}
