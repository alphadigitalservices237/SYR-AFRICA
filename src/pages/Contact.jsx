import { ArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    contactMethod: '',
    projectType: '',
    projectDescription: '',
    city: '',
    country: '',
    siteAddress: '',
    startDate: '',
    timeline: '',
    agreeContact: false,
    acceptPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
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
       
        <form onSubmit={handleSubmit} className="  lg:mb-56 p-4 lg:p-8 space-y-8">
     
          <div className=" pb-6">
            <h2 className="text-2xl font-semibold text-[#B58000] mb-4">Contact Information</h2>
            <p className="text-gray-light mb-6">Collects essential client details for follow-up.</p>

            <div className="grid grid-cols-1  gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                  required
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name (optional)</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Phone Call"
                    onChange={handleChange}
                    className="border-[#B58000] focus:ring-[#B58000]"
                  />
                  <span className="ml-2">Phone Call</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="E-mail"
                    onChange={handleChange}
                    className="border-[#B58000] focus:ring-[#B58000]"
                  />
                  <span className="ml-2">E-mail</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="WhatsApp"
                    onChange={handleChange}
                    className="border-[#B58000] focus:ring-[#B58000]"
                  />
                  <span className="ml-2">WhatsApp</span>
                </label>
              </div>
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
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-1 block w-full border-[#B58000] border my-8  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="Boilermaking & Forging">Boilermaking & Forging</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
            

              <div className="md:col-span-2">
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description *</label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                  placeholder="Describe your needs, dimensions, materials, or specific requirements."
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="siteAddress" className="block text-sm font-medium text-gray-700">Site Address</label>
                <input
                  type="text"
                  id="siteAddress"
                  name="siteAddress"
                  value={formData.siteAddress}
                  onChange={handleChange}
                  placeholder="Enter site address"
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Expected Start Date</label>
                <input
                  type="text"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  placeholder="DD/MM/YYYY"
                  className="mt-1 block w-full border-[#B58000] border  shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B58000] focus:border-[#B58000]"
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">Estimated Completion Timeline</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
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
                name="agreeContact"
                checked={formData.agreeContact}
                onChange={handleChange}
                className="border-[#B58000] size-6 border  focus:ring-[#B58000]"
                required
              />
              <span className="ml-2 text-sm">I agree to be contacted regarding my project inquiry.</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="acceptPolicy"
                checked={formData.acceptPolicy}
                onChange={handleChange}
                className="border-[#B58000] size-6 border border-[] focus:ring-[#B58000]"
                required
              />
              <span className="ml-2 text-sm">I accept the privacy policy.</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center w-full">
           <NavLink to={"/"} className={"flex py-4  font-medium hover:bg-black hover:text-white justify-center gap-2 items-center  bg-primary px-4 lg:px-8 py-2 lg:py-4 text-sm lg:text-base"} >
                    <span>Get a  Quote</span>
                    <ArrowRightIcon className="w-4  lg:w-5 h-5" />
                </NavLink>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
