import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-identityx">About IdentityX</div>
            <div className="advantages">
                <div className="offer">
                <img
                    className="parallel-icon"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                />
                    <p>Our team is specializing in the development and implementation of facial recognition technologies.</p>
                </div>
                <div className="offer">
                <img
                    className="carbonmachine-learning-model-icon"
                    loading="lazy"
                    alt=""
                    src="/carbonmachinelearningmodel.svg"
                />
                    <p>Our goal is to make the world a safer and more convenient place by providing innovative solutions for personal identification.</p>
                </div>
                <div className="offer">
                <img
                    className="phtrend-up-icon"
                    loading="lazy"
                    alt=""
                    src="/phtrendup.svg"
                />
                    <p>Our expertise allows us to develop products that accurately and quickly recognize faces in a variety of environments</p>
                </div>
            </div>
        </div>);
};

export default AboutUs;
