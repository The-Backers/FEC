import React, { useState, useEffect } from 'react';
import CarouselContainer from '../../containers/outfits/CarouselContainer';

const RelatedItems = ({fetchRelated, relatedProducts}) => {
  return (
    <div className="related-products">
      <h3 className="related-products-title">Related Products</h3>
      <CarouselContainer className="carousel" />
      <h3 className="outfits-title">Your Outfit</h3>
      <CarouselContainer className="carousel" />
    </div>
  )
};

export default RelatedItems;