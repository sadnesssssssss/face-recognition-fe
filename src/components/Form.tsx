import { FunctionComponent, memo, useCallback } from "react";
import "./Form.css";

const Form: FunctionComponent = memo(() => {
  const onButtonClick = useCallback(() => {
    // Please sync "UserProfile" to the project
  }, []);

  return (
    <div className="form">
      <div className="frame-div">
        <div className="heading-1-sign-in-wrapper">
          <div className="heading-1">Sign In</div>
        </div>
        <div className="input">
          <input className="username" placeholder="Username" type="text" />
        </div>
      </div>
      <div className="input1">
        <input className="password" placeholder="Password" type="text" />
      </div>
      <div className="checkboxes2-deselected1-en-parent">
          <input type="checkbox"></input>
        <div className="remember-me-wrapper">
          <div className="remember-me">Remember me</div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button" onClick={onButtonClick}>
          <b className="log-in">Log In</b>
        </button>
      </div>
    </div>
  );
});

export default Form;
