import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import "../LogIn/LogInForm.css";
import {useCookies} from "react-cookie";

const LogInForm = () => {

    const instrs = ["Enter your E-mail:", "Enter your password:", "Enter your name"]
    const placeholders = ["E-mail", "Password", "Name"]
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [placeholder, setPlaceholder] = useState("E-mail");
    const [instr, setInstr] = useState("Enter your E-mail:");
    let data: string[] = [];
    const [currInput, setInput] = useState("")
    const [cookies, setCookies] = useCookies(["token"])

    useEffect(() => {
        if (cookies){
            navigate("/profile")
        }
    }, []);


    const onButtonClick = () => {
        data = [...data, currInput];
        setFadeOut(false);
        if (step === 3) {
            console.log(data);
            navigate("../profile");
            return;
        }
        setFadeIn(true);
        setTimeout(() => {
            setInput("")
            let newSteps = step + 1;
            setStep(newSteps);
            setInstr(instrs[step]);
            setPlaceholder(placeholders[step]);
            setInput("");
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
        <div className={`frame-div ${fadeIn ? 'fade-in' : ''} ${fadeOut ? 'fade-out' : ''} `}>
            <div className="heading-1-sign-in-wrapper">
                <div className="heading-1">Sign Up ({step} / 3)</div>
            </div>
            <div className="needed-action">{instr}</div>
            <input value={currInput} className="password" onChange={(e) => {
                setInput(e.target.value)
            }} placeholder={placeholder}/>
            <div className="button-wrapper">
                <button className="button" onClick={() => onButtonClick()}>
                    <b className="log-in"> &gt;&gt; </b>
                </button>
            </div>
        </div>
    </div>);
};

export default LogInForm;
