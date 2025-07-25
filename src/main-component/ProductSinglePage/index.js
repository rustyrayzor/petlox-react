import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';
import Footer from '../../components/footer/Footer';
import logo from '../../images/logo.svg';


const ProductSinglePage =(props) => {
    const { slug } = useParams()

    
    const productsArray = api();
    const Allproduct = productsArray

    
    const {addToCart} = props;
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        setProduct(Allproduct.filter(product => product.slug === String(slug)))
    }, [Allproduct, slug]);
    
    const item = product[0];

    return(
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s2'} Logo={logo} />
            <PageTitle pageTitle={'Product Single'} pagesub={'Product Single'}/> 
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {item ? <Product
                        item={item}
                        addToCart={addToCart}
                    /> : null}
                    <ProductTabs/>
                </div>
            </section>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
