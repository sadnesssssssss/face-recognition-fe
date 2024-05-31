import {FunctionComponent, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import {useCookies} from "react-cookie";

const Header: FunctionComponent = () => {
  const [cookies, setCookies, removeCookies] = useCookies(["token"])

  let rightText = "";
  if (document.location.pathname === "/profile")
    rightText = "Log out";
  if (document.location.pathname === "/"){
    rightText = "Subscriptions";
  }

  const navigate = useNavigate();

  const onTryItClick = () => {
    if (window.location.pathname != "/"){
      navigate("/buy")
    }

    const anchor = document.querySelector(
        "[data-scroll-to='subscriptionsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
  const onFAQTextClick = () => {
    if (window.location.pathname !== "/") {
      navigate('/');
    }
    const anchor = document.querySelector("[data-scroll-to='faqContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onSupportTextClick = () => {
    if (window.location.pathname != "/"){
      navigate("/")
    }

    const anchor = document.querySelector(
      "[data-scroll-to='bugReportContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };



  const handleLogoClick = () => {
    navigate('/');
  }

  const onRightTextClick = () => {
    if (document.location.pathname === "/profile"){
      removeCookies("token");
      navigate("/");
      return;
    }
    navigate("/buy")
  };

  return (
    <header className="header">
      <div className="background" />
      <div className="logo-wrapper" onClick={handleLogoClick}>
        <div className="logo">
          <div className="logo-1-parent">
            <img
              className="logo-1-icon"
              loading="lazy"
              alt=""
              src="/icons/logo.ico"
            />
            <div className="project-name">
              <b className="identityx">IdentityX</b>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <b className="button-link" onClick={onTryItClick}>
          Try it
        </b>
        <b className="button-link" onClick={onFAQTextClick}>
          FAQ
        </b>
        <b className="button-link" onClick={onSupportTextClick}>
          Support
        </b>
        <b className="button-link">
        <Link className="button-link" to="/login">
          My profile
        </Link>
        </b>
        <div className="rectangle-parent">
          <b className="subscriptions button-link" onClick={onRightTextClick}>
            {rightText}
          </b>
        </div>
      </div>
    </header>
  );
};

export default Header;
