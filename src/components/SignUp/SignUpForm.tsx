import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import "../LogIn/LogInForm.css";
import axios from "axios";
import {useCookies} from "react-cookie";

const LogInForm = () => {

    const instrs = ["Enter your E-mail:", "Enter your password:", "Enter your name"]
    const placeholders = ["E-mail", "Password", "Name"];
    const ids = ["mail", "password", "name"];
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [placeholder, setPlaceholder] = useState("E-mail");
    const [instr, setInstr] = useState("Enter your E-mail:");
    const [mail, setMail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    let input = {"mail": "", "password": "", "name": ""};
    const [currInput, setInput] = useState("")
    const [cookies, setCookies] = useCookies(["token"])

    useEffect(() => {
        if (cookies.token) {
            navigate("/profile")
        }
    }, []);


    const onButtonClick = () => {
        axios.post("http://localhost:8000/api/user/create/", {
            name: name, password: password, email: mail,
        }).then(() => {
            axios.post("http://localhost:8000/api/user/token/", {
                email:mail, password:password
            }).then((res) => {
                setCookies("token", res.data.token)
                navigate("/profile")
            })
        })
    };

    return (<div className="form">
        <div className={`frame-div`}>
            <div className="heading-1-sign-in-wrapper">
                <div className="heading-1">Sign Up</div>
            </div>
            <div className="needed-action">Enter all needed data</div>
            <input className="password" onChange={(e) => {
                setName(e.target.value)
            }} placeholder="Name"/>
            <input className="password" onChange={(e) => {
                setMail(e.target.value)
            }} placeholder="E-mail" type="email"/>
            <input className="password" onChange={(e) => {
                setPassword(e.target.value)
            }} placeholder="Password" type="password"/>
            <div className="button-wrapper">
                <button className="button" onClick={() => onButtonClick()}>
                    <b className="log-in"> &gt;&gt; </b>
                </button>
            </div>
        </div>
    </div>);
};

export default LogInForm;
