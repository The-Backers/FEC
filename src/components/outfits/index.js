import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import ProductCard from './ProductCard.jsx';
import Comparison from './Comparison.jsx';

const RelatedItems = ({fetchRelated, relatedProducts}) => {

  useEffect(() => {
    fetchRelated();
  }, []);

  return (
    <div className="parent-products">
      <Carousel className="products-related" relatedProducts={relatedProducts}/>
      <Comparison className="comparison-card" />
    </div>
  )
};

export default RelatedItems;