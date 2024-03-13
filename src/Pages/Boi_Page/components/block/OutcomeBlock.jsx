import React from "react";
import boi3 from "../../../../assets/boi/boi3.png";
const OutcomeBlock = () => {
  return (
    <div className="flex flex-col md:flex-row px-10 md:py-20 md:px-40 flex-1">
      <div className="flex flex-1 justify-center items-center">
        <img src={boi3} alt="" />
      </div>
      <div className=" flex flex-1 flex-col gap-10 py-10 md:px-10 font-sans">
        <p className=" font-medium font-serif text-xl  lg:text-2xl xl:text-3xl text-[#2A2D43]">
          Outcomes:
        </p>
        <div>
          <p className=" font-medium">
            01.Integrating BOI’s own Design Language (DSL) with Miro
          </p>
          <p className=" text-sm text-[#7F818E]">
            After discussions with consultants and the design team, we created
            an easy-to-integrate library for BOI's designers to use as their
            design inventory.
          </p>
        </div>
        <div>
          <p className=" font-medium">
            02.Static paper sheets v/s digital environments to experience
          </p>
          <p className=" text-sm text-[#7F818E]">
            The old ecosystem was didn’t overcome the restrictions of virtual
            collaboration.. New tools have been conceived with flexibility to
            create the best flow in navigation during client sessions.
          </p>
        </div>
        <div>
          <p className=" font-medium">03.Keeping it intuitive</p>
          <p className=" text-sm text-[#7F818E]">
            We designed a clean and logical layout for tools, considering the
            flow of information and activities within the template, keeping it
            organized and intuitive for users. We made sure to keep it highly
            functional for their specific use case.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutcomeBlock;
