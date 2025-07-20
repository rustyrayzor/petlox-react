import React from "react";
import Shape from "../../images/gq-shap.svg"
import Shape2 from "../../images/gq-shap-2.svg"


const GetquateSection = (props) => {
 
    return (
        <section className="get-quate-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <div className="section-title">
                                <h2>Helping each other
                                    make <span>world</span> better</h2>
                                <p>Quisque mauris nec ante bibendum, at pretium diam vehicula. Morbi non metus eu libero
                                    interdum tristique ut vel leo</p>
                            </div>
                            <div className="item-wrap">
                                <div className="year">
                                    <h3>25</h3>
                                    <span>year Of
                                        Experience</span>
                                </div>
                                <ul>
                                    <li><i className="ti-check"></i>service electrical layout, design</li>
                                    <li><i className="ti-check"></i>Compliance and Enforcement</li>
                                    <li><i className="ti-check"></i>Becoming a registered provider</li>
                                </ul>
                            </div>
                            <ul className="buttom-item">
                                <li>
                                    <div className="text">
                                        <span>Interesting Facts To Know Before Caring Pet</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <span>Best Medicine For Your Pamper Pet’s Ticks</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12"></div>
                </div>
            </div>
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
            <div className="shape2">
                <img src={Shape2} alt="" />
            </div>
        </section>
    )
}
export default GetquateSection;