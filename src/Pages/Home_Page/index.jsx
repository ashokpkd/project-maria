import React from 'react'
import Navbar from '../../components/block/Navbar'
import Footer from '../../components/block/Footer'
import HomePageBlock from './components/block/HomePageBlock'

const HomePage = () => {
  return (
      <>
          <Navbar />
          <HomePageBlock/>
          <Footer/>
    </>
  )
}

export default HomePage