import React from "react";
import dd2 from "../../../../assets/dd/dd2.png";

const IdeaBlock = () => {
  return (
    <div className="flex gap-10 flex-col ">
      <div className="flex flex-col px-10 md:px-40 gap-3">
        <p className=" font-medium text-xl md:px-10 lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
          Crafted lasting, behavioral personas that will be the faces of
          LifeGate Creators
        </p>
        <p className="font-sans text-sm text-center">
          We equipped the LifeGate with essential insights into their new
          consumers by crafting behavioral personas and consumer journeys,
          providing valuable resources for future endeavors.
        </p>
      </div>
      <div>
        <img src={dd2} alt="" />
      </div>
    </div>
  );
};

export default IdeaBlock;
