import { ArrowRightIcon } from 'lucide-react';
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
        <section className="flex justify-center z-[999] sticky top-0 px-4 md:px-44  items-center w-full">
            <div className="w-full flex max-w-[1100px]   bg-black m-0  justify-between items-center ">
                <ul className='flex  px-2 md:px-8 gap-4 md:gap-8 justify-start  items-center'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.path} className={({ isActive }) => `text-white hover:text-gray-300 text-sm md:text-base ${isActive ? 'border-b-2 border-primary' : ''}`}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
                <NavLink to={"/"} className={"flex  font-medium hover:bg-white justify-center gap-2 items-center  bg-primary px-4 md:px-8 py-2 md:py-4 text-sm md:text-base"} >
                    <span>Get a  Quote</span>
                    <ArrowRightIcon className="w-4 h-4 md:w-5 h-5" />
                </NavLink>

            </div>
        </section>
    )
}

export default Header
