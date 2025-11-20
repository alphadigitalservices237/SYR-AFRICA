
        
        import { useTranslation } from 'react-i18next';

        const Missions = () => {
          const { t } = useTranslation();
          return (
            <div className='py-15 w-full relative bg-black'>
                <img  src="/Mayonnaise ROMA/1.jpeg" className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0" />

                 <section className="flex  justify-start relative xl:justify-center z-10  items-center w-full">
                      <div className="w-full flex max-w-[1450px] px-4 xl:px-44  m-0 p-0 justify-between items-center flex-col-reverse lg:flex-row">
                        <div className="w-full lg:w-1/2 flex flex-col pt-8 gap-8 md:gap-17 justify-between items-start">
                
                          <span className="border-l-2  border-primary gap-2 pl-3 font-bold">{t("mission")}</span>

                          <div className="flex flex-col text-primary justify-start items-start gap-4 ">

                            <h2 className="text-lg md:text-xl font-bold text-balance">{t("missionTitle")}</h2>
                            <p className="text-base md:text-lg text-white text-balance">{t("missionDescription")}</p>
                
                          
                          </div>
                
                        </div>
                        <div className="flex justify-center items-center  lg:h-[509px] md:pt-16   w-full lg:w-1/2 mt-8 md:mt-0">
                          <img src="/construction de citerne/1.jpeg" className="w-full h-full  object-contain" />
                        </div>
                      </div>
                    </section>

                       <section className="flex justify-start xl:justify-center z-10      pb-8 xl:pb-30 items-center w-full">
                      <div className="w-full flex max-w-[1450px] px-4 xl:px-44 gap-8 m-0 p-0 justify-between items-center flex-col lg:flex-row">

                        <div className="flex justify-center items-center  lg:h-[709px]  w-full lg:w-1/2 mt-8 md:mt-0">
                          <img src="/pont roulant/1.jpeg" className="w-full h-full lg:h-[709px]  object-contain" />
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col  gap-8 md:gap-17 justify-between items-start">
                
                          <span className="border-l-2  border-primary gap-2 pl-3 font-bold">{t("vision")}</span>

                          <div className="flex flex-col justify-start items-start gap-4 ">

                            <h2 className="text-lg md:text-xl font-bold text-primary text-balance">{t("visionTitle")}</h2>
                            <p className="text-base md:text-lg text-white text-balance">{t("visionDescription")}</p>
                
                           
                          </div>
                
                        </div>
                     
                      </div>
                    </section>
              
            </div>
          )
        }
        
        export default Missions
        