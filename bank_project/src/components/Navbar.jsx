import { useState } from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { navLinks } from '../constants/constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className=' w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank"
        className=' w-[124px] h-8' />
      <ul className=' list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base text-white ${index === navLinks.length - 1 ? 'mr-0' : "mr-10"}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className=' sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? menu : close}
          className='w-7 h-7 object-contain'
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div className={`${toggle ? 'flex' : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className=' list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-base text-white ${index === navLinks.length - 1 ? 'mr-0' : "mr-10"}`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar