import React from "react";

const BoiButtons = ({ name,customClassName }) => {
  return (
    <div className={customClassName ? ` ${customClassName}` : " border w-full cursor-pointer bg-white border-[#2A2D4333] font-sans flex justify-center items-center rounded-full py-2 md:px-5 "}>
      {name}
    </div>
  );
};

export default BoiButtons;
