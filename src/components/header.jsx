import { ArrowRightIcon, Hamburger } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router';

const Header = () => {
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Story', path: '/story' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' }
    ];



    return (
        <section className="flex justify-center z-[999] sticky top-0 lg:px-4 md:px-44  items-center w-full">

            <div className='bg-black w-full lg:hidden'>
                <div className='px-4 flex justify-between items-center py-4'>

                    <div className='font-bold text-white'>SYR <span className='text-primary'>AFRICA</span> </div>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </button>

                </div>
            </div>


            <div className="w-full hidden lg:flex  max-w-[1100px]  p-3 lg:p-0 bg-black m-0  justify-between items-center ">

                <ul className='hidden lg:flex  px-2 md:px-8 gap-4 md:gap-8 justify-start  items-center'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.path} className={({ isActive }) => `text-white hover:text-gray-300 text-sm md:text-base ${isActive ? 'border-b-2 border-primary' : ''}`}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
                <NavLink to={"/"} className={"flex  font-medium hover:bg-white justify-center gap-2 items-center  bg-primary px-4 md:px-8 py-2 md:py-4 text-sm md:text-base"} >
                    <span>Get a  Quote</span>
                    <ArrowRightIcon className="w-4  md:w-5 h-5" />
                </NavLink>

            </div>

            <div className=''>
                </div>            

        </section>
    )
}

export default Header
