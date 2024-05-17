import "./Offers.css";

const Offers = () => {
    return (
        <div className="offers">
            <p>What we can offer?</p>
            <div className="offer-list">
                <div className="what-we-can-offer">
                    <img
                        className="offer-icon"
                        loading="lazy"
                        alt=""
                        src="/icons/shield.svg"
                    />
                    <p><strong>Security and Privacy</strong><br></br>
                        IdentityX provides a high level of security and privacy protection for our users' data</p>
                </div>
                <div className="what-we-can-offer">
                    <img
                        className="offer-icon"
                        loading="lazy"
                        alt=""
                        src="/icons/supportcustomer-1.svg"
                    />
                    <p><strong>Ease of use</strong><br></br>
                        IdentityX is easy to install and use, and the support team can help with any difficulties.</p>
                </div>
                <div className="what-we-can-offer">
                    <img
                        className="offer-icon"
                        loading="lazy"
                        alt=""
                        src="/icons/pc-phone-laptop.svg"
                    />
                    <p><strong>Connecting multiple devices</strong><br></br>
                        IdentityX allows you to connect up to 5 devices to your account</p>
                </div>
            </div>
        </div>
    );
};

export default Offers;
