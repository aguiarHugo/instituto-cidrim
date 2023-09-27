import React from 'react'

//React icons
import { FiInstagram } from 'react-icons/fi'
import { FiFacebook } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='w-full border-b-2 border-primary fixed z-100 bg-secondary' style={{ zIndex: 9999 }}>
        <div className='flex items-center justify-between sm:px-4 py-1'>
            <a href="">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className='w-[100px]'
                />
            </a>
            {/* DESKTOP */}
            <div className='hidden md:flex'>
                <ul className='flex gap-x-16 text-primary text-[18px] lg:text-[20px]'>
                    <li>
                        <a 
                        className='hover:opacity-70 transition duration-300'
                        href="#about"
                        >
                            Quem somos
                        </a>
                    </li>
                    <li>
                        <a 
                        className='hover:opacity-70 transition duration-300'
                        href="#services"
                        >
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a 
                        className='hover:opacity-70 transition duration-300'
                        href="#contact"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
            <div className='p-4 hidden md:flex'>
                <ul className='flex gap-x-10 justify-end text-primary'>
                    <li>
                        <a 
                            href="https://www.instagram.com/institutocidrim/" 
                            target='_blank'
                            className='hover:opacity-70 transition duration-300'
                        >
                            <FiInstagram size={24} />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="" 
                            target='_blank'
                            className='hover:opacity-70 transition duration-300'
                        >
                            <FiFacebook size={24} />
                        </a>
                    </li>
                </ul>
            </div>

            {/*MOBILE*/}
            <div className='md:hidden'>
                <button 
                    className='px-4'
                    onClick={() => {}}
                >
                    <GiHamburgerMenu color='#b29956' size={32} />
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar