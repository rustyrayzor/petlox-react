import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Footer from '../../components/footer/Footer';
import logo from '../../images/logo.svg';

const BlogDetails = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s2'} />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog Single'} />
            <BlogSingle />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
