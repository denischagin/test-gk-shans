import type { TProduct } from '@/entities/product'

export const isProduct = (product: unknown): product is TProduct => {
  if (typeof product !== 'object' || product === null) {
    return false
  }

  const p = product as Record<string, unknown>

  const hasValidBasicFields =
    typeof p.available === 'boolean' &&
    typeof p.id === 'number' &&
    typeof p.name === 'string' &&
    (p.preview_picture === undefined ||
      typeof p.preview_picture === 'string') &&
    typeof p.price === 'number' &&
    typeof p.price_discount === 'number' &&
    typeof p.quantity === 'number' &&
    typeof p.reviews === 'number'

  const hasValidCharacteristics =
    Array.isArray(p.characteristics) &&
    p.characteristics.every((char: unknown) => {
      if (typeof char !== 'object' || char === null) return false
      const c = char as Record<string, unknown>
      return (
        typeof c.label === 'string' &&
        typeof c.name === 'string' &&
        typeof c.value === 'string'
      )
    })

  const hasValidLabels = () => {
    if (typeof p.labels !== 'object' || p.labels === null) return false
    const l = p.labels as Record<string, unknown>
    return (
      (l.discount === undefined || typeof l.discount === 'string') &&
      (l.new === undefined || typeof l.new === 'string') &&
      (l.first_weapon === undefined || typeof l.first_weapon === 'string')
    )
  }

  const hasValidCml2Traits = () => {
    if (!('cml2_traits' in p)) return true
    if (typeof p.cml2_traits !== 'object' || p.cml2_traits === null)
      return false
    const ct = p.cml2_traits as Record<string, unknown>
    return typeof ct.value === 'string'
  }

  return (
    hasValidBasicFields &&
    hasValidCharacteristics &&
    hasValidLabels() &&
    hasValidCml2Traits()
  )
}

export const parseArrayProducts = (value: string) => {
  try {
    const parsedResult = JSON.parse(value)
    if (
      Array.isArray(parsedResult) &&
      parsedResult.every((item) => isProduct(item))
    ) {
      return parsedResult
    }
  } catch (error) {
    console.error('Error parsing products from localStorage:', error)
  }
}
