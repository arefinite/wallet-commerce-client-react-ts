import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import {
  Checkout,
  Home,
  Login,
  NotFound,
  PurchasedItems,
  Register,
} from '../pages'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'purchased-items',
        element: <PurchasedItems />,
      },
    ],
  },
])
