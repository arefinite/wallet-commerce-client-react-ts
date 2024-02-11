import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/Route'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return <>
    <RouterProvider router={appRouter} />
    <Toaster/>
  </>
}
export default App
