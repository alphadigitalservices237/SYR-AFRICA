
import React from 'react'

const TestimonialCard = ({ name, position, text, avatar }) => {
    return (
        <div className='flex flex-col border-2 border-primary gap-4 p-6 bg-[#2C2C2C] backdrop-blur-sm  hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20'>

            <div className='flex justify-between items-start w-full'>

                <div className='gap-3 flex justify-start items-center'>

                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-lg'>
                        {avatar ? (
                            <img src={avatar} alt={name} className='w-full h-full rounded-full object-cover' />
                        ) : (
                            name.charAt(0).toUpperCase()
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-white font-bold text-lg'>{name}</h3>
                        <span className='text-gray-300 text-sm'>{position}</span>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="28"
                    fill="none"
                    viewBox="0 0 51 40"
                    className="flex-shrink-0"
                >
                    <path
                        fill="#FFB400"
                        d="M13.587 8.072a5.6 5.6 0 0 1 2.368.128q1.344.384 2.048 1.024 1.728 1.344 2.56 3.648.768 2.175.704 4.48a19 19 0 0 1-.384 3.136q-1.28 6.528-6.656 10.944-.96.768-1.408.448-.255-.128-.96-.832-.832-.768-1.024-1.088-.255-.64.512-1.216 1.472-1.151 2.176-2.048 2.176-2.496 3.072-5.312.768-1.984.576-2.368l-.32.128q-.832.384-2.368.384t-2.432-.384q-2.816-1.152-3.328-4.352a5.5 5.5 0 0 1 0-2.048q.64-3.648 4.16-4.544.32-.064.704-.128m17.728 0a5.6 5.6 0 0 1 2.368.128q1.344.384 2.048 1.024 1.728 1.344 2.56 3.648.768 2.175.704 4.48a19 19 0 0 1-.384 3.136q-1.28 6.528-6.656 10.944-.96.768-1.408.448-.255-.128-.96-.832-.832-.768-1.024-1.088-.256-.64.512-1.216 1.472-1.151 2.176-2.048 2.176-2.496 3.072-5.312.768-1.984.576-2.368l-.32.128q-.832.384-2.368.384t-2.432-.384q-2.816-1.152-3.328-4.352a5.5 5.5 0 0 1 0-2.048q.64-3.648 4.16-4.544.32-.064.704-.128"
                    ></path>
                </svg>

            </div>

            <p className='text-white/90 text-base leading-relaxed italic'>
                {text}
            </p>

        </div>
    )
}

export default TestimonialCard
