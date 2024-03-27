import React from "react";
import img1 from "../../../../assets/gallery/1.png";
import img2 from "../../../../assets/gallery/2.png";
import img3 from "../../../../assets/gallery/3.png";
import img4 from "../../../../assets/gallery/4.png";
import img5 from "../../../../assets/gallery/5.png";
import img6 from "../../../../assets/gallery/6.png";
import img7 from "../../../../assets/gallery/7.png";
import img8 from "../../../../assets/gallery/8.png";
import img9 from "../../../../assets/gallery/9.png";
import img10 from "../../../../assets/gallery/10.png";
import img11 from "../../../../assets/gallery/11.png";
import img12 from "../../../../assets/gallery/12.png";
import img13 from "../../../../assets/gallery/13.png";
import img14 from "../../../../assets/gallery/14.png";
import img15 from "../../../../assets/gallery/15.png";
import img16 from "../../../../assets/gallery/16.png";
import { IoMdArrowUp } from "react-icons/io";

const GalleryBlock = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col justify-center items-center px-8 gap-4 py-8 md:px-52">
      <div className="flex flex-col gap-4 md:flex-row justify-center items-center ">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className=" flex flex-col gap-4 justify-center items-center">
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-4 justify-center items-center">
        <div>
          <img src={img8} alt="" />
        </div>
        <div>
          <img src={img9} alt="" />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-4 justify-center items-center">
        <div>
          <img src={img10} alt="" />
        </div>
        <div>
          <img src={img11} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className=" flex flex-col gap-4 justify-center items-center">
          <div>
            <img src={img12} alt="" />
          </div>
          <div>
            <img src={img13} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center ">
          <div>
            <img src={img14} alt="" />
          </div>
          <div>
            <img src={img15} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={img16} alt="" />
      </div>
      <div
        className="flex font-sans justify-center items-center border-b border-black w-[8rem] md:my-16 cursor-pointer"
        onClick={backToTop}
      >
        <p>Back to the top</p>
        <IoMdArrowUp size={20} />
      </div>
    </div>
  );
};

export default GalleryBlock;
