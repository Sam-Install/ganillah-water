import React from 'react'
import Hero2 from '../components/Hero2'
import tp2 from '../assets/tap2.jpeg'

const About = () => {
  return (
    <div>

      <Hero2/>

      <div className='flex flex-col sm:flex-row gap-2 my-10 items-center'>

      <div className='w-full sm:w-1/2'>

      <img src={tp2} alt="waterafrica" className='rounded' />

      </div>

      <div className='w-full sm:w-1/2'>

      <h1 className='prata-regular text-center text-blue-600'>Who We Are</h1>
      <p className='text-center mb-2'>Ganilla Water is a leading provider of water solutions, dedicated to addressing the diverse needs of our clients with expertise and innovation. Established with a commitment to excellence, Mikam Water Limited has successfully delivered a wide array of services, ranging from hydrological surveys to swimming pool treatments.

Our team of skilled professionals brings together years of experience and a passion for creating sustainable water management solutions. We take pride in our client-centric approach, ensuring that every project receives the attention it deserves, resulting in successful outcomes and lasting relationships.

Explore our journey, meet the team behind Mikam Water, and understand why we are the preferred choice for those seeking reliable and effective water solutions.</p>

      </div>

      </div>

    </div>
  )
}

export default About