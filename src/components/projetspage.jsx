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
            image: '/Charpente City Stade FEICOM/2.jpeg',
            images: [
                '/Charpente City Stade FEICOM/2.jpeg',
                '/Charpente City Stade FEICOM/3.jpeg',
                '/Charpente City Stade FEICOM/WhatsApp Image 2025-11-18 at 10.55.22.jpeg',
                '/Charpente City Stade FEICOM/WhatsApp Image 2025-11-18 at 10.56.54.jpeg'
            ]
        },
        {
            title: 'Construction de Citerne',
            category: t('boilerMakingForging'),
            description: 'Tank construction and installation for industrial facilities.',
            image: '/construction de citerne/1.jpeg',
            images: [
                '/construction de citerne/1.jpeg',
                '/construction de citerne/WhatsApp Image 2025-11-16 at 14.27.17 (1).jpeg',
                '/construction de citerne/WhatsApp Image 2025-11-16 at 14.27.17 (2) - Copie.jpeg',
                '/construction de citerne/WhatsApp Image 2025-11-16 at 14.27.17.jpeg'
            ]
        },
        {
            title: 'Construction Métallique',
            category: t('boilerMakingForging'),
            description: 'Metal construction projects including buildings and industrial facilities.',
            image: '/construction metalique/3.jpeg',
            images: [
                '/construction metalique/3.jpeg',
                '/construction metalique/4.jpeg',
                '/construction metalique/5.jpeg',
                '/construction metalique/6.jpeg',
                '/construction metalique/8.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.22 (2).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.25 (3).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.26 (1).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.26 (2).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.26.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.31 (2).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.31 (3).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.32 (1).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.32 (2).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.32.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.33 (1).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.33.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.34 (1).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.34.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.35 (3).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.36.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-18 at 10.55.18.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-18 at 10.55.19.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-18 at 10.55.23.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-18 at 10.56.51.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-18 at 10.56.52 (1).jpeg',
                '/construction metalique/WhatsApp Image 2025-11-18 at 10.56.52.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-18 at 10.56.53.jpeg',
                '/construction metalique/WhatsApp Image 2025-11-18 at 11.03.58 (1).jpeg'
            ]
        },
        {
            title: 'Embeddings Style',
            category: t('boilerMakingForging'),
            description: 'Style embedding and metal fabrication projects.',
            image: '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.23 (2).jpeg',
            images: [
                '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.23 (2).jpeg',
                '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.24 (1).jpeg',
                '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.27.jpeg',
                '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.29.jpeg',
                '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.30.jpeg',
                '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.31 (1).jpeg',
                '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.31.jpeg'
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
                '/Mayonnaise ROMA/8.jpeg',
                '/Mayonnaise ROMA/9.jpeg',
                '/Mayonnaise ROMA/10.jpeg',
                '/Mayonnaise ROMA/11.jpeg',
                '/Mayonnaise ROMA/12.jpeg',
                '/Mayonnaise ROMA/13.jpeg',
                '/Mayonnaise ROMA/14.jpeg',
                '/Mayonnaise ROMA/15.jpeg',
                '/Mayonnaise ROMA/16.jpeg',
                '/Mayonnaise ROMA/17.jpeg',
                '/Mayonnaise ROMA/18.jpeg',
                '/Mayonnaise ROMA/19.jpeg',
                '/Mayonnaise ROMA/20.jpeg',
                '/Mayonnaise ROMA/21.jpeg',
                '/Mayonnaise ROMA/22.jpeg',
                '/Mayonnaise ROMA/23.jpeg',
                '/Mayonnaise ROMA/24.jpeg',
                '/Mayonnaise ROMA/25.jpeg'
            ]
        },
        {
            title: 'Pont Roulant',
            category: t('boilerMakingForging'),
            description: 'Installation and assembly of overhead cranes for industrial material handling.',
            image: '/pont roulant/1.jpeg',
            images: [
                '/pont roulant/1.jpeg',
                '/pont roulant/7.jpeg',
                '/pont roulant/9.jpeg',
                '/pont roulant/10.jpeg',
                '/pont roulant/11.jpeg',
                '/pont roulant/12.jpeg',
                '/pont roulant/13.jpeg',
                '/pont roulant/14.jpeg',
                '/pont roulant/16.jpeg',
                '/pont roulant/17.jpeg',
                '/pont roulant/18.jpeg',
                '/pont roulant/19.jpeg',
                '/pont roulant/20.jpeg'
            ]
        },
        {
            title: 'St Josué',
            category: t('boilerMakingForging'),
            description: 'Reconstruction of St Josué Hall with modern metal structures.',
            image: '/st josue/1.jpg',
            images: [
                '/st josue/1.jpg',
                '/st josue/2.jpg',
                '/st josue/3.png',
                '/st josue/4.png',
                '/st josue/6.jpg',
                '/st josue/7.jpg',
                '/st josue/8.png',
                '/st josue/9.png',
                '/st josue/10.jpg',
                '/st josue/11.jpg',
                '/st josue/12.jpg',
                '/st josue/13.jpg',
                '/st josue/14.jpg',
                '/st josue/15.jpg',
                '/st josue/16.jpg',
                '/st josue/17.jpg',
                '/st josue/18.jpg',
                '/st josue/19.png',
                '/st josue/20.jpg',
                '/st josue/21.jpg'
            ]
        },
        {
            title: 'Tuyauterie',
            category: t('boilerMakingForging'),
            description: 'Piping and metal fabrication for industrial systems.',
            image: '/tuyauterie/1.jpeg',
            images: [
                '/tuyauterie/1.jpeg',
                '/tuyauterie/2.jpeg',
                '/tuyauterie/3.jpeg',
                '/tuyauterie/4.jpeg',
                '/tuyauterie/5.jpeg',
                '/tuyauterie/6.jpeg',
                '/tuyauterie/7.jpeg',
                '/tuyauterie/8.jpeg',
                '/tuyauterie/9.jpeg',
                '/tuyauterie/10.jpeg'
            ]
        }
    ];

    return (
        <div className='min-h-screen flex-col w-full flex justify-start items-start'>
            <div className='relative w-full -top-[56px] h-[50vh] object-cover bg-primary'>
                  <img src={"/construction metalique/WhatsApp Image 2025-11-16 at 14.27.31 (3).jpeg"} className='relative z-0 flex h-full w-full  object-cover justify-center items-center' />
               
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
