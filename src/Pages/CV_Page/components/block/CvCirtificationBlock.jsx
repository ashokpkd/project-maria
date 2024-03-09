import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CvCirtificationBlock = () => {
  return (
    <div className=" flex flex-col px-5 gap-3 md:gap-5 py-5 md:px-56">
      <p className=" font-medium text-slate-200">Certifications</p>
      <div className="px-5 md:px-0 text-sm gap-2 flex flex-col md:flex-row">
        <div className="flex justify-sart md:w-[50vh] px-0">
          <p>2023</p>
        </div>
        <div className=" flex flex-col md:-ml-40 gap-2">
          <div className=" flex flex-col   gap-1">
            <p className=" flex text-slate-200 font-medium hover:underline">
              UX Design from Growthschool<MdArrowOutward className="max-md:hidden"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvCirtificationBlock;
