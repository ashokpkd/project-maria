import React from "react";
import maria from "../../../../assets/cv/maria.jpg";
import project from "../../../../assets/cv/screenshot.png";
const CvIntroBlock = () => {
  return (
    <div className=" flex px-5  md:gap-5 gap-4 py-5 justify-center md:justify-start md:px-56 md:py-20 items-center ">
      <div className="flex justify-center items-center ">
        <img
          src={maria}
          className=" w-min-full object-fill rounded-full"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <p className=" text-lg text-slate-200 font-medium">Maria Mathew</p>
        <p className=" text-sm">Business design in Milan, Italy, She/ her</p>
        <p className=" text-xs w-fit border px-2 py-1 cursor-pointer bg-gray-800 rounded-full">
          mariamathew.framer.website
        </p>
      </div>
    </div>
  );
};

export default CvIntroBlock;
