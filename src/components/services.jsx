import { NavLink } from "react-router"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger)


const Services = () => {
    const { t } = useTranslation();
    const servicesRef = useRef(null)
    const [currentPage, setCurrentPage] = useState(0);

    const maxPage = Math.ceil(5 / 3) - 1; // 1 page (0 and 1)

    const scrollLeft = () => {
        setCurrentPage((prev) => Math.max(0, prev - 1));
    };

    const scrollRight = () => {
        setCurrentPage((prev) => Math.min(maxPage, prev + 1));
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".service-card",
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }, servicesRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={servicesRef} className="flex justify-center z-10 bg-black relative h-auto lg:h-[650px] lg:mt-28 pt-10 lg:pt-28   items-center w-full ">
            <div className="w-full flex max-w-[1450px] px-4 xl:px-44 m-0 p-0 justify-between items-center ">
                <div className="w-full flex flex-col gap-8 lg:gap-17 justify-between items-start">
                    <span className="border-l-2  border-primary text-white gap-2 pl-3 font-bold">{t("services")}</span>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
                        <h3 className="text-2xl lg:text-3xl text-white max-w-sm font-bold">{t("servicesSubtitle")}</h3>

                        <NavLink to="/services" className={"py-3 lg:py-5 flex gap-2 font-medium bg-white justify-center items-center px-6 lg:px-8"}>
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
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <button onClick={scrollLeft} className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={scrollRight} className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex w-full gap-4 lg:gap-6 mt-8 lg:mt-10 h-[350px] lg:h-[450px] -mb-20 overflow-hidden">
                        <div className="flex gap-4 lg:gap-6 transition-transform duration-300" style={{ transform: `translateX(-${currentPage * 932}px)` }}>
                            <div
                                className="service-card relative bg-cover bg-center w-[300px] h-full flex-shrink-0"
                                style={{ backgroundImage: "url('/construction de citerne/1.jpeg')" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                                <div className="relative z-10 flex p-4 lg:p-8 w-full text-balance justify-end flex-col text-white h-full gap-2 lg:gap-4 items-start">
                                    <h4 className="text-white w-full text-xl lg:text-2xl">{t("generalConstruction")}</h4>
                                    <p className="text-[#C8C8C8] max-w-xs text-sm lg:text-base">
                                      {t("generalConstructionDesc")}
                                    </p>
                                </div>
                            </div>
                              <div
                                  className="service-card relative bg-cover bg-center w-[300px] h-full flex-shrink-0"
                                  style={{ backgroundImage: "url('/construction metalique/3.jpeg')" }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                                <div className="relative z-10 flex p-4 lg:p-8 w-full text-balance justify-end flex-col text-white h-full gap-2 lg:gap-4 items-start">
                                    <h4 className="text-white w-full text-xl lg:text-2xl">{t("metalConstruction")}</h4>
                                    <p className="text-[#C8C8C8] max-w-xs text-sm lg:text-base">
                                        {t("metalConstructionDesc")}
                                    </p>
                                </div>
                            </div>
                              <div
                                  className="service-card relative bg-cover bg-center w-[300px] h-full flex-shrink-0"
                                  style={{ backgroundImage: "url('/embeddings style/WhatsApp Image 2025-11-16 at 14.27.23 (2).jpeg')" }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                                <div className="relative z-10 flex p-4 lg:p-8 w-full text-balance justify-end flex-col text-white h-full gap-2 lg:gap-4 items-start">
                                    <h4 className="text-white w-full text-xl lg:text-2xl">{t("publicWorks")}</h4>
                                    <p className="text-[#C8C8C8] max-w-xs text-sm lg:text-base">
                                        {t("publicWorksDesc")}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="service-card relative bg-cover bg-center w-[300px] h-full flex-shrink-0"
                                style={{ backgroundImage: "url('/Mayonnaise ROMA/1.jpeg')" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                                <div className="relative z-10 flex p-4 lg:p-8 w-full text-balance justify-end flex-col text-white h-full gap-2 lg:gap-4 items-start">
                                    <h4 className="text-white w-full text-xl lg:text-2xl">{t("buildingConstruction")}</h4>
                                    <p className="text-[#C8C8C8] max-w-xs text-sm lg:text-base">
                                        {t("buildingConstructionDesc")}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="service-card relative bg-cover bg-center w-[300px] h-full flex-shrink-0"
                                style={{ backgroundImage: "url('/tuyauterie/1.jpeg')" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                                <div className="relative z-10 flex p-4 lg:p-8 w-full text-balance justify-end flex-col text-white h-full gap-2 lg:gap-4 items-start">
                                    <h4 className="text-white w-full text-xl lg:text-2xl">{t("elevators")}</h4>
                                    <p className="text-[#C8C8C8] max-w-xs text-sm lg:text-base">
                                        {t("elevatorsDesc")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services
