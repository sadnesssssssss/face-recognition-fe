import { useCallback } from "react";
import {Link, useNavigate} from "react-router-dom";
import LogInForm from "../../components/LogIn/LogInForm";
import "./LogIn.css";

const LogIn = () => {
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
            src="/logo-1@2x.ico"
          />
          <div className="identityx-wrapper">
            <b className="identityx">IdentityX</b>
          </div>
        </div>
      </div>
      <LogInForm/>
      <div className="sign-up-wrapper">
        <div className="sign-up" onClick={onSignUpContainerClick}>
          <div className="dont-have-an">Don't have an account? &nbsp;</div>
            <Link to="../signup" className="signup"><div className="signup">Sign up</div></Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
