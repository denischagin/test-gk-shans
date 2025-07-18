export type TCharacteristic = {
  label: string
  name: string
  value: string
}

export type TProductLabels = {
  discount?: string
  new?: string
  first_weapon?: string
}

export type TCML2Traits = {
  value: string
}

export type TProduct = {
  available: boolean
  characteristics: TCharacteristic[]
  id: number
  labels: TProductLabels
  name: string
  preview_picture?: string
  price: number
  price_discount: number
  quantity: number
  reviews: number
  cml2_traits?: TCML2Traits
}

export type TProductsResponse = {
  count_items: number
  items: TProduct[]
  per_page: number
}
