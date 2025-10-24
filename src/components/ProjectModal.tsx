import React from 'react'
import { NavLink } from 'react-router'
import ProjectGallery from './ProjectGallery'

const ProjectModal = ({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) => {
    if (!isOpen) return null

    const images = [
        project.image,
        '/gallery1.png',
        '/gallery2.png',
        '/gallery3.png',
        '/gallery4.png',
        '/gallery5.png',
        '/gallery6.png'
    ]

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex  h-screen  pt-8 items-center justify-center z-50" onClick={onClose}>

            <div className="relative w-full h-full p-4 flex max-w-[1450px] flex-col lg:flex-row gap-8">
            <div className="relative w-full h-full p-4 flex flex-col lg:flex-row gap-8">
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

                

                  <div className="lg:w-1/2">
                    <ProjectGallery images={images} />
                </div>

                <div className="flex flex-col justify-start items-start gap-4 lg:w-1/2 text-white">
                    <h2 className="text-3xl font-bold">SYR Africa Projects</h2>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-sm font-medium rounded-full border-2 px-6 py-2 border-gray-400 text-white">{project.category}</span>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <span></span>
                        <NavLink to="/" className="py-3 px-6 bg-primary text-white font-medium">
                            Get a Quote
                        </NavLink>
                    </div>
                </div>

              
            </div>
            </div>
        </div>
    )
}

export default ProjectModal