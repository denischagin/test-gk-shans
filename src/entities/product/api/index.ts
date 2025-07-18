import type { TProductsResponse } from '@/entities/product/types'
import { baseApi } from '@/shared/api'

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchAllProducts: build.query<TProductsResponse, void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
  }),
})

export const { useFetchAllProductsQuery } = productApi
