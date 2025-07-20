import React from "react";
import { Link } from "react-router-dom";
import blogs from '../../api/blogs'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {

    return (
        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <h3>Our Blog</h3>
                            <h2>Our Latest News Update</h2>
                        </div>
                    </div>
                </div>
                <div className="row blog-wrap">
                    {blogs.slice(0.3).map((bloge, bkye) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={bkye}>
                            <div className="blog-card">
                                <div className="image">
                                    <img src={bloge.screens} alt="" />
                                </div>
                                <div className="content">
                                    <ul className="date">
                                        <li>By Admin </li>
                                        <li>{bloge.create_at}</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h2>
                                    <p>{bloge.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;




