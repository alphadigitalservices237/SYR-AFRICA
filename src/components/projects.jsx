

import React, { useState, useRef } from 'react';
import ProjectCard from './projectCard';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const projects = [
        { id: 1, image: '/Charpente City Stade FEICOM/2.jpeg', title: 'Charpente City Stade FEICOM', description: t('project1Desc') },
        { id: 2, image: '/construction de citerne/1.jpeg', title: 'Construction de Citerne', description: t('project2Desc') },
        { id: 3, image: '/construction metalique/3.jpeg', title: 'Construction Métallique', description: t('project3Desc') },
        { id: 4, image: '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.31 (1).jpeg', title: 'Embeddings Style', description: t('project4Desc') },
        { id: 5, image: '/Mayonnaise ROMA/1.jpeg', title: 'Mayonnaise ROMA', description: t('project5Desc') },
        { id: 6, image: '/pont roulant/1.jpeg', title: 'Pont Roulant', description: t('project1Desc') },
        { id: 7, image: '/st josue/1.jpg', title: 'St Josué', description: t('project2Desc') },
        { id: 8, image: '/tuyauterie/1.jpeg', title: 'Tuyauterie', description: t('project3Desc') },
    ];

    const maxPage = Math.ceil(projects.length / 3) - 1;

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(maxPage, prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    return (
        <section className="flex relative justify-start z-10 lg:pb-23  min-h-[950px]  lg:min-h-[950px] 2xl:min-h-screen items-start w-full">
            <div className='w-full bg-primary flex justify-center   h-auto items-start min-h-[373px]'>
                <div className="w-full  relative flex flex-col py-8 md:py-16 max-w-[1450px] px-4 xl:px-44  m-0 p-0 justify-start items-start">

                    <span className="border-l-2 gap-2 pl-3 font-bold">{t("projectsHome")}</span>
                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-4 md:py-8 gap-4 md:gap-0">

                        <h2 className="text-2xl md:text-4xl font-bold text-balance max-w-lg">{t("projectsHomeTitle")}</h2>
                        <div className='flex justify-center gap-2 items-center'>

                            <button onClick={prevSlide} className='bg-black text-white hover:bg-white hover:text-black cursor-pointer px-3 md:px-5 py-2 flex justify-center items-center gap-2 transition-colors duration-300'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 21 20"
                                >
                                    <path
                                        d="m7.969 14.714 1.175-1.182L6.42 10.82l11.338-.011-.002-1.667-11.306.011 2.679-2.692-1.181-1.175-4.703 4.725z"
                                    ></path>
                                </svg>
                            </button>
                            <button onClick={nextSlide} className='bg-black text-white hover:bg-white hover:text-black cursor-pointer px-3 md:px-5 py-2 flex justify-center items-center gap-2 transition-colors duration-300'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 21 20"
                                >
                                    <path
                                        d="m13.032 5.286-1.176 1.182L14.58 9.18l-11.338.011.002 1.667 11.307-.011-2.68 2.692 1.181 1.175 4.703-4.725z"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                    </div>

                </div>
                        <div className=" absolute w-full flex justify-center items-center overflow-x-hidden   top-[20%] md:top-[15%] xl:top-[20%] left-0">

               <div className="w-full  relative flex flex-col py-8 md:py-16 max-w-[1450px] px-0 md:px-4 xl:px-44  m-0 p-0 justify-start items-start">
                        <div
                            ref={carouselRef}
                            className="flex gap-2 md:gap-4 lg:gap-6 transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                        >
                            {projects.map((project) => (
                                <div key={project.id} className="flex-shrink-0 w-1/3">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
            </div>

        </section>
    )
}

export default Projects