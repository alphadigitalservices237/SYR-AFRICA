
import TestimonialCard from './testimonialCard';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
    const { t } = useTranslation();
    const testimonials = [
        {
            name: t("testimonial2Name"),
            position: t("testimonial2Position"),
            text: t("testimonial2Text"),
            avatar: "/Charpente City Stade FEICOM/2.jpeg"
        },
        {
            name: t("testimonial4Name"),
            position: t("testimonial4Position"),
            text: t("testimonial4Text"),
            avatar: "/Mayonnaise ROMA/1.jpeg"
        },
        {
            name: t("testimonial1Name"),
            position: t("testimonial1Position"),
            text: t("testimonial1Text"),
            avatar: "/st josue/1.jpg"
        },
        {
            name: t("testimonial3Name"),
            position: t("testimonial3Position"),
            text: t("testimonial3Text"),
            avatar: "/construction metalique/3.jpeg"
        },
          {
            name: t("testimonial5Name"),
            position: t("testimonial5Position"),
            text: t("testimonial5Text"),
            avatar: "/construction metalique/3.jpeg"
        },
        ,
          {
            name: t("testimonial6Name"),
            position: t("testimonial6Position"),
            text: t("testimonial6Text"),
            avatar: "/st josue/20.jpg"
        }
    ];

    return (
        <section className="flex justify-center z-10 bg-black relative  min-h-[800px] pb-16 lg:pb-0 lg:min-h-[1000px] mt-28 pt-10 lg:pt-20 items-start w-full">
            <div className="w-full max-w-[1450px] px-4  xl:px-44">
                <div className="text-center mb-10 lg:mb-20">
                    <h2 className="text-2xl  lg:text-4xl xl:text-5xl font-medium text-white">
                        {t("whatOurClientsSay")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 px-2 lg:px-5 lg:grid-cols-2 pb-72 gap-4  lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            position={testimonial.position}
                            text={testimonial.text}
                            avatar={testimonial.avatar}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
