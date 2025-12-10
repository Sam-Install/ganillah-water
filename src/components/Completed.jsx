import React from 'react'
import { FaRocket } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaAward } from "react-icons/fa6";

const Completed = () => {

  const projects = [
    {
      icon: <FaRocket className="text-4xl text-white" />,
      number: '30+',
      description: 'projects'
    },
    {
      icon: <IoIosPeople className="text-4xl text-white" />,
      number: '60+',
      description: 'satisfied clients'
    },
    {
      icon: <FaAward className="text-4xl text-white" />,
      number: '6+',
      description: 'years of success'
    }
  ]

  return (
    <div className='my-10'>

      <h1 className='prata-regular text-center text-2xl text-red-600'>Completed Projects</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-4'>

        {projects.map((item, index) => (
          <div key={index} className='flex flex-col items-center bg-blue-800 shadow-md rounded p-4 text-white'>

            {item.icon}

             <h2 className='text-xl font-bold mt-3'>{item.number}</h2>
            <p>{item.description}</p>

          </div>

         
          
        ))}

        
    

           

      </div>

    </div>
  )
}

export default Completed
