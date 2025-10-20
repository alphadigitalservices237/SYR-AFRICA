
import React from 'react'
import { NavLink } from 'react-router'

const CTA = () => {
    return (
        <section className="flex relative justify-start z-10   items-start w-full">
            <div className=' absolute  h-[300px] md:h-[440px] overflow-hidden w-full'>
                <img src='./hero2.jpg' className='h-full w-full   object-cover' />

            </div>
            <div className='w-full z-10 bg-gradient-to-r   via-primary/90 to-[#FF7C7E]/90 from-primary/90 flex justify-center    items-start h-[300px] md:h-[440px]'>
                <div className="w-full  relative flex flex-col md:flex-row justify-between  max-w-[1450px] px-4 md:px-44  h-full m-0 p-0  items-start">
                    <div className='w-full md:w-1/2   py-8 md:py-16 flex flex-col gap-4 md:gap-6 justify-center  items-start h-full'>

                        <h2 className='text-3xl md:text-5xl font-bold max-w-sm text-balance'>Ready to work
                            with us ?</h2>

                        <NavLink to="/" className={"py-3 md:py-5 flex gap-2 w-full max-w-xs bg-white font-medium justify-center items-center px-6 md:px-8"}>
                            <span>Get a quote today</span>
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
                    <div className='w-full md:w-1/2  flex justify-center items-center h-full'>

                        <img src='./worker.png' className='h-[400px] md:h-[700px] -top-[25%] md:-top-[59.55%]   absolute object-cover' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
