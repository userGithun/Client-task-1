import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import Services from './component/Services'
import About from './component/About'

const App = () => {
  return (
    <>


      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
