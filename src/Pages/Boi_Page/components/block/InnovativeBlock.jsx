import React from "react";
import svg1 from "../../../../assets/svg1.png";
import svg2 from "../../../../assets/svg2.png";
import svg3 from "../../../../assets/svg3.png";
import boi2 from "../../../../assets/boi/boi2.png";
import { MdKeyboardArrowUp } from "react-icons/md";

const InnovativeBlock = () => {
  return (
    <div className="flex flex-col px-10 md:px-40">
      <div className=" flex flex-col gap-3">
        <p className=" font-medium text-xl lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
          Innovative Toolbox: BOI pioneered the world's largest open-source
          digital innovation toolbox, helping companies turn visions into
          actionable projects.
        </p>
        <p className="text-sm text-[#7F818E] px-5 font-sans flex flex-col gap-2 text-center">
          The people at BOI harness the power of virtual collaboration to help
          their clients build, iterate and innovate faster.We aimed to revamp
          Miro client collaborations by merging our business and brand design
          expertise. Being a UI heavy ecosystem, we agreed that BOI’s Miro
          toolkit needs:
        </p>
      </div>
      <div className=" font-sans py-10 flex flex-col gap-5 md:flex-row md:gap-10">
        <div className="flex flex-col gap-3 ">
          <img src={svg1} className=" w-14" alt="" />
          <p className=" font-normal">Streamlined experience</p>
          <p className=" text-[#7F818E] text-sm">
            We had to analyze the user flow within Miro and understand the logic
            of tools used for tools for innovation strategy, project management,
            sustainability and design.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <img src={svg2} className=" w-14" alt="" />
          <p className=" font-normal">Scalability in Miro operations</p>
          <p className=" text-[#7F818E] text-sm">
            Absence of standardized tools was a major obstacle for scaling
            operations. We had to pre-built design tokens and UI components for
            future tool construction.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <img src={svg3} className=" w-14" alt="" />
          <p className=" font-normal">Optimized brand guidelines </p>
          <p className=" text-[#7F818E] text-sm">
            Design Studio's deliverables excluded guidelines that worked around
            the functional constraints in Miro.Our team had to create new
            Miro-compatible guidelines.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 py-10 px-10  text-[#7F818E]">
        <img src={boi2} alt="" />
        <p className="flex text-[5px] md:text-sm items-center gap-1">
          <MdKeyboardArrowUp size={20} />
          Structuring a Design Language System (DLS) in Miro
        </p>
      </div>
    </div>
  );
};

export default InnovativeBlock;
