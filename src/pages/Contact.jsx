import { ArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const Contact = () => {
   const { t } = useTranslation();
   const [loading, setLoading] = React.useState(false);
   const [isSubmitted, setIsSubmitted] = React.useState(false);

   const categories = [
       {
           key: 'metalConstruction',
           name: t('metalConstructionFabrication'),
           services: [
               { name: t('structuralSteelFabrication') },
               { name: t('weldingServices') },
               { name: t('chaudronnerieForge') },
               { name: t('fabricationMetallique') },
               { name: t('fabricationMetalliqueGenerale') },
               { name: t('installationAlucobond') },
               { name: t('travailAcier') },
               { name: t('fabricationMontage') },
               { name: t('hangarsCiternes') },
               { name: t('fabricationMontageHangars') },
               { name: t('fabricationCiternesDiverses') }
           ]
       },
       {
           key: 'industrialSystems',
           name: t('industrialSystemsEquipment'),
           services: [
              //  { name: t('conveyorSystems') },
              //  { name: t('processEquipment') },
               { name: t('fabricationInstallationAscenseurs') },
               { name: t('tuyauterie') },
               { name: t('pontsRoulants') }
           ]
       },
       {
           key: 'architecturalMetalworks',
           name: t('architecturalMetalworks'),
           services: [
              //  { name: t('facadeSystems') },
              //  { name: t('staircasesRailings') },
              //  { name: t('fabricationOuvragesDivers') },
              //  { name: t('menuiserieMetallique') }
           ]
       },
      //  {
      //      key: 'marineMaintenance',
      //      name: t('marineMaintenanceServices'),
      //      services: [
      //          { name: t('shipRepair') },
      //          { name: t('offshoreStructures') },
      //          { name: t('servicesNavals') },
      //          { name: t('maintenanceNavale') }
      //      ]
      //  },
       {
           key: 'safetySecurity',
           name: t('safetySecuritySystems'),
           services: [
              //  { name: t('systemesSecurite') },
               { name: t('installationSystemesAntiIncendie') }
           ]
       }
   ];

  const serviceKey = import.meta.env.VITE_ID_SERVICE_EMAIL || "";
  const templateKey = import.meta.env.VITE_ID_TEMPLATE_EMAIL || "";
  const publicKey = import.meta.env.VITE_PUBLIC_KEY_EMAIL || "";

  React.useEffect(() => {
    emailjs.init({
      publicKey,
      blockHeadless: true,
      blockList: { watchVariable: "phone" },
      limitRate: { id: "app", throttle: 10000 },
    });
  }, [publicKey]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    setLoading(true);

    const messageAllFields = `
      ${t("fullNameLabel")}: ${data.fullName}
      ${t("companyNameLabel")}: ${data.companyName}
      ${t("emailLabel")}: ${data.email}
      ${t("phoneLabel")}: ${data.phone}
      ${t("preferredContactMethodLabel")}: ${data.contactMethod}
      ${t("projectTypeLabel")}: ${data.projectType}
      ${t("projectDescriptionLabel")}: ${data.projectDescription}
      ${t("cityLabel")}: ${data.city}
      ${t("countryLabel")}: ${data.country}
      ${t("siteAddressLabel")}: ${data.siteAddress}
      ${t("expectedStartDateLabel")}: ${data.startDate}
      ${t("estimatedCompletionTimelineLabel")}: ${data.timeline}
      ${t("agreeToContactLabel")}: ${data.agreeContact ? t("yes") : t("no")}
      ${t("acceptPolicyLabel")}: ${data.acceptPolicy ? t("yes") : t("no")}
    `;


    const templateParams = {
      name: data.fullName,
      title: data.projectType,
      email: data.email,
      message: messageAllFields
    };

    console.log(templateParams,"--00df")

    emailjs
      .send(serviceKey, templateKey, templateParams)
      .then(() => {
        setLoading(false);
        reset();
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(false);
        toast.error(t("errorSending"));
      });
  };

  return (
    <div className="min-h-screen">
      <section className="flex  relative -top-[55px]  justify-start z-10  items-start w-full">
        <div className=' absolute  h-full lg:h-[700px] overflow-hidden w-full'>
          <img src='./hero2.jpg' className='h-full w-full   object-cover' />
        </div>
        <div className='w-full z-10 bg-gradient-to-r  pt-20 lg:pt-0 via-primary/90 to-[#FF7C7E]/90 from-primary/90 flex justify-center    items-start h-auto lg:h-[700px]'>
          <div className="w-full  relative flex flex-col  lg:flex-row justify-between  max-w-[1450px] px-4 xl:px-44  h-full m-0 p-0  items-start">
            <div className='w-full lg:w-1/2   py-8 lg:py-16 flex flex-col gap-4 lg:gap-6 justify-center  lg:items-center lg:items-start h-full'>
              <h2 className='text-3xl lg:text-5xl text-left w-full text-black font-bold max-w-lg text-balance'>{t("heroTitle")}</h2>
              <p className="text-black text-balance text-left w-full text-lg">{t("heroSubtitle")}</p>
            </div>
            <div className='w-full lg:w-1/2  flex justify-center items-center h-full'>
              <img src='./worker.png' className='h-[400px] lg:h-[700px]   object-cover' />
            </div>
          </div>
        </div>
      </section>

      <div className="lg:py-12  lg:px-8">
        <div className="max-w-3xl lg:mx-auto">
        {isSubmitted ? (
          <div className="text-center p-8 lg:p-16">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-[#B58000] mb-4">{t("messageSent")}</h2>
            <p className="text-gray-600 mb-6">{t("thankYouMessage")}</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-primary hover:bg-black hover:text-white text-white px-6 py-3 font-medium transition-colors"
            >
              {t("sendAnotherMessage")}
            </button>
          </div>
        ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="  lg:mb-56 p-4 lg:p-8 space-y-8">
     
          <div className=" pb-6">
            <h2 className="text-2xl font-semibold text-[#B58000] mb-4">{t("contactInfoTitle")}</h2>
            <p className="text-gray-light mb-6">{t("contactInfoDesc")}</p>

            <div className="grid grid-cols-1  gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">{t("fullName")}</label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName", { required: t("fullNameRequired") })}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">{t("companyName")}</label>
                <input
                  type="text"
                  id="companyName"
                  {...register("companyName")}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t("emailAddress")}</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: t("emailRequired"),
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: t("invalidEmail")
                    }
                  })}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t("phoneNumber")}</label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: t("phoneRequired"),
                    pattern: {
                      value: /^\d{9}$/,
                      message: t("phonePattern")
                    }
                  })}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("preferredContactMethod")}</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value={t("phoneCall")}
                    {...register("contactMethod", { required: t("selectContactMethod") })}
                    className="border-[#B58000] focus:ring-[#B58000]"
                  />
                  <span className="ml-2">{t("phoneCall")}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value={t("email")}
                    {...register("contactMethod", { required: t("selectContactMethod") })}
                    className="border-[#B58000] focus:ring-[#B58000]"
                  />
                  <span className="ml-2">{t("email")}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value={t("whatsApp")}
                    {...register("contactMethod", { required: t("selectContactMethod") })}
                    className="border-[#B58000] focus:ring-[#B58000]"
                  />
                  <span className="ml-2">{t("whatsApp")}</span>
                </label>
              </div>
              {errors.contactMethod && <span className="text-red-500 text-sm">{errors.contactMethod.message}</span>}
            </div>
          </div>

          {/* Project Details */}
          <div className=" pb-6">
            <h2 className="text-2xl font-semibold text-[#B58000] mb-4">{t("projectDetailsTitle")}</h2>
            <p className="text-gray-light mb-6">{t("projectDetailsDesc")}</p>
  <div>
    <label htmlFor="projectType" className="block text-sm font-medium  text-gray-700">{t("projectType")}</label>
    <select
      id="projectType"
      {...register("projectType", { required: t("projectDescRequired") })}
      className="mt-1 block w-full border-[#B58000] border my-8  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
    >
      <option value="">{t("selectProjectType")}</option>
      {categories.map((category) => (
        <optgroup key={category.key} label={category.name}>
          {category.services.map((service) => (
            <option key={service.name} value={service.name}>
              {service.name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
    {errors.projectType && <span className="text-red-500 text-sm">{errors.projectType.message}</span>}
  </div>
            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
            

              <div className="md:col-span-2">
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">{t("projectDescription")}</label>
                <textarea
                  id="projectDescription"
                  {...register("projectDescription", { required: t("projectDescRequired") })}
                  rows={4}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                  placeholder={t("projectDescPlaceholder")}
                />
                {errors.projectDescription && <span className="text-red-500 text-sm">{errors.projectDescription.message}</span>}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">{t("city")}</label>
                <input
                  type="text"
                  id="city"
                  {...register("city")}
                  placeholder={t("enterCity")}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">{t("country")}</label>
                <input
                  type="text"
                  id="country"
                  {...register("country")}
                  placeholder={t("enterCountry")}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="siteAddress" className="block text-sm font-medium text-gray-700">{t("siteAddress")}</label>
                <input
                  type="text"
                  id="siteAddress"
                  {...register("siteAddress")}
                  placeholder={t("enterSiteAddress")}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">{t("expectedStartDate")}</label>
                <input
                  type="text"
                  id="startDate"
                  {...register("startDate")}
                  placeholder={t("startDatePlaceholder")}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">{t("estimatedCompletionTimeline")}</label>
                <input
                  type="text"
                  id="timeline"
                  {...register("timeline")}
                  placeholder={t("timelinePlaceholder")}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>
            </div>
          </div>

          {/* Agreements */}
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("agreeContact", {
                  required: t("agreeContactRequired"),
                  validate: value => value === true || t("agreeContactRequired")
                })}
                className="border-[#B58000] size-6 border  focus:ring-[#B58000]"
              />
              <span className="ml-2 text-sm">{t("agreeContact")}</span>
            </label>
            {errors.agreeContact && <span className="text-red-500 text-sm">{errors.agreeContact.message}</span>}

            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("acceptPolicy", {
                  required: t("acceptPolicyRequired"),
                  validate: value => value === true || t("acceptPolicyRequired")
                })}
                className="border-[#B58000] size-6 border border-[] focus:ring-[#B58000]"
              />
              <span className="ml-2 text-sm">{t("acceptPolicy")}</span>
            </label>
            {errors.acceptPolicy && <span className="text-red-500 text-sm">{errors.acceptPolicy.message}</span>}
          </div>

          {/* Submit Button */}
          <div className="text-center w-full">
           <button
             type="submit"
             disabled={loading}
             className={"flex py-4 w-full font-medium hover:bg-black hover:text-white justify-center gap-2 items-center bg-primary px-4 lg:px-8 py-2 lg:py-4 text-sm lg:text-base disabled:opacity-50"}
           >
             <span>{loading ? t("sending") : t("getQuote")}</span>
             <ArrowRightIcon className="w-4 lg:w-5 h-5" />
           </button>
          </div>
        </form>
        )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
