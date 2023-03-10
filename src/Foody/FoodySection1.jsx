import React from "react";

const FoodySection1 = () => {
  return (
    <div className="basis-5/12 p-14">
      <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
      <h3 className="foodyHeading mt-28 mb-3 text-5xl text-white font-bold">
        Spices - that are true to their taste
      </h3>
      </div>
      <div data-aos="fade-down"  data-aos-anchor-placement="top-bottom">
      <p className="leading-8 tracking-wide	mb-3">
        With no artificial preservatives, we ensure that Ramaera spices are
        produced with the essence of nature and are true to their taste. Caring
        for your health and requirements, we utilize the most advanced
        technologies for the production of these spices, so that we do not keep
        you waiting to eat your favorite dishes served with the homely touch of
        the finely ground spices.
      </p>
      </div>
      <div className="basis-4/12"></div>
      <div class="clearfix"></div>
      <a
        href="#"
        className="explore-foody btn2 flex bg-white p-4 justify-center items-center my-3"
      >
        Read More
      </a>
    </div>
  );
};

export default FoodySection1;
