import ImageGallery from "./ImageGallery"
import { useTranslation } from 'react-i18next';

const gallerie = [
    // Charpente City Stade FEICOM
    '/Charpente City Stade FEICOM/2.jpeg',
    '/Charpente City Stade FEICOM/3.jpeg',
    '/Charpente City Stade FEICOM/WhatsApp Image 2025-11-18 at 10.55.22.jpeg',
    '/Charpente City Stade FEICOM/WhatsApp Image 2025-11-18 at 10.56.54.jpeg',
    // construction de citerne
    '/construction de citerne/1.jpeg',
    '/construction de citerne/WhatsApp Image 2025-11-16 at 14.27.17 (1).jpeg',
    '/construction de citerne/WhatsApp Image 2025-11-16 at 14.27.17 (2) - Copie.jpeg',
    '/construction de citerne/WhatsApp Image 2025-11-16 at 14.27.17.jpeg',
    // construction metalique
    '/construction metalique/3.jpeg',
    '/construction metalique/4.jpeg',
    '/construction metalique/5.jpeg',
    '/construction metalique/6.jpeg',
    '/construction metalique/8.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.22 (2).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.25 (3).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.26 (1).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.26 (2).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.26.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.31 (2).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.31 (3).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.32 (1).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.32 (2).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.32.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.33 (1).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.33.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.34 (1).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.34.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.35 (3).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-16 at 14.27.36.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-18 at 10.55.18.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-18 at 10.55.19.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-18 at 10.55.23.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-18 at 10.56.51.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-18 at 10.56.52 (1).jpeg',
    '/construction metalique/WhatsApp Image 2025-11-18 at 10.56.52.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-18 at 10.56.53.jpeg',
    '/construction metalique/WhatsApp Image 2025-11-18 at 11.03.58 (1).jpeg',
    // embeddings style
    '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.23 (2).jpeg',
    '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.24 (1).jpeg',
    '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.27.jpeg',
    '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.29.jpeg',
    '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.30.jpeg',
    '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.31 (1).jpeg',
    '/embeddings style/WhatsApp Image 2025-11-16 at 14.27.31.jpeg',
    // Mayonnaise ROMA
    '/Mayonnaise ROMA/1.jpeg',
    '/Mayonnaise ROMA/2.jpeg',
    '/Mayonnaise ROMA/3.jpeg',
    '/Mayonnaise ROMA/4.jpeg',
    '/Mayonnaise ROMA/5.jpeg',
    '/Mayonnaise ROMA/6.jpeg',
    '/Mayonnaise ROMA/7.jpeg',
    '/Mayonnaise ROMA/8.jpeg',
    '/Mayonnaise ROMA/9.jpeg',
    '/Mayonnaise ROMA/10.jpeg',
    '/Mayonnaise ROMA/11.jpeg',
    '/Mayonnaise ROMA/12.jpeg',
    '/Mayonnaise ROMA/13.jpeg',
    '/Mayonnaise ROMA/14.jpeg',
    '/Mayonnaise ROMA/15.jpeg',
    '/Mayonnaise ROMA/16.jpeg',
    '/Mayonnaise ROMA/17.jpeg',
    '/Mayonnaise ROMA/18.jpeg',
    '/Mayonnaise ROMA/19.jpeg',
    '/Mayonnaise ROMA/20.jpeg',
    '/Mayonnaise ROMA/21.jpeg',
    '/Mayonnaise ROMA/22.jpeg',
    '/Mayonnaise ROMA/23.jpeg',
    '/Mayonnaise ROMA/24.jpeg',
    '/Mayonnaise ROMA/25.jpeg',
    // pont roulant
    '/pont roulant/1.jpeg',
    '/pont roulant/7.jpeg',
    '/pont roulant/9.jpeg',
    '/pont roulant/10.jpeg',
    '/pont roulant/11.jpeg',
    '/pont roulant/12.jpeg',
    '/pont roulant/13.jpeg',
    '/pont roulant/14.jpeg',
    '/pont roulant/16.jpeg',
    '/pont roulant/17.jpeg',
    '/pont roulant/18.jpeg',
    '/pont roulant/19.jpeg',
    '/pont roulant/20.jpeg',
    // st josue
    '/st josue/1.jpg',
    '/st josue/2.jpg',
    '/st josue/6.jpg',
    '/st josue/7.jpg',
    '/st josue/10.jpg',
    '/st josue/11.jpg',
    '/st josue/12.jpg',
    '/st josue/13.jpg',
    '/st josue/14.jpg',
    '/st josue/15.jpg',
    '/st josue/16.jpg',
    '/st josue/17.jpg',
    '/st josue/18.jpg',
    '/st josue/20.jpg',
    '/st josue/21.jpg',
    // tuyauterie
    '/tuyauterie/1.jpeg',
    '/tuyauterie/2.jpeg',
    '/tuyauterie/3.jpeg',
    '/tuyauterie/4.jpeg',
    '/tuyauterie/5.jpeg',
    '/tuyauterie/6.jpeg',
    '/tuyauterie/7.jpeg',
    '/tuyauterie/8.jpeg',
    '/tuyauterie/9.jpeg',
    '/tuyauterie/10.jpeg'
];



const GalleryProjects = () => {
    const { t } = useTranslation();
    return ( 
        <section className="flex relative    justify-start z-10 min-h-[70vh]  lg:min-h-[120vh]  items-start w-full">
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
                 <div className=" absolute w-full z-50 flex justify-center items-center overflow-x-hidden top-[40%]  lg:top-[28%] xl:top-[24%] left-0">

               <div className="w-full  relative flex flex-col py-8 md:py-16 max-w-[1450px] xl:px-44  m-0 p-0 justify-start items-start">
               <ImageGallery key={1} images={gallerie} />
</div>

                    </div>
            </div>

        </section>
    )
}

export default GalleryProjects
