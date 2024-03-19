import React from "react";
import tpt3 from "../../../../assets/tpt/tpt3.png";
const StoryBlock = () => {
  return (
    <div className=" flex flex-col flex-1 md:flex-row gap-10 md:gap-20 px-10 pb-10  md:px-40">
      <div className="flex flex-col justify-center gap-5 flex-1">
        <div className="flex flex-col gap-3">
          <p>Story</p>
          <p className=" font-sans text-sm">
            In a world blending tradition and innovation, this project embraces
            artisans' timeless techniques. Staying true to their craft, we
            explore vibrant colors, intricate patterns, and functional design.
            Our collection redefines cane products, offering a fresh take on
            tradition for modern living.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Concept</p>
          <p className=" font-sans text-sm">
            Our collection brings the garden back into urban living, echoing
            Bangalore's Garden City roots. From small spaces to vast landscapes,
            it's a tribute to green living. Featuring simple forms, closely knit
            weaves, and vibrant patterns, each product harmonizes craft
            traditions with a touch of modernity. Metal details add a
            contemporary edge.
          </p>
        </div>
      </div>
      <div className=" flex flex-1">
        <img src={tpt3} alt="" />
      </div>
    </div>
  );
};

export default StoryBlock;
