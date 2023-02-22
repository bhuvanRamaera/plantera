import experience1 from "../assets/images/experience-1.png";
import experience2 from "../assets/images/experience-2.png";
import experience3 from "../assets/images/experience-3.png";
import experience4 from "../assets/images/experience-4.png";
import experience5 from "../assets/images/experience-5.png";
import experience6 from "../assets/images/experience-6.png";
import Card from "react-animated-3d-card";
import { use3dEffect } from "use-3d-effect";

const ExperienceSection1 = () => {
  return (
    <div
      className="basis-6/12 pl-14"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="flex m-1 md:-m-2">
        <div className="flex flex-wrap">
          <div className="w-1/2 mr-3 ">
            <Card
              cursorPointer={false}
              shineStrength={0.75}
              style={{
                backgroundImage: `url(${experience1})`,
                width: "375px",
                height: "364px",
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Card>
            {/* <Card cursorPointer={false} shineStrength={0.75}>
              <img src={experience1} className="mb-2" />
            </Card> */}
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-1/2 flex items-end">
            <Card
              cursorPointer={false}
              shineStrength={0.75}
              style={{
                backgroundImage: `url(${experience2})`,
                width: "239px",
                height: "232px",
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Card>
            {/*    <Card cursorPointer={false} shineStrength={0.75}>
              <img src={experience2} className="mb-2" />
            </Card> */}
          </div>
        </div>
      </div>
      <div className="flex md:-m-2">
        <div className="basis-4/12 mt-5 mr-3">
          {/* <Card cursorPointer={false} shineStrength={0.75}>
            <img src={experience3} />
          </Card> */}
          <Card
            cursorPointer={false}
            shineStrength={0.75}
            style={{
              backgroundImage: `url(${experience3})`,
              width: "252px",
              height: "309px",
              cursor: "pointer",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Card>
        </div>

        <div className="basis-4/12 mt-5 mr-3">
          <Card
            cursorPointer={false}
            shineStrength={0.75}
            style={{
              backgroundImage: `url(${experience4})`,
              width: "196px",
              height: "227px",
              cursor: "pointer",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Card>

          {/* <Card cursorPointer={false} shineStrength={0.75}>
            <img src={experience4} />
          </Card> */}
        </div>

        <div className="basis-4/12 mt-5 mr-3">
          <div className="basis-4/12">
            <Card
              cursorPointer={false}
              shineStrength={0.75}
              style={{
                backgroundImage: `url(${experience5})`,
                width: "167px",
                height: "175px",
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Card>
          </div>
          <div className="basis-4/12">
            <Card
              cursorPointer={false}
              shineStrength={0.75}
              style={{
                backgroundImage: `url(${experience6})`,
                width: "166px",
                height: "168px",
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection1;
