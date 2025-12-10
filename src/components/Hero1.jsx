import React from 'react'
import w2 from '../assets/water.jpeg'
import { Link } from 'react-router-dom'

const Hero1 = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-blue-500 text-center items-center justify-center'>

        <div className='w-full sm:w-1/2 py-10 sm:py-0'>

        <h1 className=' prata-regular  text-red-600 text-2xl'>Ganilla<span className='text-2xl text-blue-600 '>Water</span></h1>
        <h2 className='text-blue-500 mb-1'>Putting Smiles Across Villagers</h2>
        <p>We Believe Water Should Be accessed by Anyone, Anywhere</p>

        <div className='space-x-3 p-2'>

          <Link to='about'><button className='bg-red-500 text-white rounded px-6 py-1'>Learn More</button></Link>  
           <Link to='contacts'><button className='bg-blue-500 text-white rounded px-6 py-1'>Contact Us</button></Link> 

        </div>

        </div>


        <div className='w-full sm:w-1/2'>

        <img src={w2} alt="water"   />

        </div>

    </div>
  )
}

export default Hero1