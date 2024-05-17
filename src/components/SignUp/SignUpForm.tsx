import { FunctionComponent, memo, useCallback } from "react";
import "../LogIn/LogInForm.css";

const LogInForm: FunctionComponent = memo(() => {

  const onButtonClick = useCallback(() => {
    // Please sync "UserProfile" to the project
  }, []);

  return (
    <div className="form">
      <div className="frame-div">
        <div className="heading-1-sign-in-wrapper">
          <div className="heading-1">Sign Up</div>
        </div>
          <input className="username" placeholder="Username" type="text" />
          <input className="password" placeholder="Password" type="text" />
      </div>
      <div className="checkboxes2-deselected1-en-parent">
          <label><input className="remember-checkbox" type="checkbox"></input>Remember me</label>
      </div>
      <div className="button-wrapper">
        <button className="button" onClick={onButtonClick}>
          <b className="log-in"> &gt;&gt; </b>
        </button>
      </div>
    </div>
  );
});

export default LogInForm;
