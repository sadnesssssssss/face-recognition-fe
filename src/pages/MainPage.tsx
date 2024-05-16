import { FunctionComponent } from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Offers from "../components/Offers";
import Subscriptions from "../components/Subscriptions";
import BugReport from "../components/BugReport";
import Footer from "../components/Footer"
import Faq from "../components/Faq"
import "./MainPage.css";

const MainPage: FunctionComponent = () => {
  return (
    <div className="mainpage">
        <Header/>
        <AboutUs/>
        <Offers/>
        <Subscriptions/>
        <Faq/>
        <BugReport/>
        <Footer/>
    </div>
  );
};

export default MainPage;
