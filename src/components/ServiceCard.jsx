import React from 'react'

const ServiceCard = ({ name, description, image, className = '' }) => {
    return (
        <div className={`service-card relative bg-cover bg-[url('${image}')] h-[450px] lg:w-full  flex-shrink-0 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            <div className="relative z-10 flex p-4 lg:p-8 w-full text-balance justify-end flex-col text-white h-full gap-2 lg:gap-4 items-start">
                <h4 className="text-white w-full  text-left text-xl lg:text-2xl">{name}</h4>
                <p className="text-[#C8C8C8] text-left max-w-xs text-sm lg:text-base">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard