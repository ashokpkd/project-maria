import React from "react";
import { PiReadCvLogo } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";

const CvSidebar = () => {
  return (
    <div
      className="max-sm:hidden fixed top-0 left-0 bottom-0 w-[5%] text-gray-300 border-r border-gray-300 border-opacity-25 flex flex-col justify-center items-center gap-7 px-3"
      style={{ backgroundColor: "#1c1b1c" }}
    >
      <div>
        <PiReadCvLogo className=" cursor-pointer" size={24} />
      </div>
      <div>
        <HiOutlineUser className=" cursor-pointer" size={24} />
      </div>
      <div>
        <RiSearchLine className=" cursor-pointer" size={24} />
      </div>
      <div>
        <PiPaperPlaneTilt className=" cursor-pointer" size={24} />
      </div>
      <div>
        <FaWifi className=" cursor-pointer rotate-45" size={24} />
      </div>
      <div className=" border px-2 py-2 rounded-lg border-opacity-10 border-gray-300    ">
        <IoDocumentOutline size={24} />
      </div>
    </div>
  );
};

export default CvSidebar;
