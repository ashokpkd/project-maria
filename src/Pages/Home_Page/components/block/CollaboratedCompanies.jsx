import React from "react";
import lego from "../../../../assets/Lego.png";
import boiLogo from "../../../../assets/boiLogo.png";
import ddlogo from "../../../../assets/ddlogo.png";
import fashionTech from "../../../../assets/fashionTech.png";
import lifegateLogo from "../../../../assets/lifegateLogo.png";
import pickCheff from "../../../../assets/pickChef.png";
import rinascente from "../../../../assets/Rinascente.png";
import tpt from "../../../../assets/TPT.png";
import yellow from "../../../../assets/yellow.png";

const CollaboratedCompanies = () => {
  return (
    <div className="flex flex-col gap-10 md:py-36 justify-center items-center">
      <p className="text-[1.625rem] text-center">Collaborated companies</p>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
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
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
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

export default CollaboratedCompanies;
