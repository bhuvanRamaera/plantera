import React from "react";
import "./review.css";
import ReviewImg from "./ReviewImg";

import ReviewInfo from "./ReviewInfo";

const Review = () => {
  return (
    <div className="review-container relative justify-between flex mx-auto mt-10">
      <ReviewInfo />
      <ReviewImg/>
    </div>
  );
};

export default Review;
