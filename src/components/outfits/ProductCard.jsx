import React from 'react';

const ProductCard = ({product, index}) => {
  console.log(product)
  return (
    <div className="product-card" key={index}>
      <img className="product-image" src={product.stylePhoto} alt={product.name} width="200" height="220"></img>
      <span className="product-category">{product.category}</span>
      <h4 className="product-name">{product.name}</h4>
      <span className="product-price">${product.default_price}</span>
      <span className="product-rating">* * * * *</span>
    </div>
  )
}

export default ProductCard;