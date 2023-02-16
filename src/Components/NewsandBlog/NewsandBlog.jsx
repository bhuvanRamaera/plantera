import React from "react";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import "./newsandblog.css";
import NewsInfo from "./NewsInfo";
import Spoon from "../../../src/assets/spoon.png";
import transbg from "../../../src/assets/transbg.png";
import { NewsData } from "./Newsdata";

const newsCards = NewsData.map((item) => {
  return (
    <div className="">
      <Cards item={item} />
    </div>
  );
});
const NewsandBlog = () => {
  return (
    <div className="newsandblog mx-auto relative mt-60">
      <img
        src={Spoon}
        alt=""
        className="spoon absolute lg:top-[-18%] lg:left-[-14%] lg:w-[530px]"
      />
      <div className="-z-30 absolute right-0 top-[-30%] flex justify-end opacity-[20%]">
        <img src={transbg} alt="" />
      </div>
      <NewsInfo />
      <div className="flex cards w-[95%] justify-around flex-wrap mt-20 mx-auto">{newsCards}</div>

      {/* <Cards2 /> */}
    </div>
  );
};

export default NewsandBlog;
