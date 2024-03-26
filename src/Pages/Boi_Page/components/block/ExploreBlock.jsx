import React from "react";
import BoiButtons from "../ui/BoiButtons";
import boi4 from "../../../../assets/boi/boi4.png";

const ExploreBlock = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 gap-5 px-10 md:px-40   w-full bg-[#4E5DAB1A]">
      <div className="flex flex-col  md:py-10 gap-5 md:justify-center md:items-start md:gap-7 flex-1">
        <p className=" font-extrabold text-xl pt-10">
          The project led the team to create over 150+ tools in multiple formats
          including Miro, Mural and printables.
        </p>
        <div className="flex justify-center md:justify-start md:items-start">
          <BoiButtons name={"Explore toolkit"} customClassName={"px-3"} />
        </div>
      </div>
      <div className="flex flex-1">
        <img src={boi4} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default ExploreBlock;
