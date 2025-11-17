import React from 'react'
import { NavLink } from 'react-router'
import ProjectGallery from './ProjectGallery'
import { ArrowRightIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next';

const ProjectModal = ({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) => {
    const { t } = useTranslation();
    if (!isOpen) return null

    const images = project.images || [
        project.image,
        '/gallery1.png',
        '/gallery2.png',
        '/gallery3.png',
        '/gallery4.png',
        '/gallery5.png',
        '/gallery6.png'
    ]

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex h-screen  overflow-auto pt-8 items-center justify-center z-[9999]" onClick={onClose}>

            <div className="relative w-full h-full p-4 flex max-w-[1450px]  xl:py-36  flex-col lg:flex-row gap-8">
                <button
                    className="absolute top-4 right-4 text-white p-2 z-60"
                    onClick={onClose}
                    aria-label="Fermer la modale"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>



                <div className="lg:w-1/2 h-full" onClick={(e) => e.stopPropagation()}>
                    <ProjectGallery images={images} />
                </div>

                <div className="flex flex-col justify-between h-full items-start gap-4 lg:w-1/2 text-white" onClick={(e) => e.stopPropagation()}>
                    <div className='block space-y-4 '>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className="text-sm font-medium flex-shrink-0 rounded-full  border-2 px-6 py-2 border-gray-light text-white">{project.category}</span>
                        <p className="text-gray-300 my-4">{project.description}</p>



                    </div>
                    <NavLink to={"/contact"} className={"flex  mb-5  lg:mb-0 font-medium  text-black w-full hover:bg-white justify-center gap-2 items-center  bg-primary px-4 lg:px-8 py-4 lg:py-4 text-sm lg:text-base"} >
                        <span>{t('getQuote')}</span>
                        <ArrowRightIcon className="w-4  lg:w-5 h-5" />
                    </NavLink>
                </div>


            </div>
        </div>
    )
}

export default ProjectModal