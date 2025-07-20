import type { TSortDirection } from '@/shared/types'
import { useMemo } from 'react'

export const useSort = <T extends Record<string, unknown>>(
  items: T[] | undefined,
  field: keyof T | 'default',
  direction: TSortDirection | 'default',
) => {
  return useMemo(() => {
    if (direction === 'default' || !items) return items

    const result = [...items]
    result.sort((a, b) => {
      const [first, second] = direction === 'ASC' ? [a, b] : [b, a]
      const firstField = first[field]
      const secondField = second[field]

      console.log(firstField)

      if (typeof firstField === 'string' && typeof secondField === 'string') {
        return firstField.localeCompare(secondField)
      }

      if (typeof firstField === 'number' && typeof secondField === 'number') {
        return firstField - secondField
      }

      return JSON.stringify(firstField).localeCompare(
        JSON.stringify(secondField),
      )
    })

    return result
  }, [items, field, direction])
}
