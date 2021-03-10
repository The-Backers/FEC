import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProductCard from './ProductCard.jsx';
import logInteraction from '../shared/logInteraction.js';

const Carousel = ({relatedProducts, currentProduct, fetchProduct, addToOutfit, removeOutfit, outfits, outfitProducts, outfitsCarouselIndex, relatedCarouselIndex, changeOutfitsIndex, changeRelatedIndex}) => {
  const chevronWidth = 10;
  const products = outfits ? outfitProducts : relatedProducts;
  const index = outfits ? outfitsCarouselIndex : relatedCarouselIndex;
  const changeIndex = outfits ? changeOutfitsIndex : changeRelatedIndex;
  const children = products ?
    products.map((product, index) => {
      return (
        <ProductCard key={index} product={product} index={index} fetchProduct={fetchProduct} currentProduct={currentProduct} removeOutfit={removeOutfit} outfits={outfits}/>
      );
    }) : null;

  const addOutfit = (e) => {
    logInteraction(`add-outfit: ${e.target.name}`, 'related-items');
    addToOutfit(e.target.name);
  }

  return (
    <section style={{ padding: `0 ${chevronWidth}px` }} role="row">
      <ItemsCarousel
        className="carousel"
        requestToChangeActive={changeIndex}
        activeItemIndex={index}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button className="carousel-chevron">{'<'}</button>}
        rightChevron={<button className="carousel-chevron">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {outfits &&
          <div className="product-card" id="outfits-card" onClick={addOutfit} role="cell">
            <h3 id="outfits-add-text" name={currentProduct.id}>Add to Outfit</h3>
            <button id="outfits-add" name={currentProduct.id}>+</button>
          </div>
        }
        {children}
      </ItemsCarousel>
    </section>
  );
}

export default Carousel;
