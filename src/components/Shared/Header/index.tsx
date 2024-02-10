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
        <nav className='hidden md:block'>
          <ul className='flex  gap-6 text-white'>
            <li>
              <NavLink to='/cart'>All Products</NavLink>
            </li>

            <li>
              <NavLink to='/cart'>Purchased List</NavLink>
            </li>

            <li>
              <NavLink to='/cart'>Cart</NavLink>
            </li>

            <li>
              <NavLink to='/cart'>Logout</NavLink>
            </li>
          </ul>
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
            className={`fixed  z-50 top-0 right-0 h-screen bg-white w-[200px] px-4 pt-4 shadow-md transition-transform duration-200 ease-in-out ${
              showMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex justify-end'>
              <FaXmark
                className='text-black cursor-pointer'
                onClick={toggleMenu}
              />
            </div>
            <ul className='mt-4 flex flex-col gap-2'>
              <li>
                <NavLink to='/cart'>All Products</NavLink>
              </li>

              <li>
                <NavLink to='/cart'>Purchased List</NavLink>
              </li>

              <li>
                <NavLink to='/cart'>Cart</NavLink>
              </li>

              <li>
                <NavLink to='/cart'>Logout</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </header>
  )
}

export default Header
