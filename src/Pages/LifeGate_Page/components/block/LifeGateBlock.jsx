import React from "react";
import background from "../../../../assets/BG.png";
import LifeGateIntroBlock from "./LifeGateIntroBlock";
import Challengeblock from "./Challengeblock";
import DrivingBlock from "./DrivingBlock";
import StrategyBlock from "./StrategyBlock";
import InsightsBlock from "./InsightsBlock";
import OutcomeBlock from "./OutcomeBlock";
import CraftedBlock from "./CraftedBlock";
import DesigningBlock from "./DesigningBlock";
import ActivitiesBlock from "./ActivitiesBlock";
import BrandingBlock from "./BrandingBlock";

const LifeGateBlock = () => {
  return (
    <div
      className=" font-serif flex flex-col gap-10 text-[#2A2D43]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <LifeGateIntroBlock />
      <Challengeblock />
      <DrivingBlock />
      <StrategyBlock />
      <InsightsBlock />
      <OutcomeBlock />
      <CraftedBlock />
      <DesigningBlock />
      <ActivitiesBlock />
      <BrandingBlock />
    </div>
  );
};

export default LifeGateBlock;
