import React from "react";
import { useNavigate } from "react-router-dom";
import { GrSend } from "react-icons/gr";

const Hamburger = () => {
  const navigate = useNavigate();
  return (
    <div className="md:hidden absolute">
      <ul className="flex flex-col justify-start items-start w-[80vw] border-t-2 border-blue-500 font-medium px-5 ml-12 gap-4 py-2 text-gray-500 text-md  bg-white">
        <li className=" cursor-pointer border-b-2 py-2 w-full">
          <p onClick={() => navigate()}>Services</p>
        </li>
        <li className=" cursor-pointer border-b-2 py-2 w-full">
          <p onClick={() => navigate()}>About</p>
        </li>
        <li className=" cursor-pointer border-b-2 py-2 w-full">
          <p onClick={() => navigate()}>Gallery</p>
        </li>
        <li className=" cursor-pointer border-b-2 py-2 w-full">
          <p onClick={() => navigate()}>CV</p>
        </li>
        <li className=" cursor-pointer  border-b-2 py-1 w-full text-blue-500">
          <p onClick={() => navigate()}>
            <GrSend size={20} />
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
