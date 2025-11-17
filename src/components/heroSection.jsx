
import { ArrowLeft, ChevronLeft } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/Construction métallique à Douala/1.jpeg',
        '/Charpente City Stade FEICOM/1.jpeg',
        '/st josue/1.jpg'
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col  justify-center items-center w-full relative  gap-8 '>
            <div className='relative flex  justify-center  w-full items-center h-[40vh] lg:h-[80vh] lg:-top-[55px]'>

                <img src={images[currentImageIndex]} className='relative z-0 flex h-full w-full  object-cover justify-center items-center' />
                <div className='absolute inset-0 w-full bg-gradient-to-b from-transparent to-black/50 z-10'></div>


                <div className='absolute  w-full   z-50  flex  px-4 xl:px-0 h-full flex-col justify-end pb-8 lg:pb-14 items-center'>
                    <div className=' max-w-[1100px]  left-0 w-full px-4 lg:px-0 '>

                        <div className='w-full hidden lg:flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0'>

                            <div className='border-l-2 border-primary px-4   flex max-w-md gap-2 flex-col justify-start items-start'>
                                <h2 className='text-sm lg:text-base text-primary font-bold'>{t("companyTitle")}</h2>
                                <p className='text-sm lg:text-base text-white'>{t("companyDescription")}</p>
                            </div>
                            <div className='flex justify-center gap-2 items-center'>

                                <button onClick={prevImage} className='bg-primary hover:bg-white transition cursor-pointer px-3 lg:px-5 py-2 flex justify-center items-center gap-2 '>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 21 20"
                                    >
                                        <path
                                            fill="#000"
                                            d="m7.969 14.714 1.175-1.182L6.42 10.82l11.338-.011-.002-1.667-11.306.011 2.679-2.692-1.181-1.175-4.703 4.725z"
                                        ></path>
                                    </svg>
                                </button>
                                <button onClick={nextImage} className='bg-primary hover:bg-white transition cursor-pointer px-3 lg:px-5 py-2 flex justify-center items-center gap-2 '>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 21 20"
                                    >
                                        <path
                                            fill="#000"
                                            d="m13.032 5.286-1.176 1.182L14.58 9.18l-11.338.011.002 1.667 11.307-.011-2.68 2.692 1.181 1.175 4.703-4.725z"
                                        ></path>
                                    </svg>
                                </button>

                            </div>



                        </div>


                    </div>
                </div>

                

            </div>

                       <div className='w-full  relative  px-4 flex lg:hidden flex-col lg:flex-row justify-start items-start lg:items-center gap-4 lg:gap-0'>

                            <div className='border-l-2 border-primary px-4   flex max-w-md gap-2 flex-col justify-start items-start'>
                                <h2 className='text-sm lg:text-base text-primary font-bold'>{t("companyTitle")}</h2>
                                <p className='text-sm lg:text-base text-black'>{t("companyDescription")}</p>
                            </div>
                            <div className='flex justify-end w-full gap-2 items-center'>

                                <button onClick={prevImage} className='bg-primary hover:bg-white transition cursor-pointer px-3 lg:px-5 py-2 flex justify-center items-center gap-2 '>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 21 20"
                                    >
                                        <path
                                            fill="#000"
                                            d="m7.969 14.714 1.175-1.182L6.42 10.82l11.338-.011-.002-1.667-11.306.011 2.679-2.692-1.181-1.175-4.703 4.725z"
                                        ></path>
                                    </svg>
                                </button>
                                <button onClick={nextImage} className='bg-primary hover:bg-white transition cursor-pointer px-3 lg:px-5 py-2 flex justify-center items-center gap-2 '>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 21 20"
                                    >
                                        <path
                                            fill="#000"
                                            d="m13.032 5.286-1.176 1.182L14.58 9.18l-11.338.011.002 1.667 11.307-.011-2.68 2.692 1.181 1.175 4.703-4.725z"
                                        ></path>
                                    </svg>
                                </button>

                            </div>



                        </div>
        </div>
    )
}

export default HeroSection
