import React from 'react'
import Hero4 from '../components/Hero4'
import w5 from '../assets/water5.jpeg'
import en from '../assets/engineer.jpeg'

const Service = () => {
  return (
    <div>

      <Hero4 />

      <h1 className='prata-regular text-center text-blue-600 text-2xl my-10'>
        Our Services
      </h1>
      <p className='text-center'>
        Explore the wide range of services that we offer at Ganilla Water
      </p>

      <div className='flex flex-col sm:flex-row gap-4 my-10'>

        {/* Left side services 1–4 */}
        <div className="w-full sm:w-1/2 space-y-6">
          <h2 className="prata-regular text-2xl text-blue-600 font-bold mb-4 text-center sm:text-left">
            Services Offered at Ganillah Water
          </h2>

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">1. Hydrogeological Survey</h3>
            <p className="text-gray-700 text-sm">
              Our hydrological surveys provide detailed understanding of water resources.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">2. Geotechnical Survey</h3>
            <p className="text-gray-700 text-sm">
              Gain insights into geological conditions for strong project foundations.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              3. Water Supply Survey, Design & Installation
            </h3>
            <p className="text-gray-700 text-sm">
              We handle survey, design, and installation for a seamless water supply process.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">4. Borehole Drilling</h3>
            <p className="text-gray-700 text-sm">
              Reliable groundwater access through professional borehole drilling.
            </p>
          </div>
        </div>

     
        <div className='w-full sm:w-1/2'>
          <img src={w5} alt="africawater" className='rounded object-cover w-full h-full' />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 my-10'>

 
        <div className='w-full sm:w-1/2'>
          <img src={en} alt="boreholes" className='rounded object-cover w-full h-full' />
        </div>

        <div className="w-full sm:w-1/2 space-y-6">

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">8. Elevated Water Storage Structures</h3>
            <p className="text-gray-700 text-sm">
              Durable elevated structures for optimized water storage.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">9. Water Quality Analysis</h3>
            <p className="text-gray-700 text-sm">
              Ensures your water meets the highest safety and purity standards.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              10. Water Treatment – Domestic, Agricultural & Industrial
            </h3>
            <p className="text-gray-700 text-sm">
              Tailored treatment solutions for all water use categories.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              11. Waste Water Treatment – Domestic & Industrial
            </h3>
            <p className="text-gray-700 text-sm">
              Eco-friendly and compliant wastewater treatment systems.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">12. Swimming Pools & Treatment</h3>
            <p className="text-gray-700 text-sm">
              Professional swimming pool design, construction and water treatment.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">13. Irrigation Systems</h3>
            <p className="text-gray-700 text-sm">
              Efficient irrigation design & installation for maximum crop growth.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Service
