

import React from 'react'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next';

const Team = () => {
    const { t } = useTranslation();
    return (
        <section className="flex justify-center z-10 relative bg-black  min-h-screen  pt-10 py-16   items-start w-full ">
            <div className="w-full flex max-w-[1450px] px-4 xl:px-44 m-0 p-0 justify-between items-center ">
                <div className="w-full flex flex-col gap-8 justify-between items-start">
                    <span className="border-l-2  border-primary text-white gap-2 pl-3 font-bold">{t("team")}</span>

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
                        <h3 className="text-2xl lg:text-3xl text-white max-w-lg font-bold">{t("teamSubtitle")}</h3>

                        {/* <NavLink to="/" className={"py-3 lg:py-5 flex gap-2 font-medium bg-primary text-black justify-center items-center px-6 lg:px-8"}>
                            <span>{t("learnMore")}</span>
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
                        </NavLink> */}

                    </div>

                    <div className='w-full flex md:flex-row flex-col gap-8 justify-start items-center'>

                        <div className='w-full lg:w-1/2 bg-white h-72 flex flex-col gap-4'>
                            <img src="/st josue/1.jpg" className="h-full w-full object-cover" />
                        </div>


                        <div className='w-full lg:w-1/2 bg-white h-72 flex flex-col gap-4'>
                            <img src="/st josue/2.jpg" className="h-full w-full object-cover" />
                        </div>


                    </div>

                    <div className='w-full flex md:flex-row  flex-col gap-8 justify-start items-center'>

                        <div className='w-full lg:w-1/2 bg-white h-72 flex flex-col gap-4'>
                            <img src="/st josue/18.jpg" className="h-full w-full object-cover" />
                        </div>


                        <div className='w-full lg:w-1/2 bg-white h-72 flex flex-col gap-4'>
                            <img src="/st josue/21.jpg" className="h-full w-full object-cover" />
                        </div>


                    </div>

                    <div className=' w-full bg-white   lg:mb-56 h-72 flex flex-col gap-4'>
                        <img src="/st josue/6.jpg" className="h-full w-full object-cover" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Team
