import React from "react";
import BoiButtons from "../../../Boi_Page/components/ui/BoiButtons";
import lifegate from "../../../../assets/lifegate.png";
import team from "../../../../assets/lifegate/Team.png";
import lgtext from "../../../../assets/lifegate/lgtext.png";
import lgtextmob from "../../../../assets/lifegate/lgtextmob.png";

const LifeGateIntroBlock = () => {
  return (
    <div className=" px-10 gap-10 md:px-40 py-20  flex flex-col md:flex-row w-full  flex-1">
      <div className=" flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-lg lg:text-2xl xl:text-3xl">
            Case study: LifeGate, Italy
          </p>
          <p className=" text-3xl font-bold xl:text-7xl ">
            Reshaping LifeGate's image among digital natives: focusing on
            resonance.
          </p>
        </div>
        <div className="text-sm  text-[#7F818E] font-sans flex flex-col gap-2">
          <p>
            Founded in 2000, LifeGate (LG) is the first company in Italy to
            enter the large retail market with an organic product. It is a
            Benefit Corporation, considered the reference for sustainability in
            Italy. LifeGate supports businesses to improve their sustainability
            credentials through consulting, strategic communications,
            environmental projects.
          </p>
          <p>
            My team of Business Designers were briefed to propose a strategy for
            LifeGate to reinforce their position as the main player among Gen Z
            to be the hub of sustainable innovation by reinforcing their
            available resources.
          </p>
        </div>
        <div className=" flex flex-col font-sans text-xs md:text-sm text-[#7F818E]">
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Timeframe</p>
            <p>4 weeks</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Sector</p>
            <p>Strategic communications, Consulting, environmental projects</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Team</p>
            <div>
              <img src={team} alt="" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:text-xs gap-3 text-[#7F818E]">
          <img src={lgtext} alt="" className=" max-sm:hidden" />
          <img src={lgtextmob} alt="" className=" sm:hidden" />
          {/* <div className="flex flex-col  md:flex-row gap-3">
            <div className="flex flex-col  sm:flex-row gap-3">
              <BoiButtons name={"Business design"} />
              <BoiButtons name={"Consumer research"} />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <BoiButtons name={"Market research"} />
              <BoiButtons name={"Branding"} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <BoiButtons name={"Product development"} />
            <BoiButtons name={"Rapid prototyping"} />
          </div> */}
        </div>
      </div>
      <div className=" flex-1 flex justify-center px-10 md:mt-24  items-start">
        <img src={lifegate} alt="" className=" min-w-[280px]" />
      </div>
    </div>
  );
};

export default LifeGateIntroBlock;
