import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import PageTitle from '../../components/pagetitle/PageTitle';
import Accordion from './Accordion';
import ContactForm from './ContactForm';

const faqPages = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Faq'} pagesub={'Faq'} />
            <section className="wpo-faq-section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title">
                                <h2>Frequently Asked Question</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-2">
                            <div className="wpo-faq-section">
                                <div className="row">
                                    <div className="col-lg-12 col-12">
                                        <div className="wpo-benefits-item">
                                            <Accordion />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="question-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Do You Have Any Question?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="question-touch">
                                <h2>Get In Touch</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default faqPages;