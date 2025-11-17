import React, { useState } from 'react'
import { NavLink } from 'react-router'
import ProjectItem from './ProjectItem'
import ProjectModal from './ProjectModal'
import { useTranslation } from 'react-i18next';

const ProjetsPage = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleLearnMore = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const projects = [
        {
            title: 'Charpente City Stade FEICOM',
            category: t('boilerMakingForging'),
            description: 'Metal framework construction for City Stade FEICOM - completion works for a city stadium.',
            image: '/Charpente City Stade FEICOM/1.jpeg',
            images: [
                '/Charpente City Stade FEICOM/1.jpeg',
                '/Charpente City Stade FEICOM/2.jpeg',
                '/Charpente City Stade FEICOM/3.jpeg',
                '/Charpente City Stade FEICOM/4.jpeg'
            ]
        },
        {
            title: 'TRADEX Fuel Stations',
            category: t('boilerMakingForging'),
            description: 'Refurbishment and maintenance of TRADEX fuel stations across Cameroon.',
            image: '/tradex/WhatsApp Image 2025-11-16 at 14.25.59 (2).jpeg'
        },
        {
            title: 'Citerne de Pétrole',
            category: t('boilerMakingForging'),
            description: 'Oil tank construction and installation for industrial facilities.',
            image: '/Citerne de pétrole/1.jpeg'
        },
        {
            title: 'St Josué Hall Reconstruction',
            category: t('boilerMakingForging'),
            description: 'Complete reconstruction of St Josué Hall at Omnisport, Cameroon with modern metal structures.',
            image: '/st josue/1.jpg',
            images: [
                '/st josue/1.jpg',
                '/st josue/2.jpg',
                '/st josue/3.jpg',
                '/st josue/4.jpg',
                '/st josue/6.jpg',
                '/st josue/7.jpg',
                '/st josue/8.jpg',
                '/st josue/9.jpg',
                '/st josue/10.jpg',
                '/st josue/11.jpg',
                '/st josue/12.jpg',
                '/st josue/13.jpg',
                '/st josue/14.jpg',
                '/st josue/15.jpg',
                '/st josue/16.jpg',
                '/st josue/17.jpg',
                '/st josue/18.jpg',
                '/st josue/19.jpg',
                '/st josue/20.jpg',
                '/st josue/21.jpg'
            ]
        },
        {
            title: 'Construction Métallique à Douala',
            category: t('boilerMakingForging'),
            description: 'Metal construction projects in Douala, including buildings and industrial facilities.',
            image: '/Construction métallique à Douala/1.jpeg',
            images: [
                '/Construction métallique à Douala/1.jpeg',
                '/Construction métallique à Douala/2.jpeg',
                '/Construction métallique à Douala/3.jpeg',
                '/Construction métallique à Douala/4.jpeg',
                '/Construction métallique à Douala/5.jpeg',
                '/Construction métallique à Douala/6.jpeg'
            ]
        },
        {
            title: 'Gaz à Jourdin',
            category: t('boilerMakingForging'),
            description: 'Gas installation and metal fabrication project at Jourdin facility.',
            image: '/Gaz a jourdin/1.jpeg',
            images: [
                '/Gaz a jourdin/1.jpeg',
                '/Gaz a jourdin/2.jpeg',
                '/Gaz a jourdin/3.jpeg',
                '/Gaz a jourdin/4.jpeg',
                '/Gaz a jourdin/5.jpeg',
                '/Gaz a jourdin/6.jpeg',
                '/Gaz a jourdin/7.jpeg',
                '/Gaz a jourdin/8.jpeg',
                '/Gaz a jourdin/9.jpeg',
                '/Gaz a jourdin/10.jpeg',
                '/Gaz a jourdin/11.jpeg'
            ]
        },
        {
            title: 'La Tour de Savons en Poudre',
            category: t('boilerMakingForging'),
            description: 'Metal tower construction for powder soap manufacturing and storage.',
            image: '/La Tour de Savons en poudre/1.jpeg',
            images: [
                '/La Tour de Savons en poudre/1.jpeg',
                '/La Tour de Savons en poudre/2.jpeg',
                '/La Tour de Savons en poudre/3.jpeg',
                '/La Tour de Savons en poudre/4.jpeg',
                '/La Tour de Savons en poudre/5.jpeg',
                '/La Tour de Savons en poudre/6.jpeg'
            ]
        },
        {
            title: 'Mayonnaise ROMA',
            category: t('boilerMakingForging'),
            description: 'Industrial metal fabrication for ROMA mayonnaise production facility.',
            image: '/Mayonnaise ROMA/1.jpeg',
            images: [
                '/Mayonnaise ROMA/1.jpeg',
                '/Mayonnaise ROMA/2.jpeg',
                '/Mayonnaise ROMA/3.jpeg',
                '/Mayonnaise ROMA/4.jpeg',
                '/Mayonnaise ROMA/5.jpeg',
                '/Mayonnaise ROMA/6.jpeg',
                '/Mayonnaise ROMA/7.jpeg',
                '/Mayonnaise ROMA/8.jpeg'
            ]
        },
        {
            title: 'Montage De Pont Roulant',
            category: t('boilerMakingForging'),
            description: 'Installation and assembly of overhead cranes for industrial material handling.',
            image: '/Montage De Pont roulant/WhatsApp Image 2025-11-16 at 14.27.30.jpeg',
            images: [
                '/Montage De Pont roulant/WhatsApp Image 2025-11-16 at 14.27.30.jpeg',
                '/Montage De Pont roulant/WhatsApp Image 2025-11-16 at 14.27.31 (1).jpeg',
                '/Montage De Pont roulant/WhatsApp Image 2025-11-16 at 14.27.31.jpeg'
            ]
        }
    ];

    return (
        <div className='min-h-screen flex-col w-full flex justify-start items-start'>
            <div className='relative w-full -top-[56px] h-[50vh] object-cover'>
                <img src={"./hero2.jpg"} className='relative z-0 flex h-full w-full object-cover justify-center items-center' />
            </div>

            <section className="flex justify-start xl:justify-center z-10 pb-8 xl:pb-30 items-center w-full">
                <div className="w-full flex flex-col max-w-[1450px] px-4 xl:px-44 m-0 p-0 justify-between items-center">
                    <div className="w-full flex flex-col gap-8 lg:gap-17 justify-between items-start">
                        <span className="border-l-2 border-primary text-black gap-2 pl-3 font-bold">{t("projects")}</span>

                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
                            <h3 className="text-2xl lg:text-3xl text-black max-w-sm font-bold">{t("projectsSubtitle")}</h3>

                            <NavLink to="/contact" className={"py-3 lg:py-5 flex gap-2 font-medium bg-primary justify-center items-center px-6 lg:px-8"}>
                                <span>{t("getQuote")}</span>
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

                    <div className='w-full mt-8 lg:mt-36 flex flex-col gap-7 text-center justify-center items-center'>
                        <h2 className='text-balance text-2xl lg:text-4xl font-semibold max-w-xl'>{t("projectsTitle")}</h2>

                        <div className="w-full mt-8 flex flex-col gap-16">
                            {projects.map((project, index) => (
                                <ProjectItem key={index} project={project} onLearnMore={() => handleLearnMore(project)} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default ProjetsPage
