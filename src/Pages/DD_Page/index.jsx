import React from 'react'
import Navbar from '../../components/block/Navbar'
import Footer from '../../components/block/Footer'
import DDPageBlock from './components/block/DDPageBlock'

const DDPage = () => {
  return (
      <div>
          <Navbar />
          <DDPageBlock/>
          <Footer/>
    </div>
  )
}

export default DDPage