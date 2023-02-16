import React from "react";
import experience1 from "../assets/images/experience-1.png";
import experience2 from "../assets/images/experience-2.png";
import experience3 from "../assets/images/experience-3.png";
import experience4 from "../assets/images/experience-4.png";
import experience5 from "../assets/images/experience-5.png";
import experience6 from "../assets/images/experience-6.png";
const ExperienceSection1 = () => {
  return (
    <div className="basis-6/12 pl-14">
      <div className="flex flex-wrap m-1 md:-m-2">
        <div className="flex flex-wrap">
          <div className="w-1/2 hover06 column">
            <img src={experience1} className="mb-2" />
          </div>
          <div className="w-1/2 self-end">
            <img src={experience2} className="mb-2" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap  m-1 md:-m-2">
        <div className="basis-4/12">
          <img src={experience3} />
        </div>
        <div className="basis-4/12">
          <img src={experience4} />
        </div>
        <div className="basis-4/12">
          <img src={experience5} />
          <img src={experience6} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection1;
