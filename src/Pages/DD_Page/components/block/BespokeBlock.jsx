import React from "react";
import dd7 from "../../../../assets/dd/dd7.png";
import dd8 from "../../../../assets/dd/dd8.png";

const BespokeBlock = () => {
  return (
    <div className=" flex flex-col px-10 md:py-10 md:px-40 gap-10 md:gap-20">
      <div className="flex flex-col flex-1 md:flex-row gap-10 md:gap-20 ">
        <div className="flex flex-col  gap-3 flex-1">
          <p>Bespoke icons</p>
          <p className="font-sans text-sm">
            I designed three bespoke icons for the company to represent their
            three company USP’s in the simplest form. They should be used to
            help convey what they stand for and how they help their potential
            clients.
          </p>
          <p className="font-sans text-sm">
            The bespoke icons were specifically designed to be a mix of
            abstract, yet symbolic representations of the three pillars which
            are:
          </p>
          <div className=" flex flex-1 flex-col gap-10 py-10 md:px-10 font-sans">
            <div>
              <p className=" font-medium">#01.Beyond the Cookie Cutter</p>
              <p className=" text-sm text-[#7F818E]">
                “ We embrace uniqueness by devising extraordinary solutions that
                defy the ordinary.”
              </p>
            </div>
            <div>
              <p className=" font-medium">#02.Harness Data through Design</p>
              <p className=" text-sm text-[#7F818E]">
                “We don't just guess what works – we use an iterative and
                analytical approach to see what works and why.”
              </p>
            </div>
            <div>
              <p className=" font-medium">
                #03.Unlocking Value with Simplicity
              </p>
              <p className=" text-sm text-[#7F818E]">
                “We believe simplicity breeds the most impactful brands. Thats
                where the value is.”
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-1">
          <img src={dd7} alt="" />
        </div>
      </div>

      <div>
        <img src={dd8} alt="" />
      </div>
    </div>
  );
};

export default BespokeBlock;
