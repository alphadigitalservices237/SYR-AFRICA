import { NavLink } from "react-router"
import { useTranslation } from 'react-i18next';


const ProjectCard = ({ project }: { project: any }) => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-6  justify-start items-start">

            <div className="h-[372px] w-full">

                <img src={project.image} className="h-full w-full object-cover" />

            </div>

            <span className="text-sm font-bold   border-primary  border-2 rounded-full px-4 py-2 ">{project.title}</span>

            <h3 className="text-lg lg:text-2xl font-bold">{project.title}</h3>

            <p className="text-sm lg:text-xl text-gray-light">
                {project.description}
            </p>

            <NavLink to="/projets" className={"py-5 flex gap-2 font-medium text-gray-light justify-center items-center "}>
                <span>{t('findOutMore')}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        fill="#868686"
                        d="M15.833 10.832h-5v5H9.167v-5h-5V9.165h5v-5h1.666v5h5z"
                    ></path>
                </svg>
            </NavLink>


        </div>
    )
}

export default ProjectCard
