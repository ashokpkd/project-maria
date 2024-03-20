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
    <div className=" pt-5 md:pt-20">
      <CollaboratedCompanies />
      <div
        className="flex justify-center items-center underline cursor-pointer pt-10 md:pt-20"
        onClick={backToTop}
      >
        <p>Back to the top</p>
        <IoMdArrowUp size={20} />
      </div>
    </div>
  );
};

export default LastBlock;
