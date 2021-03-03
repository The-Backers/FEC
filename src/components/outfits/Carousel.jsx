import React from 'react';
import ProductCard from './ProductCard.jsx';

const Carousel = ({relatedProducts}) => {
  if (relatedProducts.length > 0) {
    return (
      <div className="carousel">
        {relatedProducts.map((product, index) => {
          return (
            <ProductCard key={index} product={product} index={index}/>
          );
        })}
      </div>
    )
  } else {
    return null;
  }
}

export default Carousel;
