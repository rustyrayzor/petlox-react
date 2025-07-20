import React from 'react'
import { Link } from 'react-router-dom'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="widget-title">
                                    <h2>Best Pet Care Agency For
                                        Your Favorite Pets</h2>
                                </div>
                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <ul>
                                    <li>petlox@gmail.com</li>
                                    <li>+(208) 555-0112</li>
                                    <li>4517 Washington Ave. <br /> Manchter, Kentucky 495</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Link</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/pricing">Pricing Plan</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container-fluid">
                    <div className="row g-0">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> Copyright &copy; 2025 Petlox. All
                                Rights Reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <ul className="right">
                                <li><Link onClick={ClickHandler} to="/privace"><span className="rolling-text">Privace & Policy</span> </Link></li>
                                <li><Link onClick={ClickHandler} to="/terms"><span className="rolling-text">Terms</span></Link></li>
                                <li><Link onClick={ClickHandler} to="/about"><span className="rolling-text">About us</span></Link></li>
                                <li><Link onClick={ClickHandler} to="/faq"><span className="rolling-text">FAQ</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;







