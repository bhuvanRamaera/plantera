import React from "react";
import "../Header/Header.css";
import logoImage from "../assets/images/logo.png";
const LogoSection = () => {
  return (
    <div className="basis-4/12 pl-5 myPos">
      <img
        id="desktopNav"
        src={logoImage}
        alt="logo"
        className="max-w-auto h-auto my-4"
      />
      <div className="basis-4/12 text-alignment">
        <h1 className="heading-text leading-none">
          Diverse blend of culture and taste
        </h1>
        <p className="sub-text my-3">
          Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
          ullamcorper sed pharetra sene.
        </p>

        <a href="#" className="explore my-5">
          Explore More
        </a>
      </div>
    </div>
  );
};

export default LogoSection;
