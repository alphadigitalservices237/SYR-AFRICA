import { NavLink } from "react-router"
import { useTranslation } from 'react-i18next';


const Phylosophie = () => {
  const { t } = useTranslation();
  return (
    <section className="flex justify-start xl:justify-center z-10      pb-8 xl:pb-30 items-center w-full">
      <div className="w-full flex max-w-[1450px] px-4 xl:px-44  m-0 p-0 justify-between items-center flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col pt-8 gap-8 md:gap-17 justify-between items-start">

          <span className="border-l-2  border-primary gap-2 pl-3 font-bold">{t("ourPhilosophy")}</span>

          <div className="flex flex-col justify-start items-start gap-4 ">

            <h2 className="text-lg md:text-xl font-bold text-balance">{t("philosophyTitle")}</h2>
            <p className="text-base md:text-lg text-gray-light text-balance">{t("philosophyDescription")}</p>

            <NavLink to="/" className={"py-3 md:py-5 flex gap-2 font-medium bg-primary justify-center items-center px-6 md:px-8"}>
              <span>{t("learnMore")}</span>
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

        </div>
        <div className="flex justify-center items-center  lg:h-[509px] md:pt-16   w-full lg:w-1/2 mt-8 md:mt-0">
          <img src="/st josue/1.jpg" className="w-full h-full  object-contain" />
        </div>
      </div>
    </section>
  )
}

export default Phylosophie
