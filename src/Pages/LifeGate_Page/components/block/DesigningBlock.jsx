import React from "react";
import lg10 from "../../../../assets/lifegate/lg10.png";
const DesigningBlock = () => {
  return (
    <div className="flex gap-10 flex-col px-10 md:px-40 pb-10">
      <div className="flex flex-col gap-3">
        <p className=" font-medium text-xl md:px-10 lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
          Designing the business: how to create value and monetise LifeGate
          Creators?
        </p>
        <p className="font-sans text-sm text-center">
          The core of the business strategy is centered around the creator
          economy, primarily driven by Gen Z, and the increasing prevalence of
          subscription-based models on digital platforms such as LinkedIn and
          Benhance. These models offer exclusive access and exposure to career
          opportunities and networking.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={lg10} alt="" />
      </div>
    </div>
  );
};

export default DesigningBlock;
