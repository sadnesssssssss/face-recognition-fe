import {FunctionComponent, memo, useCallback, useState} from "react";
import {useNavigate} from 'react-router-dom';
import "../LogIn/LogInForm.css";

const LogInForm = () => {

    const instrs = ["Enter your E-mail:", "Enter Your password:", "Enter verification code:"]
    const placeholders = ["E-mail", "Password", "Verification code"]
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [placeholder, setPlaceholder] = useState("E-mail")
    const [instr, setInstr] = useState("Enter your E-mail:")
    const [errorText, setErrorText] = useState("")



    const onButtonClick = () => {
        setFadeOut(false);
        if (step == 3) {
            navigate("../profile");
            return;
        }
        setFadeIn(true);
        setTimeout(() => {
            let newSteps = step + 1;
            setStep(newSteps);
            setInstr(instrs[step]);
            setPlaceholder(placeholders[step])
        }, 500)
        setTimeout(() => {
            setFadeOut(true);
            setFadeIn(false);
        }, 1000);
        setTimeout(() => {
            setFadeOut(false);
        }, 1000)
    };

    return (<div className="form">
            <div className={`frame-div ${fadeIn ? 'fade-in' : ''} ${fadeOut ? 'fade-out' : ''}\ `}>
                <div className="heading-1-sign-in-wrapper">
                    <div className="heading-1">Sign Up ({step} / 3)</div>
                </div>
                <div className="needed-action">{instr}</div>
                <input className="password" placeholder={placeholder}/>
                {errorText != ""? <p className="error">{errorText}</p> : ""}
                <div className="button-wrapper">
                    <button className="button" onClick={() => onButtonClick()}>
                        <b className="log-in"> &gt;&gt; </b>
                    </button>
                </div>
            </div>
        </div>);
};

export default LogInForm;
