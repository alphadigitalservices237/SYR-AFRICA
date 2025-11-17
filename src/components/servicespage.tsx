


import React from 'react'
import { NavLink } from 'react-router'
import ServiceCard from './ServiceCard'
import { useTranslation } from 'react-i18next';

const Servicespage = () => {
    const { t } = useTranslation();

    const categories = [
        {
            key: 'metalConstruction',
            name: t('metalConstructionFabrication'),
            services: [
                { name: t('structuralSteelFabricationName'), description: t('structuralSteelFabricationDesc'), image: '/hero2.jpg' },
                { name: t('weldingServicesName'), description: t('weldingServicesDesc'), image: '/hero2.jpg' },
                { name: t('boilermakingForgingName'), description: t('boilermakingForgingDesc'), image: '/hero2.jpg' },
                { name: t('metalFabricationName'), description: t('metalFabricationDesc'), image: '/hero2.jpg' },
                { name: t('generalMetalFabricationName'), description: t('generalMetalFabricationDesc'), image: '/hero2.jpg' },
                { name: t('alucobondInstallationName'), description: t('alucobondInstallationDesc'), image: '/hero2.jpg' },
                { name: t('workWithSteelName'), description: t('workWithSteelDesc'), image: '/hero2.jpg' },
                { name: t('manufacturingAssemblyName'), description: t('manufacturingAssemblyDesc'), image: '/hero2.jpg' },
                { name: t('hangarsTanksName'), description: t('hangarsTanksDesc'), image: '/hero2.jpg' },
                { name: t('manufacturingAssemblyHangarsName'), description: t('manufacturingAssemblyHangarsDesc'), image: '/hero2.jpg' },
                { name: t('manufacturingVariousTanksName'), description: t('manufacturingVariousTanksDesc'), image: '/hero2.jpg' }
            ]
        },
        {
            key: 'industrialSystems',
            name: t('industrialSystemsEquipment'),
            services: [
                { name: t('conveyorSystemsName'), description: t('conveyorSystemsDesc'), image: '/hero3.jpg' },
                { name: t('processEquipmentName'), description: t('processEquipmentDesc'), image: '/hero3.jpg' },
                { name: t('elevatorsHoistsName'), description: t('elevatorsHoistsDesc'), image: '/hero3.jpg' },
                { name: t('pipingServicesName'), description: t('pipingServicesDesc'), image: '/hero3.jpg' },
                { name: t('overheadCranesName'), description: t('overheadCranesDesc'), image: '/hero3.jpg' }
            ]
        },
        {
            key: 'architecturalMetalworks',
            name: t('architecturalMetalworks'),
            services: [
                { name: t('facadeSystemsName'), description: t('facadeSystemsDesc'), image: '/hero4.jpg' },
                { name: t('staircasesRailingsName'), description: t('staircasesRailingsDesc'), image: '/hero4.jpg' },
                { name: t('fabricationVariousWorksName'), description: t('fabricationVariousWorksDesc'), image: '/hero4.jpg' },
                { name: t('metalCarpentryName'), description: t('metalCarpentryDesc'), image: '/hero4.jpg' }
            ]
        },
        {
            key: 'marineMaintenance',
            name: t('marineMaintenanceServices'),
            services: [
                { name: t('shipRepairName'), description: t('shipRepairDesc'), image: '/hero2.jpg' },
                { name: t('offshoreStructuresName'), description: t('offshoreStructuresDesc'), image: '/hero2.jpg' },
                { name: t('navalServicesName'), description: t('navalServicesDesc'), image: '/hero2.jpg' },
                { name: t('navalMaintenanceName'), description: t('navalMaintenanceDesc'), image: '/hero2.jpg' }
            ]
        },
        {
            key: 'safetySecurity',
            name: t('safetySecuritySystems'),
            services: [
                { name: t('securitySystemsName'), description: t('securitySystemsDesc'), image: '/hero2.jpg' },
                { name: t('fireSafetySystemsName'), description: t('fireSafetySystemsDesc'), image: '/hero2.jpg' }
            ]
        }
    ];

    return (
        <div className='min-h-screen flex-col  w-full flex justify-start items-start'>
            <div className='relative  w-full -top-[56px] h-[50vh]  object-cover '>

                <img src={"./hero2.jpg"} className='relative z-0 flex h-full w-full  object-cover justify-center items-center' />
            </div>

            <section className="flex justify-start xl:justify-center z-10      pb-8 xl:pb-30 items-center w-full">
                <div className="w-full flex flex-col max-w-[1450px] px-4 xl:px-44 m-0 p-0 justify-between items-center ">
                    <div className="w-full flex flex-col gap-8 lg:gap-17 justify-between items-start">
                        <span className="border-l-2  border-primary text-black gap-2 pl-3 font-bold">{t("services")}</span>

                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
                            <h3 className="text-2xl lg:text-3xl text-black  max-w-sm font-bold">{t("servicesSubtitle")}</h3>

                            <NavLink to="/services" className={"py-3 lg:py-5 flex gap-2 font-medium bg-primary justify-center items-center px-6 lg:px-8"}>
                                <span>{t("learnMore")}</span>
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
                    <div className='w-full mt-8 lg:mt-36  flex  flex-col gap-7 text-center justify-center items-center '>

                        <h2 className='text-balance  text-2xl lg:text-4xl font-semibold  max-w-xl'>{t("servicesTitle")}</h2>

                     <div className="w-full mt-8">

                            <div className="flex flex-col lg:grid mb-56 lg:grid-cols-3 w-full gap-4 lg:gap-6 mt-8 lg:mt-10 h-auto  ">
                                {categories.map((category) =>
                                    category.services.map((service) => (
                                        <ServiceCard
                                            key={service.name}
                                            name={service.name}
                                            description={service.description}
                                            image={service.image}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicespage
