import { ArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
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
      Full Name: ${data.fullName}
      Company Name: ${data.companyName}
      Email: ${data.email}
      Phone: ${data.phone}
      Preferred Contact Method: ${data.contactMethod}
      Project Type: ${data.projectType}
      Project Description: ${data.projectDescription}
      City: ${data.city}
      Country: ${data.country}
      Site Address: ${data.siteAddress}
      Expected Start Date: ${data.startDate}
      Estimated Completion Timeline: ${data.timeline}
      Agree to Contact: ${data.agreeContact ? 'Yes' : 'No'}
      Accept Policy: ${data.acceptPolicy ? 'Yes' : 'No'}
    `;

    const templateParams = {
      name: data.fullName,
      title: data.projectType,
      email: data.email,
      message: messageAllFields
    };

    emailjs
      .send(serviceKey, templateKey, templateParams)
      .then(() => {
        setLoading(false);
        reset();
        toast.success("Message sent successfully");
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(false);
        toast.error("An error occurred while sending the message");
      });
  };

  return (
    <div className="min-h-screen">
      <section className="flex  relative -top-[55px]  justify-start z-10  items-start w-full">
        <div className=' absolute  h-full lg:h-[700px] overflow-hidden w-full'>
          <img src='./hero2.jpg' className='h-full w-full   object-cover' />
        </div>
        <div className='w-full z-10 bg-gradient-to-r   via-primary/90 to-[#FF7C7E]/90 from-primary/90 flex justify-center    items-start h-auto lg:h-[700px]'>
          <div className="w-full  relative flex flex-col lg:flex-row justify-between  max-w-[1450px] px-4 xl:px-44  h-full m-0 p-0  items-start">
            <div className='w-full lg:w-1/2   py-8 lg:py-16 flex flex-col gap-4 lg:gap-6 justify-center  items-center lg:items-start h-full'>
              <h2 className='text-3xl lg:text-5xl text-black font-bold max-w-lg text-balance'>Get a free Quote for Your Project Today!</h2>
              <p className="text-black text-balance text-lg">Share your project details so we can deliver an accurate and personalized quote.</p>
            </div>
            <div className='w-full lg:w-1/2  flex justify-center items-center h-full'>
              <img src='./worker.png' className='h-[400px] lg:h-[700px]   object-cover' />
            </div>
          </div>
        </div>
      </section>

      <div className="lg:py-12  lg:px-8">
        <div className="max-w-3xl lg:mx-auto">
       
        <form onSubmit={handleSubmit(onSubmit)} className="  lg:mb-56 p-4 lg:p-8 space-y-8">
     
          <div className=" pb-6">
            <h2 className="text-2xl font-semibold text-[#B58000] mb-4">Contact Information</h2>
            <p className="text-gray-light mb-6">Collects essential client details for follow-up.</p>

            <div className="grid grid-cols-1  gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName", { required: "Full name is required" })}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name (optional)</label>
                <input
                  type="text"
                  id="companyName"
                  {...register("companyName")}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{9}$/,
                      message: "Phone number must be 9 digits"
                    }
                  })}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Phone Call"
                    {...register("contactMethod", { required: "Please select a contact method" })}
                    className="border-[#B58000] focus:ring-[#B58000]"
                  />
                  <span className="ml-2">Phone Call</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="E-mail"
                    {...register("contactMethod", { required: "Please select a contact method" })}
                    className="border-[#B58000] focus:ring-[#B58000]"
                  />
                  <span className="ml-2">E-mail</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="WhatsApp"
                    {...register("contactMethod", { required: "Please select a contact method" })}
                    className="border-[#B58000] focus:ring-[#B58000]"
                  />
                  <span className="ml-2">WhatsApp</span>
                </label>
              </div>
              {errors.contactMethod && <span className="text-red-500 text-sm">{errors.contactMethod.message}</span>}
            </div>
          </div>

          {/* Project Details */}
          <div className=" pb-6">
            <h2 className="text-2xl font-semibold text-[#B58000] mb-4">Project Details</h2>
            <p className="text-gray-light mb-6">Helps identify the type of service requested.</p>
  <div>
    <label htmlFor="projectType" className="block text-sm font-medium  text-gray-700">Project Type</label>
    <select
      id="projectType"
      {...register("projectType", { required: "Project type is required" })}
      className="mt-1 block w-full border-[#B58000] border my-8  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
    >
      <option value="">Select Project Type</option>
      <option value="Boilermaking & Forging">Boilermaking & Forging</option>
      {/* Add more options as needed */}
    </select>
    {errors.projectType && <span className="text-red-500 text-sm">{errors.projectType.message}</span>}
  </div>
            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
            

              <div className="md:col-span-2">
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description *</label>
                <textarea
                  id="projectDescription"
                  {...register("projectDescription", { required: "Project description is required" })}
                  rows={4}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                  placeholder="Describe your needs, dimensions, materials, or specific requirements."
                />
                {errors.projectDescription && <span className="text-red-500 text-sm">{errors.projectDescription.message}</span>}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  {...register("city")}
                  placeholder="Enter city"
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  {...register("country")}
                  placeholder="Enter country"
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="siteAddress" className="block text-sm font-medium text-gray-700">Site Address</label>
                <input
                  type="text"
                  id="siteAddress"
                  {...register("siteAddress")}
                  placeholder="Enter site address"
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Expected Start Date</label>
                <input
                  type="text"
                  id="startDate"
                  {...register("startDate")}
                  placeholder="DD/MM/YYYY"
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">Estimated Completion Timeline</label>
                <input
                  type="text"
                  id="timeline"
                  {...register("timeline")}
                  placeholder="Enter value in months (ex: 12 months)"
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
                  required: "You must agree to be contacted",
                  validate: value => value === true || "You must agree to be contacted"
                })}
                className="border-[#B58000] size-6 border  focus:ring-[#B58000]"
              />
              <span className="ml-2 text-sm">I agree to be contacted regarding my project inquiry.</span>
            </label>
            {errors.agreeContact && <span className="text-red-500 text-sm">{errors.agreeContact.message}</span>}

            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("acceptPolicy", {
                  required: "You must accept the privacy policy",
                  validate: value => value === true || "You must accept the privacy policy"
                })}
                className="border-[#B58000] size-6 border border-[] focus:ring-[#B58000]"
              />
              <span className="ml-2 text-sm">I accept the privacy policy.</span>
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
             <span>{loading ? "Sending..." : "Get a Quote"}</span>
             <ArrowRightIcon className="w-4 lg:w-5 h-5" />
           </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
