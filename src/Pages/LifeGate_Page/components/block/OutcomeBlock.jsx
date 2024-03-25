import React from "react";
import lg8 from "../../../../assets/lifegate/lg8.png";

const OutcomeBlock = () => {
  return (
    <div className="flex gap-5 flex-col px-10 md:px-40">
      <p className=" font-medium text-xl md:px-10 lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
        Outcome: Launching a digital platform geared towards LG's vision for a
        Sustainable Digital Community “LifeGate Creators”.
      </p>
      <div className=" flex flex-col flex-1 md:flex-row gap-5 md:gap-20">
        <div className="flex flex-1 py-20">
          <img src={lg8} alt="" />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center md:px-10 md:py-10 gap-5 md:gap-20">
          <div className=" flex flex-col gap-2">
            <p className="text-[1.25rem]">What is LifeGate Creators?</p>
            <p className="font-sans text-sm">
              The LifeGate proposal envisions a dynamic digital platform for
              their upcoming community, "LifeGate Creators." Tailored to the Gen
              Z generation, this platform focuses on user-generated content and
              employment opportunities, fostering a community of creative
              individuals deeply committed to sustainability.
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className="text-[1.25rem]">What value does it bring?</p>
            <p className="font-sans text-sm ">
              On this platform, members will find a powerful space to express
              and explore their sustainability ideas using diverse creative
              mediums. It will serve as a collaborative hub, connecting them
              with companies to jointly develop sustainable solutions.
              Additionally, it offers unique networking opportunities, enabling
              interactions with influential public figures and social media
              influencers who share a strong commitment to sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomeBlock;
