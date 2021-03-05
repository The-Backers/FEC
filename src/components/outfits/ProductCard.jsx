import React from 'react';
import Stars from '../shared/Stars.jsx';
import ModalTest from './ModalTest.jsx';

const ProductCard = ({product, index, fetchProduct}) => {

  const handleClick = (id) => {
    fetchProduct(id);
  }

  const openComparison = () => {
    console.log('testing comparison!');
  }

  return (
    <div className="product-card" key={index}>
      <div className="product-image-container">
        <img className="product-image" src={product.stylePhoto} alt={product.name} width="auto" height="220" onClick={() => handleClick(product.id)}></img>
        <span onClick={openComparison.bind(this)}>
          <i className="far fa-star"></i>
          <ModalTest />
        </span>
      </div>
      <span className="product-category" onClick={() => handleClick(product.id)}>{product.category}</span>
      <h4 className="product-name" onClick={() => handleClick(product.id)}>{product.name}</h4>
      <span className="product-price" onClick={() => handleClick(product.id)}>${product.default_price}</span>
      {product.total &&
        <Stars className="product-rating" total={product.total} onClick={() => handleClick(product.id)}/>
      }
      {!product.total &&
        <div onClick={() => handleClick(product.id)}>&nbsp;</div>
      }
    </div>
  )
}

export default ProductCard;
