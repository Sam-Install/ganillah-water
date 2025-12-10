import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [visible,setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between p-5  py-5'>

  <Link to='/'><h1 className='prata-regular text-sm text-red-600'>Ganilla<span className='text-sm text-blue-600'>Water</span></h1></Link>      

        <ul className='hidden sm:flex  gap-4  text-blue-700'>

            <NavLink to='/' className='flex flex-col gap-1 items-center'>
                <p>Home</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-orange-500 hidden'/>
            </NavLink>

              <NavLink to='about' className='flex flex-col gap-1 items-center'>
                <p>About</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-orange-500 hidden'/>
            </NavLink>



             <NavLink to='services' className='flex flex-col gap-1 items-center'>
                <p>Services</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-orange-500 hidden'/>
            </NavLink>

              
                <NavLink to='contacts' className='flex flex-col gap-1 items-center'>
                <p>Contacts</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-orange-500 hidden' />
            </NavLink>


        </ul>

        <div className='flex justify-between items-center gap-4'>

 <a
  href="https://wa.me/254753879163?text=Hello%20I%20am%20interested%20in%20your%20services"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="text-sm bg-green-600 text-white px-4 py-1 rounded p-2">
    Whatsapp Us
  </button>
</a>


      <AiOutlineMenu onClick={()=>setVisible(true)} className='text-2xl sm:hidden ' />  

        </div>
        
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden  bg-blue-300 transition-all ${visible ? 'w-full' : 'w-0'}`}>

            <div className='flex flex-col text-black'>

                <div className='flex items-center gap-4 p-3'>

  <FaArrowRight onClick={()=>setVisible(false)} className='text-2xl rotate-180' />
  <p>Back</p>

                </div>

               <NavLink onClick={()=>setVisible(false)} to='' className='py-2 pl-6 border' >Home</NavLink>
               <NavLink onClick={()=>setVisible(false)} to='about' className='py-2 pl-6 border'>About</NavLink>
               <NavLink onClick={()=>setVisible(false)} to='services' className='py-2 pl-6 border'>Services</NavLink>
               <NavLink onClick={()=>setVisible(false)} to='contacts' className='py-2 pl-6 border'>Contacts</NavLink>

            </div>

        </div>


    </div>
  )
}

export default Navbar