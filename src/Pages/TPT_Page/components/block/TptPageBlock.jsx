import React from "react";
import background from '../../../../assets/BG.png'
const TptPageBlock = () => {
  return (
    <div
      className=" font-serif flex flex-col gap-10 text-[#2A2D43]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      TptPageBlock
    </div>
  );
};

export default TptPageBlock;
