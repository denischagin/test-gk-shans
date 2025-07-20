import { useMemo } from 'react'

export const useSearch = <T extends Record<string, unknown>>(
  items: T[] | undefined,
  fields: (keyof T)[],
  search: string,
) => {
  const searchItem = search.trim().toLowerCase()

  return useMemo(() => {
    return items?.filter((item) => {
      return fields.every((field) => {
        return String(item[field]).trim().toLowerCase().includes(searchItem)
      })
    })
  }, [items, fields, search])
}
