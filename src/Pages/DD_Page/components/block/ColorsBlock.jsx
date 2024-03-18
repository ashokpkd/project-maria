import React from "react";
import dd5 from "../../../../assets/dd/dd5.png";
const ColorsBlock = () => {
  return (
    <div className=" flex flex-col flex-1 md:flex-row gap-10 md:gap-20 px-10 md:py-10 md:px-40">
      <div className="flex flex-col justify-center gap-3">
        <p>Colors</p>
        <p className="font-sans text-sm">
          To elevate the feeling of straightforwardness with a twist of
          radicalism, the hero colour Off- black and is paired with the all time
          obvious Pure White. To offer a harmonious accent that feels vibrant
          and bright the hero colours can be paired with the secondary Red, Teal
          and Yellow.
        </p>
        <p className="font-sans text-sm">
          This colour system also ensures that Design Digest has flexibility in
          its tint range to support its product needs in various industries.
        </p>
      </div>
      <div>
        <img src={dd5} alt="" />
      </div>
    </div>
  );
};

export default ColorsBlock;
