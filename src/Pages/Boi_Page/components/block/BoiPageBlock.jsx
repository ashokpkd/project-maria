import React from "react";
import background from "../../../../assets/BG.png";
import BoiIntroBlock from "./BoiIntroBlock";
import RoleAndTaskBlock from "./RoleAndTaskBlock";
import InnovativeBlock from "./InnovativeBlock";
import OutcomeBlock from "./OutcomeBlock";
import ExploreBlock from "./ExploreBlock";
import RebrandingBlock from "./RebrandingBlock";
import GraphicDesignBlock from "./GraphicDesignBlock";

const BoiPageBlock = () => {
  return (
    <div
      className=" font-serif flex flex-col gap-10 text-[#2A2D43]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <BoiIntroBlock />
      <RoleAndTaskBlock />
      <InnovativeBlock />
      <OutcomeBlock />
      <ExploreBlock />
      <RebrandingBlock />
      <GraphicDesignBlock/>
    </div>
  );
};

export default BoiPageBlock;
