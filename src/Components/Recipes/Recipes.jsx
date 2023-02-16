import React, { useState } from "react";
import { RecipeData } from "../RecipeData";
import "./recipes.css";
import { InstagramEmbedDangerousHTML } from "./InstagramFeed";
import VideoCard1 from "./VideoCard1";

const Recipes = () => {
  return (
    <div className="recipes lg:w-[95%] mx-auto mt-5">
      <div className="flex justify-center">
        <h1 className="heading">Check out the yummiest recipes </h1>
      </div>
      <div className="video-cards flex w-[100%] justify-around mx-auto mt-10 items-center">
        {/* <VideoCard1 />
        <VideoCard2 />
        <VideoCard3 />
        {RecipeData.map((item) => {
          return <VideoCard1 item={item} />;
        })} */}
        <div className="video-cards flex w-11/12 justify-around mx-auto mt-10 items-center">
          {/* <p className="chef-name">{item.chefName}</p>
          <p className="recipe-time">{item.time}</p> */}
          <div
            className="shadow-lg p-4"
            style={{ border: "1px solid #dbdbdb" }}
          >
            <InstagramEmbedDangerousHTML url="https://www.instagram.com/reel/CnPuNA7hdUK/?hl=en" />
          </div>
          <div
            className="shadow-lg p-4"
            style={{ border: "1px solid #dbdbdb" }}
          >
            <InstagramEmbedDangerousHTML url="https://www.instagram.com/p/CfcksvBBiq2/" />
          </div>
          <div
            className="shadow-lg p-4"
            style={{ border: "1px solid #dbdbdb" }}
          >
            <InstagramEmbedDangerousHTML url="https://www.instagram.com/reel/CnPuNA7hdUK/?hl=en" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
