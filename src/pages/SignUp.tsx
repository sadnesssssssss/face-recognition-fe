import {useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
    const navigate = useNavigate();
    const onMainMenuContainerClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const onSignUpContainerClick = useCallback(() => {
        // Please sync "Auth 1" to the project
    }, []);

    return (<div className="registration">
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
            <SignUpForm/>
            <div className="sign-up-wrapper">
                    <div className="dont-have-an">Already have an account? &nbsp;</div>
                    <Link to="../login" className="signup">
                        <div className="signup">Log In</div>
                    </Link>
            </div>
        </div>);
};

export default SignUp;
