import React from "react";
import ideation from "../../../../assets/services/Images.png";
import db from "../../../../assets/services/ServicesC1.png";
import dd from "../../../../assets/services/ServicesC3.png";
import { IoMdArrowUp } from "react-icons/io";

const ProductsBlock = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
    behavior:'smooth'
    });
  };
  return (
    <div className="flex flex-col md:gap-5 ">
      <div className="flex flex-col md:flex-row py-5 ">
        <div className=" md:w-[50%] md:min-w-[40vw]">
          <img src={ideation} alt="" />
        </div>
        <div className="flex flex-col gap-2 flex-1 md:w-[50%] md:min-w-[40vw] md:px-28 py-10">
          <p className=" text-lg font-semibold">Develop products</p>
          <p className=" font-sans text-sm  font-normal">
            Designing to connect with consumers by empathising with their pain-
            points and behavioural patterns.
          </p>
          <p className=" font-sans text-[#5B61F3]">My capabilities</p>
          <p className=" text-lg font-medium text-[#7F818E]">
            Product design
            <br /> UI Design
            <br /> Packaging design
            <br /> Graphic design
            <br /> Luxury design
            <br /> Craft development
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse py-5 ">
        <div className=" md:w-[50%] md:min-w-[40vw]">
          <img src={dd} alt="" />
        </div>
        <div className="flex flex-col gap-2 flex-1 md:w-[50%] md:min-w-[40vw] md:px-28 py-10">
          <p className=" text-lg font-semibold">Build brands</p>
          <p className=" font-sans text-sm  font-normal">
            Making systems through resonant storytelling and design for
            differentiation and optimal positioning.
          </p>
          <p className=" font-sans text-[#5B61F3]">My capabilities</p>
          <p className=" text-lg font-medium text-[#7F818E]">
            Visual identity
            <br />
            Verbal identity
            <br /> Naming
            <br />
            Brand audit
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-5 ">
        <div className=" md:w-[50%] md:min-w-[40vw]">
          <img src={db} alt="" />
        </div>
        <div className="flex flex-col gap-2 flex-1 md:w-[50%] md:min-w-[40vw] md:px-28 py-10">
          <p className=" text-lg font-semibold">Designing businesses</p>
          <p className=" font-sans text-sm  font-normal">
            Help capitalize on shifting market trends and optimise resilient
            strategies through an iterative design thinking approach.
          </p>
          <p className=" font-sans text-[#5B61F3]">My capabilities</p>
          <p className=" text-lg font-medium text-[#7F818E]">
            Product strategy
            <br />
            Consumer research
            <br />
            Growth strategy
            <br />
            Business model design <br />
            Design research
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center underline cursor-pointer" onClick={backToTop}>
        <p>Back to the top</p>
        <IoMdArrowUp size={20} />
      </div>
    </div>
  );
};

export default ProductsBlock;
