import { AppLayout } from '@/app/ui'
import { CartPage, FavoritesPage, ProductsPage } from '@/pages'
import { PATHS } from '@/shared/constants'
import type { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const AppRouter: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: PATHS.products,
          element: <ProductsPage />,
        },
        {
          path: PATHS.cart,
          element: <CartPage />,
        },
        {
          path: PATHS.favorites,
          element: <FavoritesPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
