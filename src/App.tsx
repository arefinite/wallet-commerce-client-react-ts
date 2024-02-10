import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/Route'

const App = () => {
  return <RouterProvider router={appRouter} />
}
export default App
