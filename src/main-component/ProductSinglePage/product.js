import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Product = ({ item, addToCart }) => {

  return (

    <div className="row">
      <div className="col col-lg-5 col-12">
        <div className="shop-single-slider">
          <div className="slider-nav">
            <div>
              <Zoom>
                <img src={item.proImg ? item.proImg : ''} alt="products" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-7 col-12">
        <div className="product-details">
          <h2>{item.title}</h2>
          <div className="product-rt">
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <span>(25 customer reviews)</span>
          </div>
          <div className="price">
            <span className="current">${item.price}</span>
            <span className="old">${item.delPrice}</span>
          </div>
          <p>There are many or randomised words which don't look even slightly believable.</p>
          <ul>
            <li>Going through the cites of the word in class Nameical.</li>
            <li>There are many variations of passages.</li>
          </ul>
          <div className="product-option">
            <div className="product-row">
              <button className="theme-btn"
                onClick={() => addToCart(item)}>Add
                to cart</button>
              <div>
              </div>
            </div>
          </div>
          <div className="tg-btm">
            <p><span>Categories:</span>Pet Protect</p>
            <p><span>Tags:</span>Squeaky, Dog Food</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
