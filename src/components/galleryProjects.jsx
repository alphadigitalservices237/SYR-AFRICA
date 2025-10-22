import ImageGallery from "./ImageGallery"

const gallerie = [
    '/gallery1.png',
    '/gallery2.png',
    '/gallery3.png',
    '/gallery4.png',
    '/gallery5.png',
    '/gallery6.png'
];



const GalleryProjects = () => {
    return (
        <section className="flex relative justify-start z-10 xl:pb-23  lg:min-h-[120vh] xl:min-h-screen items-start w-full">
            <div className='w-full bg-primary flex justify-center   h-auto items-start min-h-[373px]'>
                <div className="w-full  relative flex flex-col py-8 md:py-16 max-w-[1450px] px-4 xl:px-44  m-0 p-0 justify-start items-start">

                    <span className="border-l-2 gap-2 pl-3 font-bold">Galerie Projects </span>
                    <div className="w-full flex flex-col items-start gap-4 py-4 md:py-8">

                        <h2 className="text-2xl md:text-4xl font-bold max-w-lg text-balance">Your vision, brought to life — before construction begins.</h2>
                        <p className="max-w-xl text-sm md:text-base">
                            From 3D modeling to detailed renderings, SYR Africa allows you to explore every angle, refine every detail, and bring your vision to life before construction even begins.
                        </p>
                        
                      
                        

                    </div>

                </div>
                 <div className=" absolute w-full flex justify-center items-center overflow-x-hidden top-[51%]  lg:top-[28%] xl:top-[24%] left-0">

               <div className="w-full  relative flex flex-col py-8 md:py-16 max-w-[1450px] xl:px-44  m-0 p-0 justify-start items-start">
               <ImageGallery key={1} images={gallerie} />
</div>

                    </div>
            </div>

        </section>
    )
}

export default GalleryProjects
