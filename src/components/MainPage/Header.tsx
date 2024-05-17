import { FunctionComponent, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: FunctionComponent = memo(() => {
  const onTryItTextClick = useCallback(() => {
    // Please sync "LogIn" to the project
  }, []);

  const onFAQTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='faqContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSupportTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='bugReportContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMyProfileTextClick = useCallback(() => {

  }, []);

  const onSubscriptionsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='subscriptionsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className="header">
      <div className="background" />
      <div className="logo-wrapper">
        <div className="logo">
          <div className="logo-1-parent">
            <img
              className="logo-1-icon"
              loading="lazy"
              alt=""
              src="/icons/logo.ico"
            />
            <div className="error-handler">
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
        <b className="button-link" onClick={onMyProfileTextClick}>
        <Link className="button-link" to="/login">
          My profile
        </Link>
        </b>
        <div className="rectangle-parent">
          <div className="frame-child button-link" />
          <b className="subscriptions button-link" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </b>
        </div>
      </div>
    </header>
  );
});

export default Header;