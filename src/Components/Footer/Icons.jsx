import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Icons = () => {
  return (
    <div className="icons flex w-40 text-center justify-around items-start mt-2 lg:ml-6">
      <a href="https://www.instagram.com/ramaeraindustries/" target="_blank">
        <Instagram style={{ color: "white" }} />
      </a>
      <a href="https://www.facebook.com/ramaeraindustries" target="_blank">
        <Facebook style={{ color: "white" }} />
      </a>
      <a href="https://twitter.com/ramaeraltd" target="_blank">
        <Twitter style={{ color: "white" }} />
      </a>
    </div>
  );
};

export default Icons;
