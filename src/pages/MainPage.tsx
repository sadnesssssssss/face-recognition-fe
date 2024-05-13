import { FunctionComponent } from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Offers from "../components/Offers";
import Subscriptions from "../components/Subscriptions";
// import SortingSanctuary from "../components/SortingSanctuary";
// import FrameComponent from "../components/FrameComponent";
// import Footer1 from "../components/Footer1";
import "./MainPage.css";

const MainPage: FunctionComponent = () => {
  return (
    <div className="mainpage">
        <Header />
        <AboutUs />
        <Offers />
        <Subscriptions />
    </div>
  );
};

export default MainPage;
