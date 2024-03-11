import React from "react";
import { useNavigate } from "react-router-dom";
import { GrSend } from "react-icons/gr";

const Hamburger = () => {
  const navigate = useNavigate();
  return (
    <div className="md:hidden absolute ">
      <ul className="flex flex-col justify-start font-sans items-start w-[80vw]  border-t-2 border-blue-500 font-medium px-10 mx-10 gap-4 py-7 text-gray-500 text-md fixed bg-white">
        <li className=" cursor-pointer border-b hover:text-[#5B61F3] py-2 w-full">
          <p onClick={() => navigate("/services")}>Services</p>
        </li>
        <li className=" cursor-pointer border-b hover:text-[#5B61F3] py-2 w-full">
          <p onClick={() => navigate()}>About</p>
        </li>
        <li className=" cursor-pointer border-b hover:text-[#5B61F3] py-2 w-full">
          <p onClick={() => navigate("/gallery")}>Gallery</p>
        </li>
        <li className=" cursor-pointer border-b hover:text-[#5B61F3] py-2 w-full">
          <p onClick={() => navigate("/cv")}>CV</p>
        </li>
        <li className=" cursor-pointer  border-b hover:text-[#5B61F3] py-1 w-full text-[#5B61F3]">
          <p onClick={() => navigate()}>
            <GrSend size={20} />
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
