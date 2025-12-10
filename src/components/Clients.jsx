import React from 'react'
import cl1 from '../assets/client1.jpeg'
import cl2 from '../assets/client2.jpeg'
import cl3 from '../assets/client3.jpeg'

const Clients = () => {

    const family = [

        {
             img:cl1,
             name: 'Eliza',
             description:'choosing Ganillah Water Limited for our project was the right decision. Their team showcased reliable expertise in every aspect, from the initial consultation to the flawless implementation. We now have a sustainable water solution tailored to our needs.'
        },


        
        {
             img:cl2,
             name: 'Samila',
             description:'The efficiency and professionalism demonstrated by Ganillah Water Limited throughout our project were commendable. The teams attention to detail and commitment to quality made the entire process smooth and worry-free. Highly recommended!',
        },



        
        {
             img:cl3,
             name: 'Johnia',
             description:'Ganilla Water Limited stands out for their innovative approach to water solutions. They introduced us to cutting-edge technologies that enhanced the efficiency and sustainability of our project. Were grateful for their commitment to staying ahead in the industry'
        },


    ]

  return (
    <div className='my-10'>

      <h1 className='prata-regular text-2xl text-red-500 text-center mb-2'>Our Amazing Clients/ Family</h1>
      <p className='text-blue-500 text-center'> At Ganilla Water, we understand the pivotal role that water plays in the success of any project. Our clients, who are like family to us speak volumes about their experiences </p>
        
   
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4'>

    {
         
          family.map((item,index)=>(

             <div key={index} className='flex flex-col items-center justify-center text-center bg-blue-400 text-white'>

                <img src={item.img} alt={item.name} className='w-full h-48 object-cover' />

                <h1 className='text-black mt-2'>{item.name}</h1>
                <p className='p-2'>{item.description}</p>

                </div>
          ))
    }


   </div>


    </div>
  )
}

export default Clients