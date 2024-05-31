import Header from "../../components/MainPage/Header"
import Footer from "../../components/MainPage/Footer"
import "./BuySub.css"
import React, {useState} from "react";


const BuySub = () => {

    const [texts, setTexts] = useState(["✔", "Select Plan"])
    const [sel, setSel] = useState(0)
    const [mail, setMail] = useState("")


    const OnSelectClick = (num: number) => {
        let newPlans = ["Select Plan", "Select Plan"]
        newPlans[num] = "✔"
        setTexts(newPlans)
    }

    return (<div className="page-content">
        <Header/>
        <div className="nth-step">
            <div className="row">
                <p className="step-number">1</p>
                <p className="step-desc">Select your plan</p>
            </div>
            <div className="sub-select">
                <div className="sub">
                    <p className="subscription-name"><b>1 Month</b></p>
                    <p className="price"><b>$4.49</b></p>
                    <p className="sub-price right-bot-price">/month</p>
                    <p className="select" onClick={() => OnSelectClick(0)}>{texts[0]}</p>
                </div>
                <div className="sub">
                    <p className="subscription-name"><b>1 Year</b></p>
                    <p className="price"><b>$3.49</b></p>
                    <p className="sub-price right-bot-price">/month</p>
                    <p className="select" onClick={() => OnSelectClick(1)}>{texts[1]}</p>
                </div>
            </div>
        </div>
        <div className="nth-step">
            <div className="row">
                <p className="step-number">2</p>
                <p className="step-desc">Enter your e-mail (it should be linked to your account)</p>
            </div>
            <input maxLength={50} value={mail} onChange={(e) => (setMail(e.target.value))} className="user-mail" placeholder="Mail"
                   type="email"/>
        </div>
        <div className="nth-step">
            <div className="row">
                <p className="step-number">3</p>
                <p className="step-desc">Select payment method</p>
            </div>
            <p>add payment methods</p>
            <button className="get-to-payment"><b className="send-report">Get to payment</b></button>
        </div>
        <Footer/>
    </div>)
}


export default BuySub