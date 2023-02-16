import React from "react";
import "../Header/Header.css";
const CartSection = () => {
  return (
    <div id="desktopCart" className="basis-3/12 relative flex justify-center">
      <i className="fa fa-search absolute mt-1 ml-2 text-sm text-white search-icon"></i>
      <div id="cart" className="flex items-center pl-2">
        <i className="fa fa-shopping-cart text-white"></i>
        <div className="w-3 h-3	rounded-full bg-white text-sm search-cart flex items-center justify-center">
          <span className="text-xs">1</span>
        </div>
      </div>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="bg-transparent border-white border rounded-3xl"
      />
    </div>
  );
};

export default CartSection;
