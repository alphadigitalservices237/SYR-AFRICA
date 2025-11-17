import ImageGallery from "./ImageGallery"
import { useTranslation } from 'react-i18next';

const gallerie = [
    '/Charpente City Stade FEICOM/1.jpeg',
    '/Charpente City Stade FEICOM/2.jpeg',
    '/Charpente City Stade FEICOM/3.jpeg',
    '/Charpente City Stade FEICOM/4.jpeg',
    '/Citerne de pétrole/1.jpeg',
    '/Citerne en inox pour l\'huile/1.jpeg',
    '/Citerne en inox pour l\'huile/2.jpeg',
    '/Citerne en inox pour l\'huile/3.jpeg',
    '/Construction métallique à Douala/1.jpeg',
    '/Construction métallique à Douala/2.jpeg',
    '/Construction métallique à Douala/3.jpeg',
    '/Construction métallique à Douala/4.jpeg',
    '/Construction métallique à Douala/5.jpeg',
    '/Construction métallique à Douala/6.jpeg',
    '/Gaz a jourdin/1.jpeg',
    '/Gaz a jourdin/2.jpeg',
    '/Gaz a jourdin/3.jpeg',
    '/Gaz a jourdin/4.jpeg',
    '/Gaz a jourdin/5.jpeg',
    '/Gaz a jourdin/6.jpeg',
    '/Gaz a jourdin/7.jpeg',
    '/Gaz a jourdin/8.jpeg',
    '/Gaz a jourdin/9.jpeg',
    '/Gaz a jourdin/10.jpeg',
    '/Gaz a jourdin/11.jpeg',
    '/La Tour de Savons en poudre/1.jpeg',
    '/La Tour de Savons en poudre/2.jpeg',
    '/La Tour de Savons en poudre/3.jpeg',
    '/La Tour de Savons en poudre/4.jpeg',
    '/La Tour de Savons en poudre/5.jpeg',
    '/La Tour de Savons en poudre/6.jpeg',
    '/Mayonnaise ROMA/1.jpeg',
    '/Mayonnaise ROMA/2.jpeg',
    '/Mayonnaise ROMA/3.jpeg',
    '/Mayonnaise ROMA/4.jpeg',
    '/Mayonnaise ROMA/5.jpeg',
    '/Mayonnaise ROMA/6.jpeg',
    '/Mayonnaise ROMA/7.jpeg',
    '/Mayonnaise ROMA/8.jpeg',
    '/Montage De Pont roulant/WhatsApp Image 2025-11-16 at 14.27.30.jpeg',
    '/Montage De Pont roulant/WhatsApp Image 2025-11-16 at 14.27.31 (1).jpeg',
    '/Montage De Pont roulant/WhatsApp Image 2025-11-16 at 14.27.31.jpeg',
    '/Nouveau dossier/1.jpeg',
    '/st josue/1.jpg',
    '/st josue/2.jpg',
    '/st josue/3.jpg',
    '/st josue/4.jpg',
    '/st josue/6.jpg',
    '/st josue/7.jpg',
    '/st josue/8.jpg',
    '/st josue/9.jpg',
    '/st josue/10.jpg',
    '/st josue/11.jpg',
    '/st josue/12.jpg',
    '/st josue/13.jpg',
    '/st josue/14.jpg',
    '/st josue/15.jpg',
    '/st josue/16.jpg',
    '/st josue/17.jpg',
    '/st josue/18.jpg',
    '/st josue/19.jpg',
    '/st josue/20.jpg',
    '/st josue/21.jpg',
    '/tradex/WhatsApp Image 2025-11-16 at 14.25.59 (2).jpeg',
    '/project1.jpg',
    '/project1.png',
    '/project2.jpg',
    '/project2.png',
    '/project3.jpg',
    '/project3.png'
];



const GalleryProjects = () => {
    const { t } = useTranslation();
    return ( 
        <section className="flex relative   justify-start z-10 min-h-[70vh]  lg:min-h-[120vh]  items-start w-full">
            <div className='w-full bg-primary flex justify-center   h-auto items-start min-h-[373px]'>
                <div className="w-full  relative flex flex-col py-8 md:py-16 max-w-[1450px] px-4 xl:px-44  m-0 p-0 justify-start items-start">

                    <span className="border-l-2 gap-2 pl-3 font-bold">{t("galleryProjects")}</span>
                    <div className="w-full flex flex-col items-start gap-4 py-4 md:py-8">

                        <h2 className="text-2xl md:text-4xl font-bold max-w-2xl text-balance">{t("galleryTitle")}</h2>
                        <p className="max-w-xl text-sm md:text-base">
                            {t("galleryDesc")}
                        </p>
                        
                      
                        

                    </div>

                </div>
                 <div className=" absolute w-full flex justify-center items-center overflow-x-hidden top-[40%]  lg:top-[28%] xl:top-[24%] left-0">

               <div className="w-full  relative flex flex-col py-8 md:py-16 max-w-[1450px] xl:px-44  m-0 p-0 justify-start items-start">
               <ImageGallery key={1} images={gallerie} />
</div>

                    </div>
            </div>

        </section>
    )
}

export default GalleryProjects
