import Header from "../../components/MainPage/Header";
import AboutUs from "../../components/MainPage/AboutUs";
import Offers from "../../components/MainPage/Offers";
import Subscriptions from "../../components/MainPage/Subscriptions";
import BugReport from "../../components/MainPage/BugReport";
import Footer from "../../components/MainPage/Footer"
import Faq from "../../components/MainPage/Faq"
import "./MainPage.css";

const MainPage = () => {
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
