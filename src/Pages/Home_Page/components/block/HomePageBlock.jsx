import React from "react";
import { useNavigate, Link } from "react-router-dom";
import background from "../../../../assets/BG.png";
import boi from "../../../../assets/BOI.png";
import lifegate from "../../../../assets/lifegate.png";
import dd from "../../../../assets/dd.png";
import rtg from "../../../../assets/rtg.png";
import { BsArrowRightCircle } from "react-icons/bs";
import lego from "../../../../assets/Lego.png";
import boiLogo from "../../../../assets/boiLogo.png";
import ddlogo from "../../../../assets/ddlogo.png";
import fashionTech from "../../../../assets/fashionTech.png";
import lifegateLogo from "../../../../assets/lifegateLogo.png";
import pickCheff from "../../../../assets/pickChef.png";
import rinascente from "../../../../assets/Rinascente.png";
import tpt from "../../../../assets/TPT.png";
import yellow from "../../../../assets/yellow.png";

const HomePageBlock = () => {
  const navigate = useNavigate();
  return (
    <div
      className=" font-serif px-10 md:px-40 py-20  flex flex-col gap-10 text-[#2A2D43]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="md:py-20">
        <div className="text-lg lg:text-2xl xl:text-3xl">
          <p>Hello! I’m Maria.</p>
        </div>
        <div className=" text-4xl font-bold lg:text-6xl xl:text-7xl ">
          <p>
            A Business designer <br /> focusing on products,
            <br /> brands and experiences.
          </p>
        </div>
      </div>
      <div>
        <p className=" text-lg lg:text-2xl xl:text-3xl">
          Projects and case studies
        </p>
        <div className=" mt-5 grid grid-cols-1 gap-5 md:gap-4 lg:gap-4 md:grid-cols-2 ">
          <div onClick={() => navigate("/boi")}>
            <div className=" bg-white rounded-lg cursor-pointer">
              <img
                className="rounded-t-lg w-[100%] px-10  md:h-64 lg:h-[400px] xl:h-[600px]"
                src={boi}
                alt=""
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
              />

              <div className="p-5 flex justify-between items-center bg-[#f0f0fe]">
                <div>
                  <p className="text-lg lg:text-2xl xl:text-3xl">
                    Board of Innovation
                  </p>
                  <p className="text-sm lg:text-lg text-[#7F818E] font-sans font-light">
                    Lounching a new brand to embody BOI's next step.
                  </p>
                </div>
                <div className=" bg-white rounded-full text-[#7F818E]  hover:text-blue-500 cursor-pointer">
                  <BsArrowRightCircle size={30} />
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => navigate("/lifegate")}>
            <div className=" bg-white rounded-lg cursor-pointer">
              <img
                className="rounded-t-lg w-[100%] px-28 py-5 md:h-64 lg:h-[400px] xl:h-[600px]"
                src={lifegate}
                alt=""
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
              />
              <div className="p-5 flex justify-between items-center bg-[#f0f0fe]">
                <div>
                  <p className="text-lg lg:text-2xl xl:text-3xl">
                    LifeGate, Italia
                  </p>
                  <p className="text-sm lg:text-lg text-[#7F818E] font-sans font-light">
                    Reshaping LifeGate's image among digital natives.
                  </p>
                </div>
                <div className=" bg-white rounded-full text-[#7F818E]  hover:text-blue-500 cursor-pointer">
                  <BsArrowRightCircle size={30} />
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => navigate("/dd")}>
            <div className=" bg-white rounded-lg cursor-pointer">
              <img
                className="rounded-t-lg w-[100%] px-10 md:h-64 lg:h-[400px] xl:h-[600px]"
                src={dd}
                alt=""
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
              />
              <div className="p-5 flex justify-between items-center bg-[#f0f0fe]">
                <div>
                  <p className="text-lg lg:text-2xl xl:text-3xl">
                    Design Digest
                  </p>
                  <p className="text-sm lg:text-lg text-[#7F818E] font-sans font-light">
                    Kickstarting Design Digest with their brand identity.
                  </p>
                </div>
                <div className=" bg-white rounded-full text-[#7F818E]  hover:text-blue-500 cursor-pointer">
                  <BsArrowRightCircle size={30} />
                </div>
              </div>
            </div>
          </div>
          <div onClick={()=>navigate('/tpt')}>
            <div className=" bg-white rounded-lg cursor-pointer">
              <img
                className="rounded-t-lg w-[100%] px-10 md:h-64 lg:h-[400px] xl:h-[600px]"
                src={rtg}
                alt=""
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
              />
              <div className="p-5 flex justify-between items-center bg-[#f0f0fe]">
                <div>
                  <p className="text-lg lg:text-2xl xl:text-3xl">
                    The Purple Turtles
                  </p>
                  <p className="text-sm lg:text-lg text-[#7F818E] font-sans font-light">
                    Artisanal exploration to an outdoor decor collection.
                  </p>
                </div>
                <div className=" bg-white rounded-full text-[#7F818E]  hover:text-blue-500 cursor-pointer">
                  <BsArrowRightCircle size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl">Collaborated companies</p>
        <div className=" mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 place-items-center">
          <div>
            <img src={lego} alt="" />
          </div>
          <div>
            <img src={boiLogo} alt="" />
          </div>
          <div>
            <img src={rinascente} alt="" />
          </div>
          <div>
            <img src={fashionTech} alt="" />
          </div>
          <div>
            <img src={tpt} alt="" />
          </div>
          <div>
            <img src={pickCheff} alt="" />
          </div>
          <div>
            <img src={lifegateLogo} alt="" />
          </div>
          <div>
            <img src={yellow} alt="" />
          </div>
          <div>
            <img src={ddlogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlock;
