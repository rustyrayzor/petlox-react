import React from 'react';
import About1 from '../../images/about/about-8.jpg';
import About2 from '../../images/about/about-9.jpg';
import About3 from '../../images/about/about-10.jpg';
import Shape from '../../images/about/shape13.png';
import Shape2 from '../../images/about/shape10.svg';
import Call from '../../images/about/call.svg';
import aut1 from '../../images/about/aut-1.jpg';
import aut2 from '../../images/about/aut-2.jpg';
import aut3 from '../../images/about/aut-3.jpg';
import dogsid from '../../images/about/dog-sid-img.png';

const AboutS2 = (props) => {



    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-image">
                            <div className="image1">
                                <img src={About1} alt="" />
                            </div>
                            <div className="image2">
                                <img src={About2} alt="" />
                                    <div className="shape">
                                    <img src={Shape} alt="" />
                                    </div>
                            </div>
                            <div className="image3">
                                <img src={About3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="right-content">
                            <h3>Our Passion Is <span> Providing </span>Superior
                                Pet Care.</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto? Praesentium,
                                quidem qui atque natus et maxime ex nulla, ducimus, porro adipisci ratione expedita a
                                delectus laudantium amet odio.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto? Praesentium,
                                quidem qui atque natus et maxime ex nulla, ducimus, porro adipisci ratione expedita a
                                delectus laudantium amet odio.</p>


                            <div className="author-wrap">
                                <ul className="author-img">
                                    <li><img src={aut1} alt="" /></li>
                                    <li className="active"><img src={aut2} alt="" /></li>
                                    <li><img src={aut3} alt="" /></li>
                                </ul>
                                <div className="author-text">5m+ Customer <div className="shape"><img
                                    src={Shape2} alt="" /></div>
                                </div>
                                <div className="contact">
                                    <div className="icon">
                                        <img src={Call} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>Phone:</span>
                                        <h4>+236 (456) 896 22</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dog-sidimg">
                <img src={dogsid} alt="" />
            </div>
        </section>
    )
}

export default AboutS2;