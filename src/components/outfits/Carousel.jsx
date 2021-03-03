import React from 'react';
import ProductCard from './ProductCard.jsx';

const Carousel = ({relatedProducts}) => {
  if (relatedProducts.length > 0) {
    return (
      <div className="carousel">
        {relatedProducts.map((product, index) => {
          // console.log('this is the product: ', product);
          // console.log('this is the style Photo: ', product.stylePhoto);
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
