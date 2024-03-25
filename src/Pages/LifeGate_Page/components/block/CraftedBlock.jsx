import React from "react";
import lg9 from "../../../../assets/lifegate/lg9.png";

const CraftedBlock = () => {
  return (
    <div className="flex gap-10 md:gap-20 flex-col px-10 md:py-10 md:px-40 pb-10">
      <div className="flex flex-col gap-3">
        <p className=" font-medium text-xl md:px-10 lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
          Crafted lasting, behavioral personas that will be the faces of
          LifeGate Creators
        </p>
        <p className="font-sans text-sm text-center md:px-16">
          We equipped the LifeGate with essential insights into their new
          consumers by crafting behavioral personas and consumer journeys,
          providing valuable resources for future endeavors.
        </p>
      </div>
      <div className=" md:px-20">
        <img src={lg9} alt="" />
      </div>
    </div>
  );
};

export default CraftedBlock;
