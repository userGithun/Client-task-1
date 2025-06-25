import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import Services from './component/Services'
import About from './component/About'
import FAQ from './component/FAQ'
import Privacypolicy from './component/Privacypolicy'
import Client from './component/Client'
import Candidate from './component/Candidate'
import CVForm from './component/CVform'

const App = () => {
  return (
    <>


      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/privacy' element={<Privacypolicy />} />

        <Route path='/client' element={<Client />} />
        <Route path='/candidate' element={<Candidate/>} />
        <Route path='/cvform' element={<CVForm/>} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
