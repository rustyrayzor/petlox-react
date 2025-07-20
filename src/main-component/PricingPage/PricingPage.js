import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import PricingSection from '../../components/PricingSection/PricingSection';


const PricingPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Pricing Plan'} pagesub={'Pricing'} />
            <PricingSection pClass={"pricing-section section-padding"} sectiontitleshow={false} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PricingPage;










