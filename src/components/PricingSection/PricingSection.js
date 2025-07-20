import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const PricingSection = (props) => {
    const [plan] = useState([
        {
            id: '01',
            name: 'Friendly Pack',
            price: 100,
            features: ['15 Days Services', 'Pet Showar', 'Intensive Checkup', 'Grooming', 'Hair & Nail Cut',]
        },
        {
            id: '02',
            name: 'Exclusive Pack',
            price: 185,
            features: ['15 Days Services', 'Pet Showar', 'Intensive Checkup', 'Grooming', 'Hair & Nail Cut', 'Control Hair Falling', 'Fresh Snack', 'Pet Park & Games']
        },
        {
            id: '03',
            name: 'Family Pack',
            price: 225,
            features: ['15 Days Services', 'Pet Showar', 'Intensive Checkup', 'Grooming', 'Hair & Nail Cut',]
        },


    ])

    const {sectiontitleshow = true} = props;

    return (
        <section className={"" + props.pClass}>
            <div className="container">
                {sectiontitleshow &&(
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <h3>Pricing</h3>
                            <h2>Special Packages For Your Pet</h2>
                        </div>
                    </div>
                </div>
                )}
                <div className="pricing-wrap row g-0 align-items-center">
                    {plan.map((palns, pritem) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={pritem}>
                            <div className="pricing-card">
                                <h2>{palns.name}</h2>
                                <div className="price"> <span className="simbol">$</span>{palns.price} <span>/ Visit</span></div>
                                <ul className="features">
                                    {palns.features.map((feature, featureitem) => (
                                        <li key={featureitem}>{feature}</li>
                                    ))
                                    }
                                </ul>
                                <Link onClick={ClickHandler} to='/pricing' className="theme-btn-s2" >Choose Plan</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default PricingSection;





