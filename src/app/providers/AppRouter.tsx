import { AppLayout } from '@/app/ui'
import { CartPage, FavoritesPage, ProductCardPage, ProductsPage } from '@/pages'
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
        { path: PATHS.products + '/:productId', element: <ProductCardPage /> },
        {
          path: '*',
          element: (
            <div className="container">
              <h1 className="text--size-3xl">Страница не найдена</h1>
            </div>
          ),
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
