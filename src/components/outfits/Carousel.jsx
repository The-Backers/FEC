import React from 'react';

const Carousel = ({relatedProducts}) => {
  if (relatedProducts.length > 0) {
    return (
      <div>
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
    return null
  }
}

export default Carousel;
