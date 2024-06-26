import "./Subscriptions.css";
import {Link} from "react-router-dom";

const Subscriptions = () => {
    return (
        <div className="subscriptions1" data-scroll-to="subscriptionsContainer">
            <div className="wrapper-background">
                <img className="background-icon" alt="" src="/images/subscriptions_background.png"/>
            </div>
            <div className="sub-description-text">
                <p className="top-text">Protect your business<br></br></p>
                <p className="guarantee"><strong>Pricing Guarantee:</strong>Your plan always renews with the same price
                    and duration<br></br></p>
                <p className="plan-selection">Select your subscription plan:</p>
            </div>
            <div className="subscription-buttons">
                <div className="subscription left-button">
                    <p className="sub-name"><b>Trial</b></p>
                    <p className="sub-price">Free for <b>1 Week</b></p>
                    <Link to="/signup" className="link-text"><p className="select-button">Sign Up</p></Link>
                </div>
                <div className="subscription middle-button">
                    <p className="best-deal">Best Deal</p>
                    <p className="sub-name"><b>1 Year</b></p>
                    <p className="sub-price top-price"><b>$3.49</b></p>
                    <p className="sub-price bot-price">/month</p>
                    <Link to="/buy" className="link-text"><p className="select-button">Select Plan</p></Link>
                </div>
                <div className="subscription right-button">
                    <p className="sub-name"><b>1 Month</b></p>
                    <p className="right-sub-price"><b>$4.49</b></p>
                    <p className="sub-price right-bot-price">/month</p>
                    <Link to="/buy" className="link-text"><p className="select-button">Select Plan</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;
