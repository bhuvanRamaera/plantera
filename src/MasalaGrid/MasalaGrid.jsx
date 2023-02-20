import bg1 from "../assets/images/img-1.png";
import bg2 from "../assets/images/img-2.png";
import bg5 from "../assets/images/img-5.png";
import bg4 from "../assets/images/img-4.png";
import bg8 from "../assets/images/img-8.png";
import bg6 from "../assets/images/img-6.png";
import masalaBackground from "../assets/images/masalabg.png";
import { MasalaGridData } from "./MasalaGridData";

function MasalaGrid() {
  return (
    <>
      <div className="container px-28 mx-auto lg:pt-22 mt-24">
        <div className="basis-12/12">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-center my-5 bussiness-head">
              Perfect spicy twist for every occasion
            </h2>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="taste-text text-center text-md font-normal mb-3">
              PlanetsEra has an extensive range of spices to make your day -
              amazing and extraordinary.
            </p>
          </div>
        </div>
        <div className="masalaMobile-flex">
          {MasalaGridData.map((item) => {
            return (
              <div className="m-[2%] masalaMobile-width">
                <div className="w-full p-1 md:p-2 relative flex justify-center items-center">
                  <div
                    className={`${item.gradientProperty1} flex justify-center items-end absolute h-3/6`}
                  >
                    <h3 className="mb-12 text-white">{item.masalaName}</h3>
                  </div>
                  <img src={item.masalaImg} className="gra-img" />
                </div>
              </div>
            );
          })}
          <img src={masalaBackground} className="masala-background" />
        </div>
      </div>

      <div className="basis-12/12 flex my-10">
        <div className="basis-5/12"></div>
        <div className="basis-3/12 flex justify-center items-center">
          <a
            href="#"
            className="masala-button mx-auto flex justify-center items-center"
          >
            See All
          </a>
        </div>
        <div className="basis-4/12"></div>
      </div>
    </>
  );
}
export default MasalaGrid;
