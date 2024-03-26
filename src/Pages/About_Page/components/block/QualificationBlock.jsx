import React from "react";
import { GoDotFill } from "react-icons/go";
import abt3 from "../../../../assets/about/abt3.png";

const QualificationBlock = () => {
  return (
    <div className=" flex flex-1 flex-col gap-5 md:gap-16 py-10 md:py-20 md:flex-row">
      <div className=" flex flex-1 md:px-10">
        <img src={abt3} alt="" />
      </div>
      <div className=" flex flex-1 flex-col gap-5 md:gap-10 ">
        <p className="text-[1.625rem]">Qualifications</p>
        <div>
          <div className=" border-l border-[#2A2D4333]  relative px-5 pb-5 text-start font-sans flex flex-col gap-3">
            <GoDotFill className="absolute top-1 -translate-y-1/2 -left-2 text-[#5B61F3] " />
            <p className=" font-bold">
              Domus Academy, Italy
              <span className=" text-[#5B61F3] font-normal"> (2021)</span>
            </p>
            <p className="text-[#7F818E]">
              Business Design enables to apply creative mindset and Design
              strategies to combine innovation, marketing, branding and
              planning.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <button className=" border bg-[#5B61F326]  rounded-full px-5 py-2">
                Masters in Business Design
              </button>
              <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
                24 CFA/ ECTS
              </button>
            </div>
          </div>
          <div className="   relative px-5 pb-5 text-start font-sans flex flex-col gap-3">
            <GoDotFill className="absolute top-1 -translate-y-1/2 -left-2 text-[#5B61F3] " />
            <p className=" font-bold">
              Unitedworld Insitute of Design, India
              <span className=" text-[#5B61F3] font-normal">
                {" "}
                (2016 - 2020)
              </span>
            </p>
            <p className="text-[#7F818E]">
              The discipline trains students to create lifestyle accessories and
              systems using different materials, processes and techniques.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <button className=" border bg-[#5B61F326]  rounded-full px-5 py-2">
                Bachelors in Design
              </button>
              <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
                CGPA 8.80
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationBlock;
