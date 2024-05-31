import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import "../LogIn/LogInForm.css";
import axios from "axios";
import {useCookies} from "react-cookie";

const LogInForm = () => {

    const navigate = useNavigate();
    const [mail, setMail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [cookies, setCookies] = useCookies(["token"])

    useEffect(() => {
        if (cookies.token) {
            navigate("/profile")
        }
    }, [cookies.token, navigate]);


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
