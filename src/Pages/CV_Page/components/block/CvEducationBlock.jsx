import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CvEducationBlock = () => {
  return (
    <div className=" flex flex-col px-5 gap-3 md:gap-5 py-5 md:px-56">
      <p className=" font-medium text-slate-200">Education</p>

      <div className="px-5 md:px-0 text-sm gap-2 flex flex-col md:flex-row">
        <div className="flex justify-sart md:w-[50vh] px-0">
          <p>2021 — 2021</p>
        </div>
        <div className=" flex flex-col md:-ml-12 gap-2">
          <div className=" flex flex-col   gap-1">
            <p className=" flex text-slate-200 font-medium hover:underline">
              Masters in Business Design at Domus Academy<MdArrowOutward className="max-md:hidden"/>
            </p>
            <p>Milan, Italy</p>
          </div>
          <div className="flex flex-col gap-3 pr-5">
            <p>
              Business Design enables to apply creative mindset and Design
              strategies to combine innovation, marketing, branding and
              planning.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-0 text-sm gap-2 flex flex-col md:flex-row">
        <div className="flex justify-sart md:w-[50vh] px-0">
          <p>2016 — 2020</p>
        </div>
        <div className=" flex flex-col md:-ml-12 gap-2">
          <div className=" flex flex-col   gap-1">
            <p className=" flex text-slate-200 font-medium hover:underline">
              Bachelors of Design at Unitedworld Institute of Design<MdArrowOutward className="max-md:hidden"/>
            </p>
            <p>Gujarat, India</p>
          </div>
          <div className="flex flex-col gap-3 pr-5">
            <p>
            The discipline trains students to create lifestyle accessories and systems using different materials, processes and techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvEducationBlock;
