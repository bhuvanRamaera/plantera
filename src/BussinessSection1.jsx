import "./App.css";
import machines from "../src/assets/images/machine.png";
function BussinessSection() {
  return (
    <div className="container mt-40">
      <div className="basis-12/12">
        <h2 className="taste text-center mb-10">
          PlanetsEra Manufacturing Process
        </h2>
      </div>

      <div className="basis-12/12 bussiness-Flex">
        <div className="basis-5/12 bussiness-Item pl-14">
          <h1 className="bussiness-head my-3">
            Quality Preservation Using Latest Technology
          </h1>

          <p className="taste-text mb-3">
            To maintain the quality and originality of the spices, we make sure
            that the spices are stored and maintained at lower temperatures
          </p>

          <p className="taste-text mb-3">
            Contemporary spice industries, use hammer mills that enable the
            temperature to rise upto 120°C , which causes the spices to lose
            their pungency and flavors.
          </p>
        </div>
        <div className="basis-2/12"></div>
        <div className="basis-5/12 relative bussiness-background">
          <img
            src={machines}
            className="absolute bussiness-image w-max-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default BussinessSection;
