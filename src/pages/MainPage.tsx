import { FunctionComponent } from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Offers from "../components/Offers";
import Subscriptions from "../components/Subscriptions";
import BugReport from "../components/BugReport";
import Footer from "../components/Footer"
import "./MainPage.css";

const MainPage: FunctionComponent = () => {
  return (
    <div className="mainpage">
        <Header/>
        <AboutUs/>
        <Offers/>
        <Subscriptions/>
        <BugReport/>
        <Footer/>
    </div>
  );
};

export default MainPage;
