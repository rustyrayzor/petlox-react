import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'


import heroshape from '../../images/slider/shape-bg.svg'
import heroshape2 from '../../images/slider/shape-1.svg'
import heroshape3 from '../../images/slider/shape-2.svg'

import hero from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero2 = (props) => {
    return (

        <section className={"" + props.hclass} >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>To Ensure <span>Perfect</span> <span className="text">Service</span>
                                        Of Your dog</h2>
                                </div>
                                <div className="slide-sub-title">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
                                        consequuntur consequatur totam dolor quidem.</p>
                                </div>
                                <div className="slide-btns">
                                    <Link to="/about" onClick={ClickHandler} className="theme-btn-s2">About Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape">
                            <img src={heroshape} alt="" />
                        </div>
                        <div className="shape-1">
                            <img src={heroshape2} alt="" />
                        </div>
                        <div className="shape-3">
                            <img src={heroshape3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>The Best <br/> <span>Care</span> <span className="text">for Best</span>
                                        Friend</h2>
                                </div>
                                <div className="slide-sub-title">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
                                        consequuntur consequatur totam dolor quidem.</p>
                                </div>
                                <div className="slide-btns">
                                    <Link to="/about" onClick={ClickHandler} className="theme-btn-s2">About Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape">
                            <img src={heroshape} alt="" />
                        </div>
                        <div className="shape-1">
                            <img src={heroshape2} alt="" />
                        </div>
                        <div className="shape-3">
                            <img src={heroshape3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>


                ...
            </Swiper>
        </section>
    )
}

export default Hero2;

