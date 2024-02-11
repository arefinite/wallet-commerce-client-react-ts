import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/Route'
import { Toaster } from 'react-hot-toast'
import { AppContextProvider } from './context/AppContext'

const App = () => {
  return (
    <>
      <AppContextProvider>
        <RouterProvider router={appRouter} />
        <Toaster />
      </AppContextProvider>
    </>
  )
}
export default App
