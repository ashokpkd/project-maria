import React from 'react'
import Navbar from '../../components/block/Navbar'
import Footer from '../../components/block/Footer'
import TptPageBlock from './components/block/TptPageBlock'

const TptPage = () => {
  return (
      <div>
          <Navbar />
          <TptPageBlock/>
          <Footer/>
    </div>
  )
}

export default TptPage