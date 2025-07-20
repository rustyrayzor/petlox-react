import React from 'react';
import CountUp from 'react-countup';

// images
import icon1 from '../../images/funfact/1.svg';
import icon2 from '../../images/funfact/2.svg';
import icon3 from '../../images/funfact/3.svg';
import icon4 from '../../images/funfact/4.svg';


import ImageBg from '../../images/funfact/top-image.jpg';



const FunFact = (props) => {

    return (

        <section className="funfact-section">
            <div className="top-image">
                <img src={ImageBg} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={icon1} alt="" />
                            </div>
                            <h2><CountUp end={25} enableScrollSpy /><span className="ico">+</span>
                            </h2>
                            <h3>Award Winning</h3>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={icon2} alt="" />
                            </div>
                            <h2><CountUp end={50} enableScrollSpy /> <span className="ico">k</span>
                            </h2>
                            <h3>Happy Client</h3>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={icon3} alt="" />
                            </div>
                            <h2><CountUp end={30} enableScrollSpy /> <span className="ico">+</span>
                            </h2>
                            <h3>Team Member</h3>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={icon4} alt="" />
                            </div>
                            <h2><CountUp end={90} enableScrollSpy /> <span className="ico">%</span>
                            </h2>
                            <h3>Protection</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default FunFact;




