import React from "react";
import BoiButtons from "../ui/BoiButtons";
import boi5 from "../../../../assets/boi/boi5.png";

const RebrandingBlock = () => {
  return (
    <div className="flex flex-col px-10 md:px-40 py-10 md:py-20 gap-10 md:gap-20">
      <div className="flex flex-col gap-5 md:gap-8">
        <p className=" font-medium text-xl lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
          Website rebranding and campaign publications
        </p>
        <p className="text-sm  md:px-40 font-sans flex flex-col gap-2 text-center">
          I worked closely with the website development team to ensure a smooth
          integration of design assets into our company's website. I took charge
          of creating new assets and rebranding existing ones for website use.
          Additionally, I designed publications that were launched on our
          website and also crafted downloadable reports.
        </p>
        <div className=" flex justify-center items-center ">
          <BoiButtons name={"Visit Website"} customClassName={"w-[10rem]"} />
        </div>
      </div>
      <div>
        <img src={boi5} alt="" />
      </div>
    </div>
  );
};

export default RebrandingBlock;
