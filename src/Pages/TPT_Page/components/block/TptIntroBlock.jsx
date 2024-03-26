import React from "react";
import BoiButtons from "../../../Boi_Page/components/ui/BoiButtons";
import tpt from "../../../../assets/rtg.png";
import btn1 from "../../../../assets/tpt/btn1.png";
import btn2 from "../../../../assets/tpt/btn2.png";
import btn3 from "../../../../assets/tpt/btn3.png";
import btn4 from "../../../../assets/tpt/btn4.png";
import tpttextmob from "../../../../assets/tpt/tpttextmob.png";

const TptIntroBlock = () => {
  return (
    <div className=" px-10 md:px-40 pt-20 md:pt-0 md:py-20 flex flex-col md:flex-row w-full md:gap-20  flex-1">
      <div className=" flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-lg lg:text-2xl xl:text-3xl">
            The Purple Turtles | Beruru
          </p>
          <p className=" text-3xl font-bold xl:text-7xl ">
            Artisanal exploration to design an outdoor furniture and lighting
            collection.
          </p>
        </div>
        <div className="text-sm  text-[#2A2D43] font-sans flex flex-col gap-2">
          <p>
            Born in 2009, The Purple Turtles Lighting Ideas Pvt. Ltd emerged
            from humble roots as a boutique lighting studio in Bangalore. Today,
            it stands tall as the city's go-to destination for unique and
            eclectic home décor.
          </p>
          <p>
            I was recruited to the Product design team at one of their vertical
            brands, Beruru. Beruru is a a garden lifestyle brand that encourages
            urban residents in creating garden reserves amidst the busy city.
          </p>
        </div>
        <div className=" flex flex-col font-sans text-xs md:text-sm text-[#2A2D43]">
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Timeframe</p>
            <p>4 months</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Sector</p>
            <p>Luxury, Home Décor, Product design</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Tools</p>
            <p>Rhino 3D, Keyshot, Sketchbook Pro</p>
          </div>
        </div>
        <div className=" flex flex-col md:text-xs gap-3 text-[#2A2D43]">
          <div className="flex flex-col gap-3 ">
            <div className="flex gap-1 max-sm:hidden ">
              <img src={btn1} alt="" className="w-[25%]" />
              <img src={btn2} alt="" className="w-[30%]" />
              <img src={btn3} alt="" className="w-[20%]" />
              <img src={btn4} alt="" className="w-[25%]" />
              {/* <BoiButtons name={"Product design"} />
              <BoiButtons name={"Craft developement"} />
              <BoiButtons name={"Fabrication"} />
              <BoiButtons name={"Artisan sourcing"} /> */}
            </div>
            <img src={tpttextmob} alt="" className=" sm:hidden" />
          </div>
        </div>
      </div>
      <div className=" flex-1 flex justify-center px-10 pt-20 items-center">
        <img src={tpt} alt="" className=" min-w-[280px] h-full" />
      </div>
    </div>
  );
};

export default TptIntroBlock;
