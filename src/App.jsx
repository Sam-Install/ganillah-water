import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contacts from './pages/Contacts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>


      <Navbar/>

      <Routes>

   <Route path='/' element={<Home/>} />
   <Route path='about' element={<About/>} />
   <Route path='services' element={<Service/>} />
   <Route path='contacts' element={<Contacts/>} />

      </Routes>

      <Footer/>

    </div>
  )
}

export default App