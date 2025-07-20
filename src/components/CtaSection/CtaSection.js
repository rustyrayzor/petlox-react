import { useState } from "react";

import Hs1 from '../../images/cta.png'
import Hs2 from '../../images/paws-10.png'
import Hs3 from '../../images/paws-11.png'



const CtaSection = (props) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = () => {
        if (!email.includes("@")) {
            setMessage("Please enter a valid email address.");
            return;
        }
        setMessage("Thank you for subscribing!");
        setEmail("");
    };


    return (
         <section  className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <h2>Subscribe Newsletter & Get
                            Pet Care News</h2>
                        <div className="subscription-box">
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleSubscribe}>Subscribe Now</button>
                            {message && <p>{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={Hs1} alt="" />
            </div>
            <div className="shape">
                <img src={Hs2} alt="" />
            </div>
            <div className="shape-2">
                <img src={Hs3} alt="" />
            </div>
        </section>
    );
};

export default CtaSection;