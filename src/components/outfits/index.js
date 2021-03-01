import React from 'react';
import Carousel from './Carousel.jsx';
import ProductCard from './ProductCard.jsx';
import Comparison from './Comparison.jsx';

const Products = () => (
  <div className="parent-products">
    <Carousel className="products-related"/>
    <ProductCard className="products-outfits"/>
    <Comparison className="comparison-card" />
  </div>
);

export default Products;