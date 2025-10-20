import { NavLink } from "react-router"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const Services = () => {
    const servicesRef = useRef(null)

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
        <section ref={servicesRef} className="flex justify-center z-10 bg-black relative h-auto md:h-[650px] mt-28 pt-28   items-center w-full ">
            <div className="w-full flex max-w-[1450px] px-4 md:px-44 m-0 p-0 justify-between items-center ">
                <div className="w-full flex flex-col gap-8 md:gap-17 justify-between items-start">
                    <span className="border-l-2  border-primary text-white gap-2 pl-3 font-bold"> Services </span>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 md:gap-0">
                        <h3 className="text-2xl md:text-3xl text-white max-w-sm font-bold">We have been processing steel for about 15 years</h3>

                        <NavLink to="/" className={"py-3 md:py-5 flex gap-2 font-medium bg-white justify-center items-center px-6 md:px-8"}>
                            <span>learn more</span>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-6 mt-8 md:mt-10  h-auto md:h-[450px] -mb-20">
                        <div className="service-card relative bg-cover bg-[url('/hero2.jpg')] w-full h-[300px] md:h-full">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                            <div className="relative z-10 flex p-4 md:p-8 w-full text-balance justify-end flex-col text-white h-full gap-2 md:gap-4 items-start">
                                <h4 className="text-white w-full text-xl md:text-2xl">Boilermaking & forging</h4>
                                <p className="text-[#C8C8C8] max-w-xs text-sm md:text-base">
                                  Roofting and other metalics structures
                                </p>
                            </div>
                        </div>
                          <div className="service-card relative bg-cover bg-[url('/hero3.jpg')] w-full h-[300px] md:h-full">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                            <div className="relative z-10 flex p-4 md:p-8 w-full text-balance justify-end flex-col text-white h-full gap-2 md:gap-4 items-start">
                                <h4 className="text-white w-full text-xl md:text-2xl">Metal fabrication</h4>
                                <p className="text-[#C8C8C8] max-w-xs text-sm md:text-base">
                                    Various fabrications (gates, windows, etc.)
                                </p>
                            </div>
                        </div>
                          <div className="service-card relative bg-cover bg-[url('/hero4.jpg')] w-full h-[300px] md:h-full">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                            <div className="relative z-10 flex p-4 md:p-8 w-full text-balance justify-end flex-col text-white h-full gap-2 md:gap-4 items-start">
                                <h4 className="text-white w-full text-xl md:text-2xl">Piping</h4>
                                <p className="text-[#C8C8C8] max-w-xs text-sm md:text-base">
                                    Carbon steel, stainless steel, cupper, etc.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services
