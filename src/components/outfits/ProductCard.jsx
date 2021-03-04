import React from 'react';
import Stars from '../shared/Stars.jsx';

const ProductCard = ({product, index}) => {
  console.log(product)
  return (
    <div className="product-card" key={index}>
      <img className="product-image" src={product.stylePhoto} alt={product.name} width="auto" height="220"></img>
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
