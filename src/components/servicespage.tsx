


import React, { useState } from 'react'
import { NavLink } from 'react-router'
import ServiceCard from './ServiceCard'

const Servicespage = () => {
    const [activeCategory, setActiveCategory] = useState('Metal Construction & Fabrication');

    const categories = [
        {
            name: 'Metal Construction & Fabrication',
            services: [
                { name: 'Structural Steel Fabrication', description: 'Custom steel structures and frameworks', image: '/hero2.jpg' },
                { name: 'Welding Services', description: 'Professional welding for all metal types', image: '/hero2.jpg' }
            ]
        },
        {
            name: 'Industrial Systems & Equipment',
            services: [
                { name: 'Conveyor Systems', description: 'Industrial conveyor and material handling', image: '/hero3.jpg' },
                { name: 'Process Equipment', description: 'Custom industrial machinery and equipment', image: '/hero3.jpg' }
            ]
        },
        {
            name: 'Architectural Metalworks',
            services: [
                { name: 'Facade Systems', description: 'Architectural metal facades and cladding', image: '/hero4.jpg' },
                { name: 'Staircases & Railings', description: 'Custom staircases and safety railings', image: '/hero4.jpg' }
            ]
        },
        {
            name: 'Marine & Maintenance Services',
            services: [
                { name: 'Ship Repair', description: 'Marine vessel repair and maintenance', image: '/hero2.jpg' },
                { name: 'Offshore Structures', description: 'Maintenance of offshore platforms', image: '/hero2.jpg' }
            ]
        }
    ];

    return (
        <div className='min-h-screen flex-col  w-full flex justify-start items-start'>
            <div className='relative  w-full -top-[56px] h-[50vh]  object-cover '>

                <img src={"./hero2.jpg"} className='relative z-0 flex h-full w-full  object-cover justify-center items-center' />
            </div>

            <section className="flex justify-start xl:justify-center z-10      pb-8 xl:pb-30 items-center w-full">
                <div className="w-full flex flex-col max-w-[1450px] px-4 xl:px-44 m-0 p-0 justify-between items-center ">
                    <div className="w-full flex flex-col gap-8 lg:gap-17 justify-between items-start">
                        <span className="border-l-2  border-primary text-black gap-2 pl-3 font-bold"> Services </span>

                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
                            <h3 className="text-2xl lg:text-3xl text-black  max-w-sm font-bold">We have been processing steel for about 15 years</h3>

                            <NavLink to="/" className={"py-3 lg:py-5 flex gap-2 font-medium bg-primary justify-center items-center px-6 lg:px-8"}>
                                <span>learn more</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    fill="none"
                                    viewBox="0 0 21 21"
                                >
                                    <path
                                        fill="#000"
                                        d="m13.032 5.786-1.176 1.182L14.58 9.68l-11.338.011.002 1.667 11.307-.011-2.68 2.692 1.181 1.175 4.703-4.725z"
                                    ></path>
                                </svg>
                            </NavLink>

                        </div>

                    </div>
                    <div className='w-full mt-8 lg:mt-36  flex  flex-col gap-7 text-center justify-center items-center '>

                        <h2 className='text-balance  text-2xl lg:text-4xl font-semibold  max-w-xl'>A Brought service categories to deliver quality work</h2>
                        <span className='text-gray-light'>Click on one category to view related service</span>

                     <div className="w-full mt-8">
                        
                            <div className="hidden lg:flex  flex-wrap  justify-start gap-4 mb-8">
                                {categories.map((category) => (
                                    <button
                                        key={category.name}
                                        onClick={() => setActiveCategory(category.name)}
                                        className={`px-6 py-3 flex-shrink-0 font-medium transition-colors ${
                                            activeCategory === category.name
                                                ? 'bg-black text-white'
                                                : ' text-black hover:bg-neutral-400/20'
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Select */}
                            <div className="lg:hidden w-full mb-8 relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    className="absolute right-4 top-3 pointer-events-none z-10"
                                >
                                    <path fill="#E6E6E6" d="m15 7.5-5-5-5 5zm0 5-5 5-5-5z"></path>
                                </svg>
                                <select
                                    value={activeCategory}
                                    onChange={(e) => setActiveCategory(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-none bg-black text-white appearance-none"
                                >
                                    {categories.map((category) => (
                                        <option key={category.name} value={category.name}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col lg:grid mb-56 lg:grid-cols-3 w-full gap-4 lg:gap-6 mt-8 lg:mt-10 h-auto lg:h-[450px] ">
                                {categories
                                    .filter((category) => activeCategory === category.name)
                                    .map((category) =>
                                        category.services.map((service) => (
                                            <ServiceCard
                                                key={service.name}
                                                name={service.name}
                                                description={service.description}
                                                image={service.image}
                                            />
                                        ))
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicespage
