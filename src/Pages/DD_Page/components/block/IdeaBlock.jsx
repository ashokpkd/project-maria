import React from "react";
import dd2 from "../../../../assets/dd/dd2.png";

const IdeaBlock = () => {
  return (
    <div className="flex gap-10  md:mt-20 flex-col ">
      <div className="flex flex-col px-10 md:px-40 gap-3">
        <p className=" font-medium text-xl md:px-10 lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
          Idea: Brand brilliance brought to life
        </p>
        <p className="font-sans text-sm text-center md:px-40">
          In the spirit of collaboration with the founders of Design Digest, we
          embarked on a journey to rewrite the rulebook of brand creation. The
          result? A new visual identity that practises beyond the Cookie Cutter
          Approach, harnesses data through design and unlocks complex value with
          simplicity.
        </p>
      </div>
      <div className=" md:px-40">
        <img src={dd2} alt="" />
      </div>
    </div>
  );
};

export default IdeaBlock;
