export type TFiltersItem<T extends Record<string, any>> = {
  min?: number
  max?: number
  contains?: T[keyof T]
}

export type TFilters<T extends Record<string, any>> = Partial<
  Record<keyof T, TFiltersItem<T>>
>

export type TSortDirection = 'ASC' | 'DESC'
