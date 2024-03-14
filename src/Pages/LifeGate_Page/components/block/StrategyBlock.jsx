import React from "react";
import svg1 from "../../../../assets/lifegate/svg1.png";
import svg2 from "../../../../assets/lifegate/svg2.png";
import svg3 from "../../../../assets/lifegate/svg3.png";

const StrategyBlock = () => {
  return (
    <div className="flex flex-col px-10 md:px-40">
      <div className=" flex flex-col gap-3">
        <p className=" font-medium text-xl md:px-10 lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
          Strategy: Empathy-Infused strategy to reshape LG and pave a
          competitive edge
        </p>
      </div>
      <div className=" font-sans py-10 flex flex-col gap-5 md:flex-row md:gap-10">
        <div className="flex flex-col gap-3 ">
          <img src={svg1} className=" w-14" alt="" />
          <p className=" font-normal">Strategic project timeline</p>
          <p className=" text-[#7F818E] text-sm">
            Through a 4-week design research process, we engaged with potential
            consumers, identifying painpoints and scoping the projects within
            our team.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <img src={svg2} className=" w-14" alt="" />
          <p className=" font-normal">Company and competitor analysis</p>
          <p className=" text-[#7F818E] text-sm">
            The company offered a vast range of services. We turned our focus on
            mapping their operations, parallel competitors, strengths and
            weaknesses.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <img src={svg3} className=" w-14" alt="" />
          <p className=" font-normal">Gen Z’s digital behavioral patterns </p>
          <p className=" text-[#7F818E] text-sm">
            Gen Z aims to integrate sustainability into daily life. Our research
            explored UGC triggers, their digital media interactions, and
            response to lack of purchasing power.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategyBlock;
