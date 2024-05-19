import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header: FunctionComponent = () => {

  const navigate = useNavigate();
  const onFAQTextClick = () => {
    const anchor = document.querySelector("[data-scroll-to='faqContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onSupportTextClick = () => {
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

  const onSubscriptionsTextClick = () => {
    const anchor = document.querySelector(
      "[data-scroll-to='subscriptionsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
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
        <b className="button-link">
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
          <b className="subscriptions button-link" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </b>
        </div>
      </div>
    </header>
  );
};

export default Header;
