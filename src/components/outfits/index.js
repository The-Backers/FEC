import React from 'react';
import Carousel from './Carousel.jsx';
import ProductCard from './ProductCard.jsx';
import Comparison from './Comparison.jsx';

const RelatedItems = ({fetchRelated, relatedProducts}) => {
  console.log('this is relatedProducts: ', relatedProducts);
  if (relatedProducts.length > 0) {
    return (
      <div className="parent-products">
        {relatedProducts.map((product, index) => {
          return (
            <div key={index}>
              <h4>{product.name}</h4>
              <div>Image?</div>
              <span>{product.category}</span>
              <span>: ${product.default_price}</span>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="parent-products">
        <button onClick={fetchRelated}>Fetch Related!</button>
        <Carousel className="products-related"/>
        <ProductCard className="products-outfits"/>
        <Comparison className="comparison-card" />
      </div>
    )
  }
};

export default RelatedItems;