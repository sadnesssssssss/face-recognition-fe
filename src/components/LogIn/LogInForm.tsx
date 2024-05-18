import {FunctionComponent, memo, useCallback} from "react";
import axios from 'axios'
import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'
import "./LogInForm.css";

const LogInForm: FunctionComponent = () => {
    const onButtonClick = () => {
        const apiUrl = 'http://localhost:8000/api/user/get_base_resp/';
        axios.get(apiUrl, {
            responseType: "json"
        }).then((resp: any) => {
            const allPersons = resp.data;
            console.log(allPersons);
        });
    };


    const responseMessage = (response: any) => {
        console.log(response)
        console.log(jwtDecode(response.credential));
    };
    const errorMessage = () => {
        console.log("error");
    };

    return (<div className="form">
        <div className="frame-div">
            <div className="heading-1-sign-in-wrapper">
                <div className="heading-1">Sign In</div>
            </div>
            <input className="username" placeholder="Username" type="text"/>
            <input className="password" placeholder="Password" type="text"/>
        </div>
        <div className="checkboxes2-deselected1-en-parent">
            <label><input className="remember-checkbox" type="checkbox"></input>Remember me</label>
        </div>
        <div className="button-wrapper">
            <button className="button" onClick={onButtonClick}>
                <b className="log-in">Log In</b>
            </button>
            <p className="analogy">Or</p>
            <div className="google-button">
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
            </div>
        </div>

    </div>);
};

export default LogInForm;
