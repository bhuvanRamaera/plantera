import React from "react";
import "./SpicesandHealth.css";
import Spices3 from "../../../src/assets/spices3.png";

import HealthySpices from "./HealthySpices";
import Spice4 from "../../../src/assets/spicws4.jpeg";
const SpiceandHealth = () => {
  return (
    <div className="spicesandHealth relative">
      <h1 className="heading text-center space-x-1">Spices and Health</h1>
      <div className="spicesandHealth-container flex lg:justify-between">
        <div className="healthy-spice-container mt-5">
          <HealthySpices />  
        </div>
        <div>
        </div>
        <div className="spice-image-container lg:p-12 lg:w-[47%]">
          <img src={Spice4} alt="" className="spice-image" />
        </div>
      </div>
      <div className="overflow-x-hidden">
        <img
          src={Spices3}
          className="lg:w-[473px] lg:h-[445px] lg:absolute lg:z-30 spices3 lg:top-[75%] opacity-70"
          alt=""
        />
      </div>
    </div>
  );
};

export default SpiceandHealth;
