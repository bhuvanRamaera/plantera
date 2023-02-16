import "./App.css";
import "./MediaQuery.css";
import Header from "./Header/Header";
import SectionMain from "./SectionMain";
import SolutionSection from "./SolutionSection";
import MasalaGrid from "./MasalaGrid/MasalaGrid";
import ExperienceSection from "./experience/ExperienceSection";
import FoodyProduct from "./Foody/FoodySection";
import TechnologySection from "./Technology/TechnologySection";
import { MasalaGridData } from "./MasalaGrid/MasalaGridData";
import SpiceandHealth from "./Components/SpiceandHealth/SpiceandHealth";
import Spices from "./Components/Spices/Spices";
import Footer from "./Components/Footer/Footer";
import Review from "./Components/Review/Review";
import NewsandBlog from "./Components/NewsandBlog/NewsandBlog";
import HandPicked from "./Components/HandpickedSpices/HandPicked";
import Recipes from "./Components/Recipes/Recipes";
import InstagramFeed from "./Components/Recipes/InstagramFeed";

function App() {
  // require("dotenv").config();
  return (
    <>
      <Header />
      <SectionMain />
      <FoodyProduct />
      <TechnologySection />
      <SolutionSection />
      <ExperienceSection />
      <MasalaGrid />
      <Recipes />
      <HandPicked />
      <NewsandBlog />
      <Review />
      <SpiceandHealth />
      <Spices />
      <Footer />

      {/* <MasalaGridData /> */}
    </>
  );
}

export default App;
