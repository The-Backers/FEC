import React from 'react';
import Stars from '../shared/Stars.jsx';

const ProductCard = ({product, index}) => {
  console.log('this is the average rating: ', product.total);
  return (
    <div className="product-card" key={index}>
      <img className="product-image" src={product.stylePhoto} alt={product.name} width="200" height="220"></img>
      <span className="product-category">{product.category}</span>
      <h4 className="product-name">{product.name}</h4>
      <span className="product-price">${product.default_price}</span>
      {product.total &&
        <Stars className="product-rating" total={product.total}/>
      }
    </div>
  )
}

export default ProductCard;
