import React from 'react';
import Carousel from './Carousel.jsx';
import ProductCard from './ProductCard.jsx';
import Comparison from './Comparison.jsx';

const RelatedItems = ({getProducts, relatedProducts}) => {
  console.log('this is relatedProducts: ', relatedProducts);
  return (
    <div className="parent-products">
      <Carousel className="products-related"/>
      <ProductCard className="products-outfits"/>
      <Comparison className="comparison-card" />
    </div>
  )
};

export default RelatedItems;