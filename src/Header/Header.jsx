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

            <div
              id="mobile-pouch"
              className="basis-12/12 flex absolute image-top"
              style={{ right: "3%", top: "48%" }}
            >
              <div className="basis-6/12 flex"></div>
              <div className="basis-6/12 flex justify-end">
                <img
                  src={redPowder}
                  width={"80px"}
                  height={"80px"}
                  className="pr-3"
                />
                <img
                  src={tumericPowder}
                  width={"80px"}
                  height={"80px"}
                  className="pr-3"
                />
                <img
                  src={corienderPowder}
                  width={"80px"}
                  height={"80px"}
                  className="pr-3"
                />
              </div>
            </div>
            <div
              id="desktop-pouch"
              className="basis-12/12 flex absolute image-top"
              style={{ right: "3%", top: "100%" }}
            >
              <div className="basis-6/12 flex"></div>
              <div className="basis-6/12 flex justify-end">
                <img src={redPowder} width={"120px"} className="pr-3" />
                <img src={tumericPowder} width={"120px"} className="pr-3" />
                <img src={corienderPowder} width={"120px"} className="pr-3" />
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
