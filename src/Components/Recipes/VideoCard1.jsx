import React from "react";
import chefImg from "../../../src/assets/chef.jpeg";
import bookmark from "../../../src/assets/bookmark.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import share from "../../../src/assets/share.png";
import like from "../../../src/assets/like.png";
import comment from "../../../src/assets/comment.png";
import playBtn from "../../../src/assets/Play.png";
import { padding } from "@mui/system";
// import { IGEmbed } from "react-ig-embed";
import InstagramEmbed from "react-instagram-embed";

const VideoCard1 = ({ item }) => {
  console.log(item);
  return (
    <div
      className="video-card-1 bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient( 0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)), url(${item.bgImg})`,
      }}
    >
      <div className="chef-section">
        <div className="chef-info flex justify-around items-center mt-4">
          <div className="flex justify-around items-center w-[50%]">
            <div className="chef-wrapper">
              <div className="lg:w-[75px] lg:h-[75px] flex justify-center items-center rounded-full chef-container ">
                <img src={item.chefImg} alt="" className="chef-img" />
              </div>

              {/* <InstagramEmbed
                url="https://www.instagram.com/ramaeraindustries/"
                clientAccessToken="590034459297018|79f29ae709c526b7bc202dc3a06919d2"
                maxWidth={320}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              /> */}
            </div>
            <div>
              <p className="chef-name">{item.chefName}</p>
              <p className="recipe-time">{item.time}</p>
            </div>
          </div>
          <div className="bookmark flex justify-center items-center rounded-full">
            <img src={bookmark} alt="" width={"30px"} />
          </div>
        </div>
      </div>
      <div className="play-btn mx-auto text-center mt-40 flex justify-center items-center">
        <img src={playBtn} alt="" />
      </div>
      <div className="video-info flex flex-col items-end text-center w-[100%] h-44 justify-around ">
        <div className="share mb-5 mr-6">
          <img src={share} alt="" width={"25px"} />
        </div>
        <div className="comment mr-6 mb-3">
          <img src={comment} alt="" width={"25px"} />
          <p className="comments">133</p>
        </div>
        <div className="like mr-5">
          <img src={like} alt="" width={"25px"} />
          <p className="likes">2.9k</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard1;
