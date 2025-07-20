import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Hero2 from '../../components/hero2/Hero2';
import About2 from '../../components/about2/about2';
import GetquateSection from '../../components/GetquateSection/GetquateSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'

const HomePage2 = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <Hero2 hclass={'wpo-hero-slider'} />
            <About2 hclass={'about-section-s3 section-padding'} />
            <GetquateSection />
            <ServiceSection hclass={'service-section-s2 section-padding pb-0'} />
            <Testimonial tClass={'testimonial-section section-padding'} />
            <PartnerSection />
            <BlogSection tClass={'blog-section section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;