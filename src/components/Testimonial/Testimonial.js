import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../images/client-1.jpg'
import Img2 from '../../images/client-2.jpg'
import Img3 from '../../images/client-1.jpg'
import Image from '../../images/testimonial.png'
import ImagePaws from '../../images/paws-7.png'
import ImagePaws2 from '../../images/paws-6.png'
import icon3 from '../../images/testimonial-icon.svg'


const testimonials = [
    {
        id: '01',
        Des: "Kind friendly and professional, and best of all Anna absolutely loved them. I would recommend Apet to anyone looking for perfect Pet care agency.",
        title: 'Ernest Crabtree',
        sub: "Web Developer",
        Image:Img1,
    },
    {
        id: '02',
        Des: "Kind friendly and professional, and best of all Anna absolutely loved them. I would recommend Apet to anyone looking for perfect Pet care agency.",
        title: 'Mike Abraham',
        sub: "Web Developer",
        Image: Img2,
    },
    {
        id: '03',
        Des: "Kind friendly and professional, and best of all Anna absolutely loved them. I would recommend Apet to anyone looking for perfect Pet care agency.",
        title: 'Hanial nilton jhon',
        sub: "Managin dirctor",
        Image: Img3,
    },


]




const Testimonial = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
       
    };


    return (

        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <h3>Testimonials</h3>
                            <h2>What Pet lover Says About Us </h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="testimonial-image">
                            <img src={Image} alt="" />
                            <div className="shape">
                                <svg viewBox="0 0 932 866" fill="none" >
                                    <path
                                        d="M809.592 217.287C836.009 315.879 817.135 440.087 766.796 546.355C716.445 652.649 634.907 740.4 536.578 766.747C339.293 819.609 136.508 702.532 83.6458 505.246C57.2312 406.666 77.0482 320.935 128.016 253.209C179.036 185.413 261.413 135.488 360.331 108.983C459.684 82.3613 559.022 60.3667 640.086 69.6483C680.555 74.2818 716.32 86.6978 745.237 110.108C774.137 133.505 796.397 168.045 809.592 217.287Z"
                                        stroke="#FABE3D" strokeWidth="5"
                                    />
                                    <path
                                        d="M772.667 241.253C819.838 417.297 705.161 683.804 529.117 730.975C353.074 778.146 172.122 673.674 124.952 497.63C77.7809 321.586 195.712 190.863 371.756 143.692C547.799 96.5215 725.496 65.2093 772.667 241.253Z"
                                        fill="#FFF7E5"
                                    />
                                    <mask id="mask0" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="114" y="106" width="670" height="637">
                                        <path
                                            d="M772.667 241.253C819.838 417.297 705.161 683.804 529.117 730.975C353.074 778.146 172.122 673.674 124.952 497.63C77.7809 321.586 195.712 190.863 371.756 143.692C547.799 96.5215 725.496 65.2093 772.667 241.253Z"
                                            fill="#FFF7E5"
                                        />
                                    </mask>
                                    <g mask="url(#mask0)"></g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="testimonial-slider">
                            <Slider {...settings}>
                                {testimonials.map((testitem, titem) => (
                                    <div  key={titem}>
                                        <div className="icon">
                                            <img src={icon3} alt="" />
                                        </div>
                                        <h3>{testitem.Des}</h3>
                                        <div className="client-wrap">
                                            <div className="image">
                                                <img src={testitem.Image} alt="" />
                                            </div>
                                            <div className="text">
                                                <h4>{testitem.title}</h4>
                                                <span>{testitem.sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={ImagePaws} alt="" />
            </div>
            <div className="shape-2">
                <img src={ImagePaws2} alt="" />
            </div>
        </section>
    );
}

export default Testimonial;







