import { HomePage } from '@/pages/home'
import { ROUTES } from '@/shared/config/routes'
import { useRoutes } from 'react-router'
import { AppLayout } from '../layout/AppLayout'

export const Router = () =>
  useRoutes([
    {
      path: ROUTES.home,
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        // {
        //   path: '/user/:username',
        //   element: <UserPage />,
        // },
      ],
    },
  ])
