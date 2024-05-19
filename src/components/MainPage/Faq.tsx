import "./Faq.css";
import React, {useState} from 'react';

const Faq = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    const toggleVisibility = ({Setter, Value}: {Setter: any, Value: any }) => {
        Setter(!Value);
    };

    return <section className="sorting-sanctuary">
        <div className="faq" data-scroll-to="faqContainer">
            <div className="analyze-arena">
                <b className="title-question">
                    Got any questions? We’ve Got Answers.
                </b>
            </div>
            <div className="all-faq">
                <div className="q-a">
                    <button className="button-faq" onClick={() => toggleVisibility({
                        Setter: setIsVisible1, Value: isVisible1
                    })}>
                        <div className="image">
                            <img
                                className="arrow-up-icon"
                                loading="lazy"
                                alt=""
                                src="/icons/arrowup.svg"
                                style={{transform: isVisible1 ? 'rotate(0deg)' : 'rotate(180deg)'}}
                            />
                            <div className="question">What is Face Recognition?</div>
                        </div>
                    </button>
                    {isVisible1 && <div id="text1" className="answer-hidden">
                        <div className="answer-visible">
                            Face Recognition is a biometric identification technology that
                            recognizes and identifies people's faces in images or videos.
                            Using computer vision and deep learning algorithms, face
                            recognition systems can analyze unique facial features such as
                            facial shape, eye shape, eye location, nose and mouth to create
                            a unique biometric template.
                        </div>
                    </div>}
                </div>
                <div className="q-a">
                    <button className="button-faq" onClick={() => toggleVisibility({
                        Setter: setIsVisible2, Value: isVisible2
                    })}>
                        <div className="image">
                            <img
                                className="arrow-up-icon"
                                alt=""
                                src="/icons/arrowup.svg"
                                style={{transform: isVisible2 ? 'rotate(0deg)' : 'rotate(180deg)'}}
                            />
                            <div className="question">
                                How many devices can I use at the same time in IdentityX?
                            </div>
                        </div>
                    </button>
                    {isVisible2 && <div id="text2" className="answer-hidden">
                        <div className="answer-visible">
                            <p className="que-2">
                                With a Premium subscription to IdentityX, you can use up to 5
                                devices at the same time.
                            </p>
                            <p className="que-2">&nbsp;</p>
                            <p className="que-2">
                                Users with a trial subscription will only have access to one
                                device.</p>
                        </div>
                    </div>}
                </div>
                <div className="q-a">
                    <button className="button-faq" onClick={() => toggleVisibility({
                        Setter: setIsVisible3, Value: isVisible3
                    })}>
                            <div className="image">
                                <img
                                    className="arrow-up-icon"
                                    alt=""
                                    src="/icons/arrowup.svg"
                                    style={{transform: isVisible3 ? 'rotate(0deg)' : 'rotate(180deg)'}}
                                />
                                <div className="pattern-matcher">
                                    <div className="question">Can I use IdentityX for free?</div>
                                </div>
                        </div>
                    </button>
                    {isVisible3 && <div id="text3" className="answer-hidden">
                        <div className="answer-visible">
                                Yes! IdentityX offers a 1-week free trial period. With a trial
                                subscription, users get the same level of security and
                                functionality as with a paid subscription.
                            </div>
                    </div>}
                </div>
                <div className="q-a">
                    <button className="button-faq" onClick={() => toggleVisibility({
                        Setter: setIsVisible4, Value: isVisible4
                    })}>
                        <div className="image">
                            <img
                                className="arrow-up-icon"
                                alt=""
                                src="/icons/arrowup.svg"
                                style={{transform: isVisible4 ? 'rotate(0deg)' : 'rotate(180deg)'}}
                            />
                                <div className="question">
                                    Does IdentityX have a money-back guarantee?
                                </div>
                        </div>
                    </button>
                    {isVisible4 && <div id="text4" className="answer-hidden">
                        <div className="answer-visible">
                                Yes. IdentityX has a&nbsp;
                                <span className="guarantee-money">
                  14-day money-back guarantee
                </span>
                                &nbsp;no questions asked.
                            </div>
                    </div>}
                </div>
            </div>
        </div>
    </section>;
};

export default Faq;
