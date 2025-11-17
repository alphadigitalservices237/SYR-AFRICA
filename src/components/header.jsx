import { ArrowRightIcon, Hamburger } from 'lucide-react';
import React, { useState } from 'react'
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { name: t('home'), path: '/' },
        { name: t('story'), path: '/story' },
        { name: t('services'), path: '/services' },
        { name: t('projects'), path: '/projets' },
        { name: t('contact'), path: '/contact' }
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };



    return (
        <section className="flex justify-center z-[999] sticky top-0 xl:px-44  items-center w-full">

            <div className='bg-black w-full lg:hidden'>
                <div className='px-4 flex justify-between items-center py-4'>

                    <div className='font-bold text-white'>{t('syr')} <span className='text-primary'>{t('africa')}</span> </div>

                    <div className="flex items-center gap-2">
                        <div className="flex bg-gray-800 p-1">
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`px-2 py-1 text-xs transition-colors ${i18n.language === 'en' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => changeLanguage('fr')}
                                className={`px-2 py-1 text-xs transition-colors ${i18n.language === 'fr' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'}`}
                            >
                                FR
                            </button>
                        </div>
                        <button onClick={() => setIsSidebarOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>


            <div className="w-full hidden lg:flex  max-w-[1100px]  p-3 lg:p-0 bg-black m-0  justify-between items-center ">

                <ul className='hidden lg:flex  px-2 lg:px-8 gap-4 lg:gap-8 justify-start  items-center'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.path} className={({ isActive }) => `hover:text-gray-300 text-sm lg:text-base ${isActive ? 'text-primary border-b-2 border-primary' : 'text-white'}`}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2">
                    <div className="flex bg-gray-800  p-1">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`px-3 py-1 text-sm  transition-colors ${i18n.language === 'en' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage('fr')}
                            className={`px-3 py-1 text-sm  transition-colors ${i18n.language === 'fr' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'}`}
                        >
                            FR
                        </button>
                    </div>
                    <NavLink to={"/contact"} className={"flex  font-medium hover:bg-white justify-center gap-2 items-center  bg-primary px-4 lg:px-8 py-2 lg:py-4 text-sm lg:text-base"} >
                        <span>{t('getQuote')}</span>
                        <ArrowRightIcon className="w-4  lg:w-5 h-5" />
                    </NavLink>
                </div>

            </div>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-[1000] lg:hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)}></div>
                    <div className="absolute top-0 right-0 w-64 h-full bg-black  w-full shadow-lg transform transition-transform duration-300 ease-in-out">
                        <div className="flex justify-between items-center p-4 border-b border-gray-700">
                            <div className='font-bold text-white'>{t('syr')} <span className='text-primary'>{t('africa')}</span></div>
                            <button onClick={() => setIsSidebarOpen(false)} className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className=" ">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => ` border-b border-gray-light p-4 flex gap-2 justify-start items-center hover:text-gray-300 text-base  ${isActive ? 'text-primary stroke-primary' : 'text-white fill-gray-light stroke-gray-light'}`}
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="10"
                                            fill="currentColor"
                                            viewBox="0 0 15 10"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M9.788 0 8.613 1.182l2.725 2.712L0 3.905l.002 1.667 11.306-.011L8.63 8.252 9.81 9.428l4.703-4.724z"
                                            ></path>
                                        </svg>
                                        <span className={({ isActive }) => isActive ? 'text-primary' : 'text-white'}>
                                            {item.name}

                                        </span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="p-4 border-t h-full border-gray-700 space-y-4">
                            <div className="flex justify-center e-full gap-2">
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className={`px-4 py-2 text-sm  md:w-auto w-1/2 transition-colors ${i18n.language === 'en' ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300 hover:text-white'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => changeLanguage('fr')}
                                    className={`px-4 py-2 text-sm  md:w-auto w-1/2  transition-colors ${i18n.language === 'fr' ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300 hover:text-white'}`}
                                >
                                    FR
                                </button>
                            </div>
                            <NavLink to={"/contact"} className={"flex font-medium hover:bg-white justify-center gap-2 items-center bg-primary px-4 py-2 text-base"} onClick={() => setIsSidebarOpen(false)}>
                                <span>{t('getQuote')}</span>
                                <ArrowRightIcon className="w-4 h-5" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Header
