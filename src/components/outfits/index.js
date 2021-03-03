import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import CarouselContainer from '../../containers/outfits/CarouselContainer';
import Comparison from './Comparison.jsx';

const RelatedItems = ({fetchRelated, relatedProducts}) => {

  useEffect(() => {
    fetchRelated();
  }, []);

  return (
    <div className="related-products">
      <h3 className="related-products-title">Related Products</h3>
      <CarouselContainer className="carousel" />
      {/* <Comparison className="comparison-card" /> */}
      <h3 className="outfits-title">Your Outfit</h3>
      <CarouselContainer className="carousel" />
    </div>
  )
};

export default RelatedItems;