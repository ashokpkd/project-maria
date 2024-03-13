import React from "react";
import BoiButtons from "../ui/BoiButtons";
import boi4 from "../../../../assets/boi/boi4.png";

const ExploreBlock = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 gap-5 px-10 md:px-40 py-20  w-full bg-[#4E5DAB1A]">
      <div className="flex flex-col md:py-10 gap-3 md:gap-7 flex-1">
        <p className=" font-extrabold text-3xl">
          The project led the team to create over 150+ tools in multiple formats
          including Miro, Mural and printables.
        </p>
        <div className=" px-10 md:px-20 lg:px-40 xl:px-60">
          <BoiButtons name={"Explore toolkit"} />
        </div>
      </div>
      <div className="flex flex-1">
        <img src={boi4} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default ExploreBlock;
