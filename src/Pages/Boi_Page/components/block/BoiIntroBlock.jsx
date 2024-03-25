import React from "react";
import Boi from "../../../../assets/BOI.png";
import BoiButtons from "../ui/BoiButtons";
import textboi from "../../../../assets/boi/textboi.png";
import textboimob from "../../../../assets/boi/textboimob.png";

const BoiIntroBlock = () => {
  return (
    <div className=" px-10 md:px-40 py-20 flex flex-col md:flex-row w-full  flex-1">
      <div className=" flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-lg lg:text-2xl xl:text-3xl">
            Board of Innovation (BOI), Belgium
          </p>
          <p className=" text-3xl font-bold xl:text-7xl ">
            Launching a new brand to embody BOI’s next big step.
          </p>
        </div>
        <div className="text-sm  text-[#7F818E] font-sans flex flex-col gap-2">
          <p>
            Board of Innovation is a global innovation firm, imagining
            tomorrow’s products, services & businesses and creating them today.
            On its 13th year running, the company took their next big step to
            embody these shifts and rebrand themselves by collaborating with
            Design Studio, London.
          </p>
          <p>
            The company formed an in- house rebranding team to associate with
            Design studio. I joined as the Junior designer to execute a
            comprehensive transformation of the brand across touch points
            specific to their Website , Miro tools, Google suite, print media
            and social media.
          </p>
        </div>
        <div className=" flex flex-col font-sans text-xs md:text-sm text-[#7F818E]">
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Timeframe</p>
            <p>10 months</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Sector</p>
            <p>Business design, Consulting, Innovation strategy</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-5 gap-8">
            <p>Tools</p>
            <p>Wordpress, Miro, Mural, Figma, Adobe Suite </p>
          </div>
        </div>
        <div className=" flex flex-col md:text-xs gap-3 text-[#7F818E]">
          <img src={textboi} alt="" className=" max-sm:hidden" />
          <img src={textboimob} alt="" className=" sm:hidden" />
          {/* <div className="flex flex-col  md:flex-row gap-3">
            <div className="flex flex-col  sm:flex-row gap-3">
              <BoiButtons name={"Brand design"} />{" "}
              <BoiButtons name={"Business design"} />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <BoiButtons name={"Graphic design"} />{" "}
              <BoiButtons name={"Miro tool design"} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <BoiButtons name={"Design Language System"} />{" "}
            <BoiButtons name={"User journey mapping"} />
          </div> */}
        </div>
      </div>
      <div className=" flex-1 flex justify-center pt-10 items-start">
        <img src={Boi} alt="" className=" min-w-[280px]" />
      </div>
    </div>
  );
};

export default BoiIntroBlock;
