import React, { useState, useEffect } from 'react';
import CarouselContainer from '../../containers/outfits/CarouselContainer';

const RelatedItems = ({fetchRelated, relatedProducts}) => {
  return (
    <section className="related-products" role="grid">
      <h3 className="related-products-title">Related Products</h3>
      <CarouselContainer className="carousel" outfits={false}/>
      <h3 className="outfits-title">Your Outfit</h3>
      <CarouselContainer className="carousel outfits" outfits={true}/>
    </section>
  )
};

export default RelatedItems;