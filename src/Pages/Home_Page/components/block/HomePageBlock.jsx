import React from "react";
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
  return (
    <div
      className="text-gray-700 font-serif px-10 md:px-40 py-10 flex flex-col gap-10"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div>
        <div className="text-lg lg:text-xl xl:text-2xl">
          <p>Hello! I’m Maria.</p>
        </div>
        <div className=" text-4xl font-bold lg:text-5xl xl:text-6xl">
          <p>
            A Business designer <br /> focusing on products,
            <br /> brands and experiences.
          </p>
        </div>
      </div>
      <div>
        <p className=" text-lg">Projects and case studies</p>
        <div className=" mt-5 grid grid-cols-1 gap-5 md:gap-4 lg:gap-4 md:grid-cols-2">
          <div>
            <div className=" bg-white rounded-lg">
              <a href="#">
                <img
                  className="rounded-t-lg w-[100%] md:h-64 lg:h-72 xl:h-96"
                  src={boi}
                  alt=""
                  style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                />
              </a>
              <div className="p-5 flex justify-between items-center bg-slate-200">
                <div>
                  <p>Board of Innovation</p>
                  <p className="text-xs text-gray-400 font-light">
                    Lounching a new brand to embody BOI's next step.
                  </p>
                </div>
                <div className=" bg-white rounded-full">
                  <BsArrowRightCircle size={30} color="gray" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-white rounded-lg">
              <a href="#">
                <img
                  className="rounded-t-lg w-[100%] md:h-64 lg:h-72 xl:h-96"
                  src={lifegate}
                  alt=""
                  style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                />
              </a>
              <div className="p-5 flex justify-between items-center bg-slate-200">
                <div>
                  <p>LifeGate, Italia</p>
                  <p className="text-xs text-gray-400 font-light">
                    Reshaping LifeGate's image among digital natives.
                  </p>
                </div>
                <div className=" bg-white rounded-full">
                  <BsArrowRightCircle size={30} color="gray" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-white rounded-lg">
              <a href="#">
                <img
                  className="rounded-t-lg w-[100%] md:h-64 lg:h-72 xl:h-96"
                  src={dd}
                  alt=""
                  style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                />
              </a>
              <div className="p-5 flex justify-between items-center bg-slate-200">
                <div>
                  <p>Design Digest</p>
                  <p className="text-xs text-gray-400 font-light">
                    Kickstarting Design Digest with their brand identity.
                  </p>
                </div>
                <div className=" bg-white rounded-full">
                  <BsArrowRightCircle size={30} color="gray" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-white rounded-lg">
              <a href="#">
                <img
                  className="rounded-t-lg w-[100%] md:h-64 lg:h-72 xl:h-96"
                  src={rtg}
                  alt=""
                  style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                />
              </a>
              <div className="p-5 flex justify-between items-center bg-slate-200">
                <div>
                  <p>The Purple Turtles</p>
                  <p className="text-xs text-gray-400 font-light">
                    Artisanal exploration to launch an outdoor decor collection.
                  </p>
                </div>
                <div className=" bg-white rounded-full">
                  <BsArrowRightCircle size={30} color="gray" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl">Collaborated companies</p>
        <div className=" mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
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
