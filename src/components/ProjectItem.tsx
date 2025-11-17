import React from 'react'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next';

const ProjectItem = ({ project, onLearnMore }: { project: any, onLearnMore: () => void }) => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col lg:flex-row gap-8">

            <div className="lg:w-1/3">
                <img src={project.image} className="w-full h-[300px] object-cover" />
            </div>
             <div className="flex flex-col justify-start  items-start gap-4 lg:w-2/3">
                <h3 className="text-2xl text-left text-balance font-bold">{project.title}</h3>
                <span className="text-sm font-medium rounded-full border-2 px-6 py-2 border-gray-light/50 text-black">{project.category}</span>
                <p className="text-gray-light text-left">{project.description}</p>
                <div className="flex  gap-4">
                    <button onClick={onLearnMore} className={"py-3 lg:py-5 flex gap-2 font-medium bg-primary justify-center items-center px-6 lg:px-8"}>
              <span>{t('learnMore')}</span>

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
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem