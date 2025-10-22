
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Achievements = () => {
    const achievementsRef = useRef(null)
    const numberRefs = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            numberRefs.current.forEach((ref, index) => {
                if (ref) {
                    const targetValue = parseInt(ref.textContent.replace(/[>+]/g, ''))
                    gsap.fromTo(ref,
                        { innerText: 0 },
                        {
                            innerText: targetValue,
                            duration: 2,
                            ease: "power2.out",
                            snap: { innerText: 1 },
                            scrollTrigger: {
                                trigger: achievementsRef.current,
                                start: "top 80%",
                                end: "bottom 20%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    )
                }
            })
        }, achievementsRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={achievementsRef} className="flex justify-center z-10  relative h-auto py-16  lg:py-28 mt-28 lg:mt-56   items-center w-full overflow-hidden">
            <div className='absolute z-0 top-0 left-0  w-1/3 xl:w-1/2  py-8 h-56 lg:h-full'>
                    <img src={"./yellow.png"} className='object-cover ' />

                </div>
            <div className="w-full relative z-10 flex  max-w-[1450px] gap-8 lg:gap-23 px-4 xl:px-44 m-0 p-0 justify-between items-start flex-col lg:flex-row">

                <div className='w-full lg:w-1/3'>

                    <img src={"./achieve.png"} className='object-cover h-[500px] lg:h-[518px] w-full' />

                </div>
                <div className='w-full lg:w-2/3 flex flex-col gap-6 lg:gap-10  h-auto justify-start items-start'>

                    <span className="border-l-2  border-primary text-black gap-2 pl-3 font-bold"> Achievements </span>
                    <div className='flex flex-col gap-y-4 w-full '>
                        <h2 className="text-xl lg:text-3xl font-bold text-balance">At SYR Africa, we don’t just shape metal — we shape possibilities.</h2>
                        <p className="text-sm lg:text-xl text-gray-light text-balance">Every structure we build reflects our dedication to innovation, precision, and excellence.</p>
                        <p className="text-sm lg:text-xl text-gray-light text-balance">Our legacy is not only measured in steel, but in the trust, safety, and sustainability that define our work across Africa</p>

                    </div>

                    <div className='grid grid-cols-3 w-full gap-6 lg:gap-0'>
                        <div className='flex flex-col justify-start gap-3 items-start'>

                            <div className='text-4xl lg:text-6xl flex'> {">"} <h3 ref={el => numberRefs.current[0] = el} className='text-bold text-4xl lg:text-6xl'>50</h3></div>
                            <span className='text-gray-light   text-sm md:text-base lg:text-lg text-balance'>Industrial Projects Delivered</span>

                        </div>
                        <div className='flex flex-col justify-start gap-3 items-start'>

                            <div className='text-4xl lg:text-6xl flex'> {">"} <h3 ref={el => numberRefs.current[1] = el} className='text-bold text-4xl lg:text-6xl'>35</h3></div>
                            <span className='text-gray-light   text-sm md:text-base lg:text-lg text-balance'>Corporate and Public Facilities Built</span>

                        </div>
                        <div className='flex flex-col justify-start gap-3 items-start'>

                            <div className='text-4xl lg:text-6xl flex'> {"+"} <h3 ref={el => numberRefs.current[2] = el} className='text-bold text-4xl lg:text-6xl'>15</h3></div>
                            <span className='text-gray-light   text-sm md:text-base lg:text-lg text-balance'>Solid Years of Expertise so Far</span>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Achievements
