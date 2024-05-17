
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-child" />
      <div className="reviews-parent">
        <b className="reviews">Reviews</b>
        <b className="about-team">About team</b>
        <b className="check-key">Check key</b>
        <div className="follow-us-parent">
          <b className="follow-us">Follow us</b>
          <div className="frame-container">
            <img className="group-icon" alt="" src="/icons/contact-icons.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
