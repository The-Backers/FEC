/* eslint-disable react/no-unknown-property */
import React from 'react';
import Stars from '../shared/Stars.jsx';

const ProductCard = ({product, index}) => {
  return (
    <div className="product-card" key={index}>
      <div className="product-image-container">
        <img className="product-image" src={product.stylePhoto} alt={product.name} width="auto" height="220"></img>
        <i class="far fa-star"></i>
      </div>
      <span className="product-category">{product.category}</span>
      <h4 className="product-name">{product.name}</h4>
      <span className="product-price">${product.default_price}</span>
      {product.total &&
        <Stars className="product-rating" total={product.total}/>
      }
      {!product.total &&
        <div>&nbsp;</div>
      }
    </div>
  )
}

export default ProductCard;
