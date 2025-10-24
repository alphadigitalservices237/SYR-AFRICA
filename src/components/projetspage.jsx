import React, { useState } from 'react'
import { NavLink } from 'react-router'
import ProjectItem from './ProjectItem'
import ProjectModal from './ProjectModal'

const ProjetsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleLearnMore = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const projects = [
        {
            title: 'Reconstruction Salle de Fête Omnisport',
            category: 'Boiler Making and Forging',
            description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.',
            image: '/project2.png'
        },
        {
            title: 'Montage de Pont Roulant',
            category: 'Boiler Making and Forging',
            description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.',
            image: '/project1.png'
        },
        {
            title: 'City Stade FEICOM',
            category: 'Boiler Making and Forging',
            description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.',
  image: '/project3.png'
        },
     
        {
            title: 'Montage de Pont Roulant',
            category: 'Boiler Making and Forging',
            description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.',
             image: '/project1.png'
        },
        {
            title: 'Reconstruction Salle de Fête Omnisport',
            category: 'Boiler Making and Forging',
            description: 'Lorem ipsum morbi est quis malesuada velit gravida turpis magna eget dui amet eros volutpat tellus vulputate non ut tincidunt ut sapien amet risus dolor.',
         image: '/project3.png'
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
                        <span className="border-l-2 border-primary text-black gap-2 pl-3 font-bold"> Projects </span>

                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
                            <h3 className="text-2xl lg:text-3xl text-black max-w-sm font-bold">We have been processing steel for about 15 years</h3>

                            <NavLink to="/" className={"py-3 lg:py-5 flex gap-2 font-medium bg-primary justify-center items-center px-6 lg:px-8"}>
                                <span>Get a  Quote</span>
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
                        <h2 className='text-balance text-2xl lg:text-4xl font-semibold max-w-xl'>A Brought service categories to deliver quality work</h2>

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
