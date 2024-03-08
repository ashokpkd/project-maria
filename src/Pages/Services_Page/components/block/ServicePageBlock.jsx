import React from 'react'
import background from '../../../../assets/BG.png'
import ServiceIntroBlock from './ServiceIntroBlock'
import WorkApproachBlock from './WorkApproachBlock'
import ProductsBlock from './ProductsBlock'

const ServicePageBlock = () => {
  return (
      <div className="text-gray-700 font-serif px-10 md:px-40 py-10 flex flex-col gap-10"
          style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
          }}
      >
          <ServiceIntroBlock />
          <WorkApproachBlock />
          <ProductsBlock/>
      </div>
  )
}

export default ServicePageBlock