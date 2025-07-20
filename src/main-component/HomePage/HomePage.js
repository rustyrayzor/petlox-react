import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import About from '../../components/about/about';
import FunFact from '../../components/FunFact/FunFact';
import PricingSection from '../../components/PricingSection/PricingSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <Hero hclass={'hero-section'} />
            <ServiceSection hclass={"service-section section-padding"} SectionShowTopimg={true} />
            <About hclass={'about-section section-padding'} />
            <FunFact hclass={'funfact-section'} />
            <PricingSection pClass={"pricing-section section-padding"} />
            <Testimonial tClass={'testimonial-section section-padding'} />
            <CtaSection hclass={'cta-section'} />
            <BlogSection tClass={'blog-section section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;