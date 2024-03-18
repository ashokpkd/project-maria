import React from "react";
import BoiButtons from "../../../Boi_Page/components/ui/BoiButtons";
import dd from "../../../../assets/dd/dd.png";

const DDintroBlock = () => {
  return (
    <div className=" px-10 md:px-40 py-20 flex flex-col md:flex-row w-full  flex-1">
      <div className=" flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-lg lg:text-2xl xl:text-3xl">
            Design Digest, Italy
          </p>
          <p className=" text-3xl font-bold xl:text-7xl ">
            Kickstarting Design Digest with their brand identity.
          </p>
        </div>
        <div className="text-sm  text-[#7F818E] font-sans flex flex-col gap-2">
          <p>
            Design Digest is a start- up consultancy based in Italy. They do
            more than just create brands – they bring them to life. As an
            independently owned establishment, they are deeply committed to
            infusing brands with vitality and resonance.
          </p>
          <p>
            The founding team approached me to design their brand identity and
            make a guide for their new brand that is unmistakably Design Digest
            to help them kickstart their new company.
          </p>
        </div>
        <div className=" flex flex-col font-sans text-xs md:text-sm text-[#7F818E]">
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Timeframe</p>
            <p>2 months</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Sector</p>
            <p>Brand strategy, Consulting, Creative agency</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Tools</p>
            <p>Miro, Figma, Adobe Suite</p>
          </div>
        </div>
        <div className=" flex flex-col md:text-xs gap-3 text-[#7F818E]">
          <div className="flex flex-col  md:flex-row gap-3">
            <div className="flex flex-col  sm:flex-row gap-3">
              <BoiButtons name={"Brand design"} />
              <BoiButtons name={"Copywriting"} />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <BoiButtons name={"Graphic design"} />
              <BoiButtons name={"Brand strategy"} />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 flex justify-center px-10 pt-20 items-center">
        <img src={dd} alt="" className=" min-w-[280px]" />
      </div>
    </div>
  );
};

export default DDintroBlock;
