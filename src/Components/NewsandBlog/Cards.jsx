import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="cards">
      <div className="card flex flex-col justify-center w-[100%] h-[80vh]">
        <div className="img-div card1 mx-auto" style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.productImg})`,
      }} />
        <h1 className="text-center product-name mt-4">{item.productName}</h1>
        <p className="product-desc">
          {item.productDesc}
        </p>
      </div>

      {/* <div className="card flex flex-col justify-center w-[25%] text-center">
        <div className="img-div card2 mx-auto"></div>
        <h1 className="text-center product-name mt-4">Product Name</h1>
        <p className="text-center product-desc">
          Lorem ipsum amet dolor, etit tu
        </p>
      </div>

      <div className="card flex flex-col justify-center w-[25%]">
        <div className="img-div card3 mx-auto"></div>
        <h1 className="text-center product-name mt-4">Product Name</h1>
        <p className="text-center product-desc">
          Lorem ipsum amet dolor, etit tu
        </p>
      </div>

      <div className="card flex flex-col justify-center w-[25%]">
        <div className="img-div card4 mx-auto"></div>
        <div className="w-[80%] mx-auto">
          <h1 className="text-center product-name mt-4">Product Name</h1>
          <p className="text-center product-desc">
            Lorem ipsum amet dolor, etit tu
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Cards;
