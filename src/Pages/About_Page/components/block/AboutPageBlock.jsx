import React from 'react'
import background from '../../../../assets/BG.png'
import AboutIntroBlock from './AboutIntroBlock'
const AboutPageBlock = () => {
  return (
      <div
      className=" font-serif px-10 md:px-40 py-20  flex flex-col gap-10 text-[#2A2D43]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
          }}
      >
          <AboutIntroBlock/>
    </div>
  )
}

export default AboutPageBlock