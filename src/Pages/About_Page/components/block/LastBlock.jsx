import React from "react";
import CollaboratedCompanies from "../../../Home_Page/components/block/CollaboratedCompanies";
import { IoMdArrowUp } from "react-icons/io";

const LastBlock = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col justify-center items-center pt-5 ">
      <CollaboratedCompanies />
      <div
        className="flex font-sans justify-center items-center border-b border-black w-[8rem] mb-10 cursor-pointer"
        onClick={backToTop}
      >
        <p>Back to the top</p>
        <IoMdArrowUp size={20} />
      </div>
    </div>
  );
};

export default LastBlock;
