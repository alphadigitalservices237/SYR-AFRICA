import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import CTA from "./CTA";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  const fastLinkTab = [
    {
      link: "/",
      title: t("homeFooter"),
    },
    {
      link: "/projets",
    title: t("projectsFooter"),
    },
    {
      link: "/services",
      title: t("servicesFooter"),
    },
    {
      link: "/story",
      title: t("storyFooter"),
    },
    {
      link: "/contact",
      title: t("contactFooter"),
    },
  ];

  const OurServicesLinkTab = [
    {
      link: "/#services",
      title: t("termsServices"),
    },
    {
      link: "/#services",
      title: t("licensing"),
    },
    {
      link: "/#services",
      title: t("faqs"),
    },
    {
      link: "/#services",
      title: t("legalDisclosure"),
    },
  ];

  const socialMedia = [
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          fill="#fff"
          d="M27.333 14C27.333 6.64 21.36.667 14 .667S.667 6.64.667 14c0 6.453 4.586 11.827 10.666 13.067V18H8.667v-4h2.666v-3.334A4.67 4.67 0 0 1 16 6h3.333v4h-2.666c-.734 0-1.334.6-1.334 1.333V14h4v4h-4v9.267c6.734-.667 12-6.347 12-13.267"
        ></path>
      </svg>,
      link: "https://www.facebook.com/profile.php?id=61574895666427"
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          fill="#fff"
          d="M27.293 2.667H4.707a1.933 1.933 0 0 0-1.96 1.906v22.854a1.933 1.933 0 0 0 1.96 1.906h22.586a1.933 1.933 0 0 0 1.96-1.906V4.573a1.93 1.93 0 0 0-1.96-1.906m-16.506 22.32h-4v-12h4zm-2-13.68a2.08 2.08 0 0 1 0-4.16 2.093 2.093 0 1 1 0 4.16m16.426 13.68h-4v-6.44c0-1.614-.573-2.667-2.026-2.667a2.2 2.2 0 0 0-2.054 1.453c-.104.314-.15.644-.133.974v6.666h-4v-12h4v1.694a4 4 0 0 1 3.613-2c2.667 0 4.6 1.72 4.6 5.413z"
        ></path>
      </svg>,
      link: "/"
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.4 4.54657C22.1774 3.31205 20.7214 2.3332 19.1167 1.66706C17.512 1.00092 15.7908 0.66082 14.0533 0.666576C6.77334 0.666576 0.840004 6.59991 0.840004 13.8799C0.840004 16.2132 1.45334 18.4799 2.6 20.4799L0.733337 27.3332L7.73334 25.4932C9.66667 26.5466 11.84 27.1066 14.0533 27.1066C21.3333 27.1066 27.2667 21.1732 27.2667 13.8932C27.2667 10.3599 25.8933 7.03991 23.4 4.54657ZM14.0533 24.8666C12.08 24.8666 10.1467 24.3332 8.45334 23.3332L8.05334 23.0932L3.89334 24.1866L5 20.1332L4.73334 19.7199C3.63673 17.9693 3.05457 15.9456 3.05334 13.8799C3.05334 7.82658 7.98667 2.89324 14.04 2.89324C16.9733 2.89324 19.7333 4.03991 21.8 6.11991C22.8235 7.13839 23.6346 8.34997 24.1862 9.68435C24.7378 11.0187 25.0189 12.4494 25.0133 13.8932C25.04 19.9466 20.1067 24.8666 14.0533 24.8666ZM20.08 16.6532C19.7467 16.4932 18.12 15.6932 17.8267 15.5732C17.52 15.4666 17.3067 15.4132 17.08 15.7332C16.8533 16.0666 16.2267 16.8132 16.04 17.0266C15.8533 17.2532 15.6533 17.2799 15.32 17.1066C14.9867 16.9466 13.92 16.5866 12.6667 15.4666C11.68 14.5866 11.0267 13.5066 10.8267 13.1732C10.64 12.8399 10.8 12.6666 10.9733 12.4932C11.12 12.3466 11.3067 12.1066 11.4667 11.9199C11.6267 11.7332 11.6933 11.5866 11.8 11.3732C11.9067 11.1466 11.8533 10.9599 11.7733 10.7999C11.6933 10.6399 11.0267 9.01324 10.76 8.34657C10.4933 7.70658 10.2133 7.78657 10.0133 7.77324H9.37334C9.14667 7.77324 8.8 7.85324 8.49334 8.18657C8.2 8.51991 7.34667 9.31991 7.34667 10.9466C7.34667 12.5732 8.53334 14.1466 8.69334 14.3599C8.85334 14.5866 11.0267 17.9199 14.3333 19.3466C15.12 19.6932 15.7333 19.8932 16.2133 20.0399C17 20.2932 17.72 20.2532 18.2933 20.1732C18.9333 20.0799 20.2533 19.3732 20.52 18.5999C20.8 17.8266 20.8 17.1732 20.7067 17.0266C20.6133 16.8799 20.4133 16.8132 20.08 16.6532Z" fill="white" />
      </svg>
      ,
      link: "/"
    },

  ]

  return (
    <footer className="flex flex-col  bg-black text-white w-full justify-center items-center">

      {!isContactPage && <CTA />}

      <div className="max-w-[1450px]  py-8 lg:py-12 px-4 xl:px-44 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {/* Logo et Contact Info */}
          <div className="flex flex-col gap-y-6">
            <NavLink to="/" className="max-w-[120px]">
              <img src={"./syr 2.png"} alt="SYR Africa" />
            </NavLink>

            <div className="flex flex-col gap-y-4 text-sm">
              <div className="flex flex-col gap-1">
                <span className="font-medium  text-primary">Yaoundé - CMR</span>
                <span className="text-white font-light  text-xs lg:text-sm">Omnisport, Rue Coeur Ouvert</span>
              </div>

              {/* <div className="flex flex-col gap-1">
                <span className="font-medium text-primary">Obala - CMR</span>
                <span className="text-white   font-light   text-xs lg:text-sm">Rue monte des anges</span>
              </div> */}
            </div>

            <div className="flex justify-start gap-x-3 lg:gap-x-4 items-center pt-2">
              <a href={"https://www.instagram.com/syrafrica?igsh=bmkyNmN4bXJ3NHdz"} className="mr-2">
                <Instagram />
              </a>
              <a href={"https://tiktok.com/@syrafrica_camerro"} className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                  ></path>
                </svg>
              </a>

              <a href="https://wa.me/237659312616" target="_blank" rel="noopener noreferrer" className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#25D366"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* SYR AFRICA */}
          <div className="flex flex-col gap-y-6">
            <h3 className="text-sm font-medium  underline underline-offset-8 pb-8">SYR AFRICA</h3>
            <ul className="flex gap-y-3 justify-start items-start flex-col text-sm text-white font-light">
              {fastLinkTab?.map((link, index) => (
                <li key={"fastlink" + index}>
                  <NavLink to={link.link} className="hover:text-primary transition-colors">{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources (hidden on mobile) */}
          <div className="flex flex-col justify-start items-start gap-y-6">
              <img src="./qrcode.png" className="h-56 object-contain" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-y-6">
            <h3 className="text-sm font-medium  underline underline-offset-8 pb-8">{t("contactFooterTitle")}</h3>
            <div className="flex flex-col justify-start items-start ">

              <span className="text-white text-xs lg:text-sm">{t("phone")}</span>
              <div className="flex items-center gap-x-2 text-xs lg:text-sm">
                <Phone className="size-3 lg:size-4 text-primary flex-shrink-0" />
                <span className="font-medium text-primary">(+237) 659 312 616 </span>
              </div>

              <span className="text-white text-xs lg:text-sm pt-4">{t("email")}</span>
              <div className="flex items-center gap-x-2 text-xs lg:text-sm">
                <Mail className="size-3 lg:size-4 text-primary flex-shrink-0" />
                <span className="font-medium text-primary">syrafrica_cameroun@yahoo.com</span>
               
              </div>
                <span className="font-medium text-primary">syrafrica.cameroun@gmail.com</span>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center py-4 lg:py-6 px-4 xl:px-44 w-full max-w-[1450px] gap-4 lg:gap-0">
        <span className="text-xs lg:text-sm text-white  w-full text-left">{t("copyright")}</span>
        <div className="flex justify-center lg:justify-end gap-x-4 lg:gap-x-6 items-center">

        </div>
      </div>

    </footer>
  );
};

export default Footer;