import React, { useState } from "react";
import { RecipeData } from "../RecipeData";
import "./recipes.css";
import { InstagramEmbedDangerousHTML } from "./InstagramFeed";
import VideoCard1 from "./VideoCard1";
import like from "../../../src/assets/like.png";
import { Share } from "@mui/icons-material";
import { SocialIcon } from "./SocialIcon";

const Recipes = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="recipes lg:w-[95%] mx-auto mt-5">
      <div className="flex justify-center">
        <h1 className="heading">Check out the yummiest recipes </h1>
      </div>
      <div className="video-cards flex w-[100%] justify-around mx-auto mt-10 items-center">
        {SocialIcon.map((item) => {
          return (
            <div className="video-cards flex w-11/12 justify-around mx-auto mt-10 items-center">
              <div
                className="shadow-lg p-4 relative"
                style={{ border: "1px solid #dbdbdb" }}
              >
                <div
                  className="z-[100]bg-500-red h-8 w-8 absolute"
                  style={{ right: "7%", top: "40%" }}
                >
                  <a href={`${item.instaLink}`} target="_blank">
                    <img src={`${item.shareIcon}`} className="mb-10" />
                  </a>
                  <a href={`${item.instaLink}`} target="_blank">
                    <img src={`${item.commentIcon}`} className="mb-10" />
                  </a>

                  <a href={`${item.instaLink}`} target="_blank">
                    <img src={`${item.likeIcon}`} className="mb-10" />
                  </a>
                </div>
                <InstagramEmbedDangerousHTML url={`${item.instaLink}`} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="video-cards flex w-[100%] justify-around mx-auto mt-10 items-center">
        {/* <VideoCard1 />
        <VideoCard2 />
        <VideoCard3 />
        {RecipeData.map((item) => {
          return <VideoCard1 item={item} />;
        })} */}
        {/*         <div className="video-cards flex w-11/12 justify-around mx-auto mt-10 items-center">
         */}{" "}
        {/* <p className="chef-name">{item.chefName}</p>
          <p className="recipe-time">{item.time}</p> */}
        {/* <div
            className="shadow-lg p-4 relative"
            style={{ border: "1px solid #dbdbdb" }}
          >
            <div
              className="z-[100]bg-500-red h-8 w-8 absolute"
              style={{ right: "7%", top: "40%" }}
            >
              <a
                href="https://www.instagram.com/reel/CnPuNA7hdUK/?hl=en"
                target="_blank"
              >
                <img src="../../../src/assets/share.png" className="mb-10" />
              </a>
              <a
                href="https://www.instagram.com/reel/CnPuNA7hdUK/?hl=en"
                target="_blank"
              >
                <img
                  src="../../../src/assets/comment.png"
                  alt=""
                  className="mb-10"
                />
              </a>

              <a
                href="https://www.instagram.com/reel/CnPuNA7hdUK/?hl=en"
                target="_blank"
              >
                <img src="../../../src/assets/like.png" alt="" />
              </a>
            </div>
            <InstagramEmbedDangerousHTML url="https://www.instagram.com/reel/CnPuNA7hdUK/?hl=en" />
          </div>
          <div
            className="shadow-lg p-4"
            style={{ border: "1px solid #dbdbdb" }}
          >
            <div
              className="z-[100]bg-500-red h-8 w-8 absolute"
              style={{ right: "7%", top: "50%" }}
            >
              ""
              <a href="https://www.instagram.com/p/CfcksvBBiq2/">
                <h2 className="text-white">icon</h2>
              </a>
            </div>
            <InstagramEmbedDangerousHTML url="https://www.instagram.com/p/CfcksvBBiq2/" />
          </div>
          <div
            className="shadow-lg p-4"
            style={{ border: "1px solid #dbdbdb" }}
          >
            <InstagramEmbedDangerousHTML url="https://www.instagram.com/reel/CnPuNA7hdUK/?hl=en" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Recipes;
