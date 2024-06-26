import {Link, useNavigate} from "react-router-dom";
import LogInForm from "../../components/LogIn/LogInForm";
import "./LogIn.css";

const LogIn = () => {
        const navigate = useNavigate();


        const onMainMenuContainerClick = () => {
            navigate("/");
        };

        return (
            <div className="registration">
                <div className="mainmenu-wrapper">
                    <div className="mainmenu" onClick={onMainMenuContainerClick}>
                        <img
                            className="logo-1-icon"
                            loading="lazy"
                            alt=""
                            src="/icons/logo.ico"
                        />
                        <div className="identityx-wrapper">
                            <b className="identityx">IdentityX</b>
                        </div>
                    </div>
                </div>
                <LogInForm/>
                <div className="sign-up-wrapper">
                    <div className="sign-up">
                        <div className="sign-up-question">Don't have an account? &nbsp;</div>
                        <Link to="/signup" className="signup">
                            <div className="signup">Sign up</div>
                        </Link>
                    </div>
                </div>
            </div>
        );
}

export default LogIn;
