import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-lg bg-orange-50'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className='cursor-pointer'>
          <Link to={'/'}>
            <Logo w={55} h={55} />
          </Link>
        </div>
        <div className='hidden lg:flex ml-20'>
          <div className='text-green-800 px-2 cursor-pointer '>
            Plants
          </div>
          <div className='text-green-800 px-2 cursor-pointer '>
            Seeds
          </div>
          <div className='text-green-800 px-2 cursor-pointer '>
            Eqipments
          </div>
          <div className='text-green-800 px-2 cursor-pointer '>
            Pots & Planters
          </div>
          <div className='text-green-800 px-2 cursor-pointer '>
            Consult
          </div>
        </div>

        <div className='flex items-center w-full justify-end lg:justify-between max-w-sm rounded-full'>
          <div className='hidden lg:flex w-full'>
            <input type='text' placeholder='Search for Plants, Seeds, Eqipments etc...' className='w-full outline-none px-4 py-1 rounded-l-full' />
            <div className='text-md text-white min-w-[50px] h-8 bg-green-800 flex items-center justify-center rounded-r-full cursor-pointer'>
              <GrSearch />
            </div>
          </div>
          {/* <div className='text-xl px-2 cursor-pointer'>
            <FaRegUserCircle />
          </div> */}
          {/* <div className='text-xl px-2 cursor-pointer'>
            <FaShoppingCart />
          </div> */}
          <div>
            <Link to={'/login'} className='px-3 py-2 ml-2 rounded-full text-white bg-green-800 hover:bg-green-900'>Login</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header