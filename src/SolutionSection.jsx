import "./App.css";
import spice from "../src/assets/images/spices.png";
import solutionBg from "../src/assets/images/solutionbg.png";
function SolutionSection() {
  return (
    <div className="container mt-40">
      <div className="basis-12/12 bussiness-Flex">
        <div className="basis-6/12 solution-background">
          <img src={spice} class="solution-image w-max-full h-auto" />
        </div>
        <div className="basis-1/12"></div>

        <div className="basis-4/12 self-center spices-pad">
          <h1 class="bussiness-head-mobile my-3">
            Get the Desired Flavour and Aroma with PlanetsEra Spices
          </h1>

          <p className="taste-text my-5">
            Using the most advanced tech of Air Classifying Mills, spices are
            produced at subzero temperature which helps them retain the
            uniqueness of their flavour.
          </p>
        </div>
        <img src={solutionBg} className="spciesImage" />
      </div>
    </div>
  );
}

export default SolutionSection;
