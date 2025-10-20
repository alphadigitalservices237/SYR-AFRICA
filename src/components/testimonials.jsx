
import TestimonialCard from './testimonialCard';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            position: "CEO, Example Corp",
            text: "« Intervention impeccable pour la rénovation de notre hangar industriel : structure robuste, finition soignée et suivi technique irréprochable. »",
            avatar: "/hero.png"
        },
        {
            name: "Jane Smith",
            position: "Directrice, Tech Solutions",
            text: "« Service professionnel et efficace. Notre projet de construction a été livré dans les délais avec une qualité exceptionnelle. »",
            avatar: "/hero2.jpg"
        },
        {
            name: "Mike Johnson",
            position: "Propriétaire, MJ Construction",
            text: "« Équipe compétente et à l'écoute. Ils ont su répondre à toutes nos exigences techniques avec créativité. »",
            avatar: "/hero3.jpg"
        },
        {
            name: "Sarah Wilson",
            position: "Manager, Green Building",
            text: "« Projet écologique réalisé avec expertise. Respect des normes environnementales et résultat durable. »",
            avatar: "/hero4.jpg"
        }
    ];

    return (
        <section className="flex justify-center z-10 bg-black relative min-h-[800px] md:min-h-[1000px] mt-28 pt-10 md:pt-20 items-start w-full">
            <div className="w-full max-w-[1450px] px-4 md:px-8 lg:px-44">
                <div className="text-center mb-10 md:mb-20">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white">
                        What our <span className="text-primary">clients</span> say ?
                    </h2>
                </div>

                <div className="grid grid-cols-1 px-2 md:px-5 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
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
