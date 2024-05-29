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
                    <b className="check-key">
                        Check key
                    </b>
                    <div className="follow-us-parent">
                        <b className="follow-us">Follow us</b>
                        <div className="frame-container">
                            <img className="icon" alt={""} src="/icons/vk.svg"/>
                            <img className="icon" alt={""} src="/icons/telegram.svg"/>
                            <img className="icon" alt={""} src="/icons/discord.svg"/>
                            <img className="icon" alt={""} src="/icons/github.svg"/>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };

    export default Footer;
