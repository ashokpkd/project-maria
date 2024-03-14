import React from "react";
import lg5 from "../../../../assets/lifegate/lg5.png";

const DrivingBlock = () => {
  return (
    <div className="flex flex-col px-10 md:px-40 xl:px-[500px] py-20 gap-5">
      <p className=" font-medium text-xl lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
        Challenge: Driving LifeGate’s market leadership with Gen Z to be the hub
        of sustainable innovation
      </p>
      <div className="flex flex-col md:flex-row font-sans flex-1 gap-10">
        <div className=" flex flex-col flex-1 gap-5 text-sm">
          <p className=" font-medium">
            How might we help LifeGate offer Gen Z an influential networking
            platform on sustainability with a fitting subscription model?
          </p>
          <p>
            LifeGate, a prominent sustainability-focused organization, has been
            at the forefront of environmental initiatives for years. But as the
            competitive landscape becomes more saturated and generations evolve,
            LG needed to adapt to the changing landscape.{" "}
          </p>
          <p>
            We worked together to develop a comprehensive strategy that would
            help LG become more relevant and accessible to the Gen Z
            demographic. This involved optimizing available resources to create
            a substantial impact within this influential generation. Our
            teamwork was crucial in executing this strategy effectively and
            efficiently.
          </p>
        </div>
        <div className=" flex flex-1">
          <img src={lg5} alt="" className=" md:max-w-96" />
        </div>
      </div>
    </div>
  );
};

export default DrivingBlock;
