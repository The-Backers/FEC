import React from 'react';
import Stars from '../shared/Stars.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import logInteraction from '../shared/logInteraction.js';

const ProductCard = ({product, index, currentProduct, fetchProduct, removeOutfit, outfits}) => {
  const handleClick = (id) => {
    fetchProduct(id);
    logInteraction(`change-product: ${id}`, 'related-items');
  }

  const handleRemove = (e) => {
    removeOutfit(e.target.name);
    logInteraction(`remove-outfit: ${e.target.name}`, 'related-items');
  }

  return (
    <div className="product-card" key={index} role="cell">
      <div className="product-image-container" role="img">
        <object className="product-image" data={product.stylePhoto} type="image/jpg" alt={product.name} width="auto" height="220vh" onClick={() => handleClick(product.id)} >{product.name}</object>
        {!outfits &&
          <span role="button" aria-label="Compare Product" className="compare-product-button">
            <i className="far fa-star"></i>
            <ComparisonModal product={product} currentProduct={currentProduct}/>
          </span>
        }
        {outfits &&
          <span className="outfits-x" name={product.id} onClick={handleRemove}>X</span>
        }
      </div>
      <span className="product-category" onClick={() => handleClick(product.id)}>{product.category}</span>
      <h4 className="product-name" onClick={() => handleClick(product.id)}>{product.name}</h4>
      <span className="product-price" onClick={() => handleClick(product.id)}>${product.default_price}</span>
      {product.total &&
        <span className="product-rating" onClick={() => handleClick(product.id)}>
          <Stars total={product.total} onClick={() => handleClick(product.id)}/>
        </span>
      }
      {!product.total &&
        <span onClick={() => handleClick(product.id)} className="product-rating-empty">&nbsp;</span>
      }
    </div>
  )
}

export default ProductCard;
