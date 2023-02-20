import "./Header.css";

import sliderImage from "../assets/images/slider.png";
import logoImage from "../assets/images/logo.png";
import corienderPowder from "../assets/images/coriender.png";
import redPowder from "../assets/images/redchilli.png";
import tumericPowder from "../assets/images/turmeric.png";
import LogoSection from "../navigation/LogoSection";
import NavItem from "../navigation/NavItem";
import CartSection from "../navigation/CartSection";
import NavigationMobile from "../MobileNavigation/NavigationMobile";
import { useState } from "react";
import { PouchData } from "./PouchData";
import { MobilePouchData } from "./MobilePouchData";

// import { searchForWorkspaceRoot } from "vite";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleClick = () => {
    setShowMenu(true);
    // document.getElementById("navDropdown").style.display = "none";
    var x = document.getElementById("navDropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
      // x.style.marginBottom = "500px";
      // x.style.transition = "all 3s";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <>
      <header className="bg-white">
        <nav className="relative">
          <NavigationMobile />
          {/* <div id="mobileNav" className="container flex w-full pb-1 nav-shadow">
            <div className="basis-3/12 pl-3">
              <img src={logoImage} alt="logo" className="h-auto my-4" />
            </div>
            <div className="basis-9/12 flex justify-end pr-3">
              <i
                class="fa fa-bars self-center icon-design"
                aria-hidden="true"
                onClick={toggleClick}
              ></i>
            </div>
          </div>
          {showMenu && (
            <div id="navDropdown" className="w-full">
              <ul id="mobilenavigation">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>

                <li className="flex relative group">
                  <a href="#" className="mr-1">
                    Pages
                  </a>
                </li>
              </ul>
            </div>
          )} */}
          <div className="container nav-flex">
            <LogoSection />
            <div className="basis-8/12 slider-Image">
              <div className="basis-12/12 flex items-center justify-end">
                <div className="basis-6/12">
                  <NavItem />
                </div>

                <CartSection />
              </div>
              <div className="basis-12/12 flex">
                <div className="basis-4/12 header-display"></div>
                <div className="basis-8/12">
                  <img src={sliderImage} />
                </div>
              </div>
            </div>
            <div id="mobile-pouch">
              <div
                className="basis-12/12 flex absolute image-top w-full"
                style={{ right: "3%", top: "48%" }}
              >
                <div className="basis-12/12 flex justify-between relative w-full">
                  {MobilePouchData.map((item) => {
                    return (
                      <div classsName={`${item.mobileBox1}`} flex justify-start>
                        <img
                          src={item.masalaImg}
                          width={"80px"}
                          className={`${item.imageBox1}`}
                          absolute
                          z-10
                        />
                        <div
                          className={`${item.mobilePouch1}`}
                          flex
                          justify-center
                          items-end
                          absolute
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div id="desktop-pouch">
              <div
                className="basis-12/12 flex absolute image-top w-full"
                style={{ top: "100%" }}
              >
                <div className="basis-8/12 flex"></div>

                <div className="basis-4/12 flex justify-around relative">
                  {PouchData.map((item) => {
                    return (
                      <div>
                        <img
                          src={item.masalaImg}
                          width={"100px"}
                          className="pr-3"
                        />
                        <div
                          className={`${item.pouchProperty1} flex justify-center items-end absolute`}
                        ></div>
                      </div>
                    );
                  })}
                  {/* <div>
                <img src={redPowder} width={"100px"} className="pr-3" />
                <div
                    className="flex justify-center items-end absolute pouch-box-1"
                  >
                    
                  </div>
                  </div>
                <img src={tumericPowder} width={"120px"} className="pr-3" />
                <img src={corienderPowder} width={"120px"} className="pr-3" /> */}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="clearfix"></div>
      </header>
    </>
  );
}

export default Header;
