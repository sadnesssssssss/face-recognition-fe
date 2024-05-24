import axios from 'axios'
import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'
import "./LogInForm.css";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie"
import {useEffect, useState} from "react";

const LogInForm = () => {

    const navigate=useNavigate();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useCookies(["token"])

    const onButtonClick = () => {
        axios.post("http://localhost:8000/api/user/token/", {
            "password": password,
            "email": mail,
        }).then((res) => {
            setCookie("token", res.data.token);
            navigate("/profile");
        })
    };

    interface IJWTPayload {
        name: string,
        email: string
        picture: string
    }

    useEffect(() => {
        if(cookie.token){
            navigate("/profile");
            console.log(cookie.token)
        }
    });


    const handleGoogleAuth = (response: any) => {
        console.log(response)
        var credential = jwtDecode(response.credential) as IJWTPayload;
        console.log(credential);
        console.log(credential.name);
        console.log(credential.email);
        axios.post("http://localhost:8000/api/user/googlecreate/", {
            "name": credential.name,
            "email": credential.email,
        }).then((res) => {
            console.log(res);
        })
        axios.post("http://localhost:8000/api/user/googletoken/", {
            "name": credential.name,
            "email": credential.email,
        }).then((res) => {
            console.log(res);
            setCookie("token", res.data.token);
            console.log(cookie.token)
            navigate("/profile");
        })

    };
    const errorMessage = () => {
        console.log("error");
    };

    return (<div className="form">
        <div className="frame-div">
            <div className="heading-1-sign-in-wrapper">
                <div className="heading-1">Sign In</div>
            </div>
            <input className="username" placeholder="E-mail" onChange={(e) => (setMail(e.target.value))} type="text"/>
            <input className="password" placeholder="Password" onChange={(e) => (setPassword(e.target.value))} type="password"/>
        </div>
        <div className="button-wrapper">
            <button className="button" onClick={onButtonClick}>
                <b className="log-in">Log In</b>
            </button>
            <p className="analogy">Or</p>
            <div className="google-button">
                <GoogleLogin onSuccess={handleGoogleAuth} onError={errorMessage}/>
            </div>
        </div>

    </div>);
};

export default LogInForm;
