import { FunctionComponent, memo, useCallback } from "react";
import "./Header.css";

const Header: FunctionComponent = memo(() => {
  const onTryItTextClick = useCallback(() => {
    // Please sync "Registration" to the project
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
    // Please sync "Registration" to the project
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
              src="/logo-1@2x.png"
            />
            <div className="error-handler">
              <b className="identityx">IdentityX</b>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <b className="button-link" onClick={onTryItTextClick}>
          Try it
        </b>
        <b className="button-link" onClick={onFAQTextClick}>
          FAQ
        </b>
        <b className="button-link" onClick={onSupportTextClick}>
          Support
        </b>
        <b className="button-link" onClick={onMyProfileTextClick}>
          My profile
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
