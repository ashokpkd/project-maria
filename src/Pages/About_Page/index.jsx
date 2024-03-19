import React from 'react'
import Navbar from '../../components/block/Navbar'
import Footer from '../../components/block/Footer'
import AboutPageBlock from './components/block/AboutPageBlock'

const AboutPage = () => {
  return (
      <div>
          <Navbar />
          <AboutPageBlock/>
          <Footer/>
    </div>
  )
}

export default AboutPage