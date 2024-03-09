import React from 'react'
import CvSidebar from './components/block/CvSidebar'
import CvMain from './components/block/CvMain'

const Cv = () => {
  return (
      <div className='flex '>
          <CvSidebar />
          <CvMain/>
    </div>
  )
}

export default Cv