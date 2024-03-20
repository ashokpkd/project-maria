import React from "react";
import abt4 from "../../../../assets/about/abt4.png";

const SkillsBlock = () => {
  return (
    <div className=" flex flex-col md:flex-row flex-1 gap-10 md:gap-20">
      <div className="flex flex-1 flex-col gap-5">
        <p className="text-lg">Skills</p>
        <div className="flex flex-col font-sans text-sm gap-3">
          <div className=" flex flex-col md:flex-row gap-3">
            {" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Design System Language
            </button>{" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Design thinking
            </button>{" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              A/B testing
            </button>
          </div>
          <div className=" flex flex-col md:flex-row gap-3">
            {" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Pitching
            </button>{" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Concept sketching
            </button>{" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Rapid prototyping
            </button>
          </div>
          <div className=" flex  flex-col md:flex-row gap-3">
            {" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Social media design
            </button>{" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Concept validation
            </button>{" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Concept development
            </button>
          </div>
          <div className=" flex  flex-col md:flex-row gap-3">
            {" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Material handling
            </button>{" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Illustration
            </button>{" "}
            <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
              Copywriting
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-1 flex-col gap-5">
        <p className="text-lg">Toolstack</p>
        <img src={abt4} alt="" />
      </div>
    </div>
  );
};

export default SkillsBlock;
