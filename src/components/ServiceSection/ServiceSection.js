import React from "react";
import { Link } from 'react-router-dom'
import Services from "../../api/Services";


import Topimage from '../../images/service/top-img-1.png'
import Topimage2 from '../../images/service/top-img-2.png'
import Topimage3 from '../../images/service/top-img-3.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = (props) => {


    const { SectionShowTopimg = false, } = props


    return (
        <section className={"" + props.hclass}>
            <div className="wraper">
                {
                    Services.slice(0, 4).map((service, index) => (
                        <div className="col" key={index}>
                            <div className="item">
                                <div className="icon">
                                    <img src={service.icon} alt="" />
                                </div>
                                <div className="content">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {SectionShowTopimg && (
                    <div>
                        <div className="top-img-1">
                            <img src={Topimage} alt="" />
                        </div>
                        <div className="top-img-2">
                            <img src={Topimage2} alt="" />
                        </div>
                        <div className="top-img-3">
                            <img src={Topimage3} alt="" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ServiceSection;

