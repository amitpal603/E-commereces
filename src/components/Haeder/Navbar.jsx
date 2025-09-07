import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menu, setMenu] = useState(false)
  
  const toggleMenu = () => {
    setMenu(!menu)
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <>
      <div className='fixed w-full top-0 left-0 z-50'>
        <nav className='bg-[#475492] px-4 py-3'>
          {/* Desktop Layout */}
          <div className='flex justify-between items-center'>
            {/* Logo Section */}
            <div className='flex gap-2 sm:gap-4 justify-center items-center'>
              <img 
                src="src/assets/shopping-cart.png" 
                alt="Logo"
                className='h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full hover:cursor-pointer shadow-lg hover:shadow-lg hover:shadow-[#677bab] transition-shadow duration-300'
              />
              <h1 className='text-lg sm:text-xl lg:text-2xl text-white font-bold'>E-commerce</h1>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className='hidden md:block flex-1 max-w-md mx-4'>
              <input 
                className='focus:shadow-lg focus:shadow-[#677bab] text-white h-10 lg:h-12 w-full outline-none pl-3 placeholder:font-bold placeholder:text-white rounded-md border-2 bg-transparent'
                type="text" 
                placeholder='Search for Product...' 
              />
            </div>

            {/* Desktop Navigation Links */}
            <ul className='hidden lg:flex justify-center items-center gap-7'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.to}
                    className={({ isActive }) =>
                      `text-lg transition-colors duration-200 ${
                        isActive 
                          ? 'font-bold text-[#159ab7] underline' 
                          : 'text-white hover:text-[#159ab7]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Cart and Auth Buttons */}
            <div className='flex justify-center items-center gap-2 sm:gap-4'>
              {/* Cart */}
              <div className='flex justify-center items-center gap-1 relative'>
                <h1 className='text-xl sm:text-2xl hover:cursor-pointer text-white hover:text-[#159ab7] transition-colors duration-200'>
                  <FaCartShopping />
                </h1>
                <span className='absolute -top-2 -right-2 h-5 w-5 sm:h-6 sm:w-6 flex justify-center items-center rounded-full animate-bounce bg-purple-500 text-white text-xs'>
                  0
                </span>
              </div>

              {/* Auth Buttons - Hidden on small screens */}
              <div className='hidden sm:flex justify-center items-center gap-2 lg:gap-5'>
                <button className='text-white hover:text-white h-8 lg:h-10 px-3 lg:px-6 border-2 rounded-md hover:bg-green-500 hover:font-bold cursor-pointer transition-all duration-200 text-sm lg:text-base'>
                  Sign-Up
                </button>
                <button className='text-white h-8 lg:h-10 px-3 lg:px-6 border-2 rounded-md hover:bg-green-500 hover:text-white hover:font-bold cursor-pointer transition-all duration-200 text-sm lg:text-base'>
                  Login
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className='lg:hidden text-white text-2xl hover:text-[#159ab7] transition-colors duration-200'
                aria-label="Toggle menu"
              >
                {menu ? <IoClose /> : <CgMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className='md:hidden mt-3'>
            <input 
              className='focus:shadow-lg focus:shadow-[#677bab] text-white h-10 w-full outline-none pl-3 placeholder:font-bold placeholder:text-white rounded-md border-2 bg-transparent'
              type="text" 
              placeholder='Search for Product...' 
            />
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {menu && (
          <div className='lg:hidden bg-[#475492] border-t-2 border-[#677bab] shadow-lg'>
            {/* Mobile Navigation Links */}
            <ul className='flex flex-col py-4'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.to}
                    onClick={() => setMenu(false)}
                    className={({ isActive }) =>
                      `block px-6 py-3 text-lg transition-colors duration-200 ${
                        isActive 
                          ? 'font-bold text-[#159ab7] bg-white bg-opacity-10' 
                          : 'text-white hover:text-[#159ab7] hover:bg-white hover:bg-opacity-5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Auth Buttons */}
            <div className='flex flex-col gap-3 px-6 pb-4 sm:hidden'>
              <button className='text-white hover:text-white h-10 w-full border-2 rounded-md hover:bg-green-500 hover:font-bold cursor-pointer transition-all duration-200'>
                Sign-Up
              </button>
              <button className='text-white h-10 w-full border-2 rounded-md hover:bg-green-500 hover:text-white hover:font-bold cursor-pointer transition-all duration-200'>
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar