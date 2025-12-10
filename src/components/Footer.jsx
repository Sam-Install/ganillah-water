import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 md:px-16 lg:px-24 xl:px-32 pt-10 pb-6 w-full">

    
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-white/20 pb-8">

       
        <div className="md:max-w-md">
    <Link to='/'> <h1 className="text-2xl font-bold text-red-600">
            Ganilla<span className="text-white">Water</span>
          </h1></Link>     

          <p className="mt-4 text-sm leading-relaxed text-blue-100">
            At Ganilla Water, we are committed to delivering comprehensive water
            solutions tailored to meet your unique needs. From hydrological
            surveys to wastewater treatment, we ensure access to clean,
            sustainable, and reliable water sources.
          </p>
        </div>

        {/* LINKS + CONTACT */}
        <div className="flex flex-col sm:flex-row gap-10">

          {/* COMPANY LINKS */}
          <div>
            <h2 className="font-semibold mb-4 text-white text-lg">Company</h2>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/" className="hover:text-yellow-300">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-300">About</a></li>
              <li><a href="/contacts" className="hover:text-yellow-300">Contacts</a></li>
              <li><a href="/services" className="hover:text-yellow-300">Services</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="font-semibold mb-4 text-white text-lg">Get in touch</h2>

            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <p>074774654</p>
              </div>

              <div className="flex items-center gap-2">
                <MdOutlineMail />
                <p>ganillawater@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <p className="pt-4 text-center text-xs md:text-sm text-blue-100">
        © {new Date().getFullYear()} Ganilla Water Limited. All Rights Reserved.
      </p>

    </footer>
  )
}

export default Footer
