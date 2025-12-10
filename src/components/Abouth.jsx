import React from 'react'
import wt2 from '../assets/water2.jpeg'
import wt3 from '../assets/water3.jpeg'
import wt4 from '../assets/water4.jpeg'
import wt5 from '../assets/water5.jpeg'
import { Link } from 'react-router-dom'

const Abouth = () => {

    const pictures = [


         {
             img:wt2
         },

         {
            img:wt3
         },

         {
            img:wt4
         },

         {
            img:wt5
         }
    ]

  return (
    <div className='flex flex-col sm:flex-row my-10 '>

        <div className='w-full sm:w-1/2 py-10 sm:py-0'>

        <h1 className='prata-regular text-2xl text-red-500 sm:text-lg text-center'>About Ganilla Water</h1>

<p>At Ganillah Water, we are dedicated to delivering comprehensive water solutions customized to meet your distinct needs. Our expertise spans a broad spectrum — from hydrological and geotechnical investigations to full-scale water supply design and treatment — ensuring you enjoy clean, sustainable and reliable water for any project.

We offer a wide range of services, including:

Hydrological and hydro-geological surveys to identify reliable water sources

Geotechnical and geophysical investigations for site suitability

Water supply design and infrastructure planning for homes, farms, businesses or communities

Borehole drilling, equipping and test-pumping to secure long-term groundwater access

Pump installation, including solar-powered and energy-efficient options

Construction of elevated and underground water storage structures (reservoirs, tanks, overhead storage)

Water quality analysis and treatment solutions (filtration, purification, disinfection) to make water safe for drinking and other uses

Comprehensive water system installation — from source to tap — plus maintenance and after-sales support

Whether you’re developing a new water supply system, rehabilitating an old one, or planning irrigation or community water distribution, Ganillah Water is your trusted partner from start to finish. We combine technical expertise, innovation, and commitment to sustainability to deliver water solutions that meet your project goals with reliability and integrity.

Start your journey toward efficient, safe and sustainable water management with Ganillah Water today.

Trust Ganillah Water to be with you at every step.</p>

<div className='w-full flex justify-center items-center'>

<Link to='/about'> <button className='bg-blue-600 text-sm text-white rounded px-4 py-1 p-2 mt-4 '>Learn More</button> </Link> 

</div>

        </div>

        


        <div className='w-full sm:w-1/2 '>

 <div className='grid-cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>

        {
            pictures.map((items, index)=>(

                <div key={index} className='flex flex-col items-center bg-white shadow-md rounded'>

                    <img src={items.img} alt="water-image" className='w-full h-48 object-cover' />


                    </div>
            ))
        }

        </div>

        </div>

    </div>
  )
}

export default Abouth