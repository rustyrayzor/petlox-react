import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../ModalVideo/VideoModal'
import VideoModalS2 from '../ModalVideoS2/VideoModalS2'


import image from '../../images/about.png'
import icon from '../../images/ab-icon.png'
import paws1 from '../..//images/paws-6.png'
import paws2 from '../..//images/paws-7.png'

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="wraper">
                <div className="left">
                    <div className="image">
                        <img src={image} alt="" />
                        <div className="shape">
                            <svg width="793" height="786" viewBox="0 0 793 786" fill="none">
                                <path
                                    d="M84.9007 505.664C-181.681 609.802 245.585 843.801 512.633 772.246C713.751 718.356 833.104 511.631 779.214 310.513C725.325 109.395 552.6 -41.9576 351.482 11.9319C150.364 65.8214 351.482 401.526 84.9007 505.664Z"
                                    fill="#FFEFEB" />
                            </svg>
                        </div>
                    </div>
                    <div className="about-video">
                        <div className="icon">
                            <img src={icon} alt="" />
                        </div>
                        <h2>How To Take Care Of Your Favorite Pet. </h2>
                        <p>Pamper your pet with professional grooming that ensures they look and feel their best.</p>
                        <div className="video-holder">
                            <VideoModalS2/>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <span>About Us</span>
                    <h2>Your Partner in Pawsitive Pet Care.</h2>
                    <p>At Petlox, we believe that pets are more than just animals; they are cherished members of the
                        family. Our mission is to provide exceptional care, comfort, and support for pets and their
                        owners. Whether you have a playful pup, a curious cat, or any other companion, Apet is here to
                        ensure their health, happiness, and well-being.</p>

                    <div className="about-btn">
                        <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">Discover More</Link>
                        <div className="video-wrap">
                            <div className="video-holder">
                                <VideoModal />
                            </div>
                            <span>Watch Videos</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={paws1} alt="" />
            </div>
            <div className="shape-2">
                <img src={paws2} alt="" />
            </div>
        </section>
    )
}

export default About;


