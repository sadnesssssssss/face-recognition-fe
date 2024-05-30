import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
            <footer className="footer">
                <div className="footer-child"/>
                <div className="reviews-parent">
                    <b className="reviews">
                        Reviews
                    </b>
                    <b className="about-team">
                        About team
                    </b>
                    <div className="follow-us-parent">
                        <b className="follow-us">Follow us</b>
                        <div className="frame-container">
                            <Link to="https://vk.com/art3my"><img className="icon" alt={""} src="/icons/vk.svg"/></Link>
                            <Link to="https://t.me/art33my"><img className="icon" alt={""} src="/icons/telegram.svg"/></Link>
                            <Link to="https://discord.gg/7FXefn92"><img className="icon" alt={""} src="/icons/discord.svg"/></Link>
                            <Link to="https://github.com/sadnesssssssss/face-recognition-fe"><img className="icon" alt={""} src="/icons/github.svg"/></Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };

    export default Footer;
