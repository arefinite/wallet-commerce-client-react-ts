import { FaCoins } from 'react-icons/fa6'
import { IoMenu } from 'react-icons/io5'
import { FaXmark } from 'react-icons/fa6'

import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className='bg-darker'>
      <section className='wrapper h-20 items-center flex justify-between'>
        <div className='flex items-center gap-3'>
          <FaCoins className='text-xl md:text-2xl text-stone-200' />
          <h1 className='text-stone-200 text-xl md:text-2xl drop-shadow-sm tracking-tight'>
            <Link to='/'>Wallet Commerce</Link>
          </h1>
        </div>
        <nav className='hidden md:flex md:gap-4 md:items-center'>
          <ul className='flex  gap-6 text-white'>
            <li>
              <NavLink to='/products'>All Products</NavLink>
            </li>

            <li>
              <NavLink to='/purchased-items'>Purchased History</NavLink>
            </li>

            <li>
              <NavLink to='/cart'>Cart</NavLink>
            </li>
          </ul>
          <button className='bg-dark text-white rounded px-3 py-1'>
            Logout
          </button>
        </nav>
        <nav className='md:hidden'>
          <IoMenu
            className='text-3xl text-stone-200 cursor-pointer'
            onClick={toggleMenu}
          />

          {showMenu && (
            <div
              className={`fixed inset-0 bg-black bg-opacity-50  transition-opacity duration-200`}
              onClick={toggleMenu}
            ></div>
          )}

          <div
            className={`fixed  z-50 top-0 right-0 h-screen bg-white w-[200px] pt-4 shadow-md transition-transform duration-200 ease-in-out ${
              showMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex justify-between px-4 items-center border-b border-dotted border-lighter pb-3'>
              <div>Welcome!</div>
              <div className='flex justify-end'>
                <FaXmark
                  className='text-black cursor-pointer'
                  onClick={toggleMenu}
                />
              </div>
            </div>
            <div className='px-4'>
              <ul className='mt-4 flex flex-col gap-2'>
                <li>
                  <NavLink to='/products' onClick={() => setShowMenu(false)}>
                    All Products
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/purchased-items'
                    onClick={() => setShowMenu(false)}
                  >
                    Purchased History
                  </NavLink>
                </li>

                <li>
                  <NavLink to='/cart' onClick={() => setShowMenu(false)}>
                    Cart
                  </NavLink>
                </li>
              </ul>
              <button className='bg-dark mt-2 text-white rounded px-3 py-1'>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </section>
    </header>
  )
}

export default Header
