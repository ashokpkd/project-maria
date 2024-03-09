import React from "react";
import { MdArrowOutward } from "react-icons/md";
import screenshot from "../../../../assets/cv/screenshot.png";

const CvSideProjectsBlock = () => {
  return (
    <div className=" flex flex-col px-5 gap-3 md:gap-5 py-5 md:px-56">
      <p className=" font-medium text-slate-200">Side Projects</p>
      <div className="px-5 md:px-0 md:gap-20 text-sm gap-2 flex flex-col md:flex-row">
        <div>
          <p>2023</p>
        </div>
        <div className=" flex flex-col  gap-3">
          <p className=" flex  text-slate-200 font-medium hover:underline">
            New year, new portfolio
            <MdArrowOutward />
          </p>

          <img src={screenshot} className=" w-40 rounded-lg " alt="" />
        </div>
      </div>
    </div>
  );
};

export default CvSideProjectsBlock;
