import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-identityx">About IdentityX</div>
            <div className="advantages">
                <div className="offer">
                <img
                    loading="lazy"
                    alt=""
                    src="/icons/people.svg"
                />
                    <p>Our team is specializing in the development and implementation of facial recognition technologies.</p>
                </div>
                <div className="offer">
                <img
                    loading="lazy"
                    alt=""
                    src="/icons/machinelearningmodel.svg"
                />
                    <p>Our goal is to make the world a safer and more convenient place by providing innovative solutions for personal identification.</p>
                </div>
                <div className="offer">
                <img
                    loading="lazy"
                    alt=""
                    src="/icons/trendup.svg"
                />
                    <p>Our expertise allows us to develop products that accurately and quickly recognize faces in a variety of environments</p>
                </div>
            </div>
        </div>);
};

export default AboutUs;
