import React from 'react'
import Hero2 from '../components/Hero3'
import { TiContacts } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";
import Map from '../components/Map';


const Contacts = () => {
  return (
    <div>
      <Hero2 />

      <div className="my-12 px-6 md:px-12 lg:px-24">

       

        <div className="flex flex-col sm:flex-row gap-10">

        
          <div className="w-full sm:w-1/2 space-y-8">

           <h1 className='prata-regular text-center text-2xl'>Get In Touch</h1>
           <p>Have questions or ready to start your water project with Ganilla Water? We are here to help. Reach out to our team of experts through the contact information below:</p>

            {/* PHONE */}
            <div className="flex gap-4 items-start">
              <TiContacts className="text-5xl text-blue-600" />
              <div>
                <h1 className="text-xl text-blue-700 font-semibold">Call us on</h1>
                <p className="text-gray-700 mt-1">+254 787 8777</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 items-start">
              <SiMinutemailer className="text-5xl text-blue-600" />
              <div>
                <h1 className="text-xl text-blue-700 font-semibold">Email us at</h1>
                <p className="text-gray-700 mt-1">ganillawater@gmail.com</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex gap-4 items-start">
              <TfiWorld className="text-5xl text-blue-600" />
              <div>
                <h1 className="text-xl text-blue-700 font-semibold">Our Offices</h1>
                <p className="text-gray-700 mt-1">Nairobi, Kenya</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <div className="w-full sm:w-1/2">
            <h2 className="prata-regular text-2xl font-bold text-blue-700 mb-4">Send us a Message</h2>

            <form className="space-y-4 bg-blue-50 p-6 rounded-xl shadow-md">

              <div>
                <label className="block mb-1 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

         <Map/>

         
      </div>
    </div>
  )
}

export default Contacts
