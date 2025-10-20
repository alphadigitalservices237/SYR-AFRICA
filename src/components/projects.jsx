

import React, { useState, useRef } from 'react';
import ProjectCard from './projectCard';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const projects = [
        { id: 1, image: '/project1.jpg', title: 'Construction of a 5-storey building in Nairobi', description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.' },
        { id: 2, image: '/project2.jpg', title: 'Reconstruction Salle de Fête Omnisport', description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.' },
        { id: 3, image: '/project3.jpg', title: 'Another Project', description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.' },
        { id: 4, image: '/project2.jpg', title: 'Fourth Project', description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.' },
        { id: 5, image: '/project1.jpg', title: 'Fifth Project', description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= projects.length - 3 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? projects.length - 3 : prevIndex - 1
        );
    };

    return (
        <section className="flex relative justify-start z-10 pb-23   min-h-screen items-start w-full">
            <div className='w-full bg-primary flex justify-center   h-auto items-start min-h-[373px]'>
                <div className="w-full  relative flex flex-col py-8 md:py-16 max-w-[1450px] px-4 md:px-44  m-0 p-0 justify-start items-start">

                    <span className="border-l-2 gap-2 pl-3 font-bold"> Projects </span>
                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-4 md:py-8 gap-4 md:gap-0">

                        <h2 className="text-2xl md:text-4xl font-bold text-balance max-w-lg">They Trusted us For our Value delivery expertise</h2>
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
                        <div className=" absolute w-full flex justify-center items-center overflow-x-hidden   top-[15%] md:top-[20%] left-0">

                <div className="w-full  relative flex flex-col py-8 md:py-16 max-w-[1450px] px-4 md:px-44  m-0 p-0 justify-start items-start">
                        <div
                            ref={carouselRef}
                            className="flex gap-4 md:gap-6 transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / 2.5)}%)` }}
                        >
                            {projects.map((project) => (
                                <div key={project.id} className="flex-shrink-0 w-4/5 md:w-2/5">
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
