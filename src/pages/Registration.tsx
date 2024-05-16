import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const onMainMenuContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    // Please sync "Auth 1" to the project
  }, []);

  return (
    <div className="registration">
      <div className="mainmenu-wrapper">
        <div className="mainmenu" onClick={onMainMenuContainerClick}>
          <img
            className="logo-1-icon"
            loading="lazy"
            alt=""
            src="/logo-1@2x.png"
          />
          <div className="identityx-wrapper">
            <b className="identityx">IdentityX</b>
          </div>
        </div>
      </div>
      <Form />
      <div className="sign-up-wrapper">
        <div className="sign-up" onClick={onSignUpContainerClick}>
          <div className="dont-have-an">Don't have an account?</div>
          <div className="signup">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
