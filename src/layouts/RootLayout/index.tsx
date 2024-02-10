import { Outlet } from 'react-router-dom'
import Footer from '../../components/Shared/Footer'
import Header from '../../components/Shared/Header'

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default RootLayout
