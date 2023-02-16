import React from "react";

const Cards2 = () => {
  return (
    <div className="cards2">
      <div className="cards flex justify-between">
        <div className="card flex flex-col justify-center w-[25%] h-[80vh]">
          <div className="img-div card5 mx-auto"></div>
          <h1 className="text-center product-name mt-4">Product Name</h1>
          <p className="text-center product-desc">
            Lorem ipsum amet dolor, etit tu
          </p>
        </div>

        <div className="card flex flex-col justify-center w-[25%] text-center">
          <div className="img-div card6 mx-auto"></div>
          <h1 className="text-center product-name mt-4">Product Name</h1>
          <p className="text-center product-desc">
            Lorem ipsum amet dolor, etit tu
          </p>
        </div>

        <div className="card flex flex-col justify-center w-[25%]">
          <div className="img-div card7 mx-auto"></div>
          <h1 className="text-center product-name mt-4">Product Name</h1>
          <p className="text-center product-desc">
            Lorem ipsum amet dolor, etit tu
          </p>
        </div>

        <div className="card flex flex-col justify-center w-[25%]">
          <div className="img-div card8 mx-auto"></div>
          <div className="w-[80%] mx-auto">
            <h1 className="text-center product-name mt-4">Product Name</h1>
            <p className="text-center product-desc">
              Lorem ipsum amet dolor, etit tu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
