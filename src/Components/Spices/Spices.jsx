import React from "react";
import "./spices.css";
import SpicesInfo from "./SpicesInfo";

const Spices = () => {
  return (
    <div className="spices-container lg:w-[100%] m-auto relative flex lg:ml-5 mt-20">
      <div className="basis-7/12 lg:ml-5 box-container">
        <div className="box">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
          <div className="lg:w-[282px] lg:h-[101px] small-box ml-5 absolute z-10"></div>
          </div>
          <div className="box1 z-20 lg:w-[424px] lg:h-[523px] absolute bg-center bg-cover border-white border shadow-lg"></div>
        </div>
        <div className="box">
          <div className="box2 z-30 lg:w-[424px] lg:h-[523px] absolute bg-center bg-cover border-white border shadow-md"></div>
          <div className="lg:w-[282px] lg:h-[101px] small-box2 ml-5 absolute"></div>
        </div>
      </div>
      <div className="basis-5/12">
        <SpicesInfo />
      </div>
    </div>
  );
};

export default Spices;
