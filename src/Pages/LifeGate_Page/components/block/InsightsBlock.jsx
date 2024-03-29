import React from "react";
import lg6 from "../../../../assets/lifegate/lg6.png";
import lg7 from "../../../../assets/lifegate/lg7.png";

const InsightsBlock = () => {
  return (
    <div className="flex flex-col md:gap-20 md:flex-row px-10 md:py-20 md:px-40 flex-1">
      <div className="flex gap-5 flex-1 flex-col justify-center items-center">
        <img src={lg6} alt="" />
        <img src={lg7} alt="" />
        <p className=" text-[8px] md:text-sm text-gray-400">
          Italian and International competitors in the strategic communication
          sector
        </p>
      </div>
      <div className=" flex flex-1 flex-col gap-10 py-10 md:px-5  font-sans">
        <p className=" font-medium font-serif text-xl md:ml-20 lg:text-2xl xl:text-3xl text-[#2A2D43]">
          Insights and uncharted territory for LG
        </p>
        <div className=" flex gap-5 md:gap-16">
          <p className="font-medium">#01</p>
          <div className=" flex flex-col gap-3">
            <p className=" font-medium">
              Rise in the Creator economy = Gen Z’s financial independence{" "}
            </p>
            <p className=" text-sm text-[#7F818E]">
              Monetizing their passion and skills empowers Gen Z to supplement
              their income, reflecting a shift toward valuing creativity and
              skills over traditional financial resources, fostering economic
              independence.
            </p>
          </div>
        </div>
        <div className=" flex gap-5 md:gap-16">
          <p className="font-medium">#02</p>
          <div className=" flex flex-col gap-3">
            <p className=" font-medium">
              Entering the creator economy market through LifeGate Italy's
              strategic  communications sector{" "}
            </p>
            <p className=" text-sm text-[#7F818E]">
              Creators entering through LifeGate can benefit from the
              organization's expertise , resources and vice versa related to
              sustainability and environmental issues, which can enhance the
              quality and impact of their content.
            </p>
          </div>
        </div>
        <div className=" flex gap-5 md:gap-16">
          <p className="font-medium">#03</p>
          <div className=" flex flex-col gap-3">
            <p className=" font-medium">Sustainability focus</p>
            <p className=" text-sm text-[#7F818E]">
              Associating with LifeGate Italy can enhance a creator's brand
              image by aligning with a well-respected and established entity in
              the sustainability space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsBlock;
