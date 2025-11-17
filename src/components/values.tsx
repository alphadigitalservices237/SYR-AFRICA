

import { useTranslation } from 'react-i18next';

const Values = () => {
    const { t } = useTranslation();
    const values = [
        {
            icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="44"
                fill="none"
                viewBox="0 0 43 44"
            >
                <path fill="#F6AE00" d="M-2.979-2h48v48h-48z"></path>
            </svg>
            ,
            title: t("commitmentToExcellence"),
            description: t("commitmentDesc")
        },
        {
            icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
            >
                <path
                    fill="#F6AE00"
                    d="M34.912 24c0 6.027-4.885 10.912-10.912 10.912S13.088 30.027 13.088 24 17.973 13.088 24 13.088 34.912 17.973 34.912 24m-8.04-18.204c7.866 1.236 14.096 7.466 15.332 15.332H48C46.688 10.091 37.909 1.313 26.872 0zM5.796 21.128c1.236-7.866 7.466-14.096 15.332-15.332V0C10.091 1.313 1.313 10.091 0 21.128zm36.408 5.744c-1.236 7.866-7.466 14.096-15.332 15.332V48C37.909 46.688 46.688 37.909 48 26.872zM21.128 42.204c-7.866-1.236-14.096-7.466-15.332-15.332H0C1.313 37.909 10.091 46.688 21.128 48z"
                ></path>
            </svg>,
            title: t("precisionInExecution"),
            description: t("precisionDesc")
        },
        {
            icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
            >
                <path
                    fill="#F6AE00"
                    d="m33.2 21.76-2.84-2.84-8.48 8.5-4.24-4.26L14.8 26l7.08 7.08z"
                ></path>
                <path fill="#F6AE00" d="M6 8v32h36V8zm32 28H10V16h28z"></path>
            </svg>,
            title: t("uncompromisingQuality"),
            description: t("qualityDesc")
        },
        {
            icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_323_205)">
                    <path d="M30 3H48V48H0V0.867188L30 30.8672V3ZM3 45H39.8672L3 8.13281V45ZM41.1328 42L44.1328 45H45V6H33V9H39V12H33V15H39V18H33V21H42V24H33V27H39V30H33V33H39V36H35.1328L38.1328 39H42V42H41.1328ZM9 24.8672L23.1328 39H9V24.8672ZM12 32.1328V36H15.8672L12 32.1328Z" fill="#F6AE00" />
                </g>
                <defs>
                    <clipPath id="clip0_323_205">
                        <rect width="48" height="48" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            ,
            title: t("innovationInDesign"),
            description: t("innovationDesc")
        },
        {
            icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 2L6 10V22C6 33.1 13.68 43.48 24 46C34.32 43.48 42 33.1 42 22V10L24 2ZM30.16 32L24 28.3L17.86 32L19.48 25L14.06 20.32L21.22 19.7L24 13.1L26.78 19.68L33.94 20.3L28.52 25L30.16 32Z" fill="#F6AE00" />
            </svg>
            ,
            title: t("reliabilitySustainability"),
            description: t("reliabilityDesc")
        }
    ];

    return (
        <div className='w-full flex flex-col gap-1  justify-start items-center py-15  bg-white/90 min-h-screen relative'>

            <img  src="/La Tour de Savons en poudre/1.jpeg" className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0" />

            <div className="w-full flex max-w-[1450px] px-4 xl:px-44 gap-8 m-0 p-0 justify-between items-start lg:items-center flex-col lg:flex-row">
                <span className="border-l-2  border-primary text-black gap-2 pl-3 font-bold">{t("vision")}</span>
            </div>
            
            <div className="w-full flex max-w-[1450px] z-10  xl:px-44">
            <div className='w-full flex flex-col justify-start lg:justify-center py-4 items-start lg:items-center'>

                <h2 className='text-left  px-4 lg:px-0 lg:text-center font-bold  w-full text-2xl lg:text-3xl'>{t("valuesTitle")}</h2>

                <div className='w-full flex flex-col px-4 lg:px-0  lg:flex-row py-11  gap-5 justify-center items-center'>

                    <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                        {values.map((value, index) => (
                            <div key={index} className='flex px-6 py-9 bg-white gap-3.5 justify-start items-center'>
                                  <div className="">
                                {value.icon}
                            </div>
                            <div  className='flex flex-col gap-2'>
                                <h3 className='font-medium text-xl'>{value.title}</h3>
                                <p className='text-gray-light text-balance'>{value.description}</p>
                            </div>
                          
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/2 h-full ">
                            <img src="/Mayonnaise ROMA/1.jpeg" className="h-full w-full object-cover" />
                    </div>

                    <div>

                    </div>

                </div>
 </div>
            </div>

        </div>
    )
}

export default Values
