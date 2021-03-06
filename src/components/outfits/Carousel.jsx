import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProductCard from './ProductCard.jsx';

const Carousel = ({relatedProducts, currentProduct, fetchProduct, addToOutfit, removeOutfit, outfits, outfitProducts}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  let products = outfits ? outfitProducts : relatedProducts;
  const children = products ?
    products.map((product, index) => {
      return (
        <ProductCard key={index} product={product} index={index} fetchProduct={fetchProduct} currentProduct={currentProduct} removeOutfit={removeOutfit} outfits={outfits} style={{ height: 220, background: '#EEE' }}/>
      );
    }) : null;

  const addOutfit = (e) => {
    addToOutfit(e.target.name);
  }

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {outfits &&
          <div className="product-card" id="outfits-card" style={{height: 290}} onClick={addOutfit}>
            <h3 id="outfits-add-text" name={currentProduct.id}>Add to Outfit</h3>
            <button id="outfits-add" name={currentProduct.id}>+</button>
          </div>
        }
        {children}
      </ItemsCarousel>
    </div>
  );
}

export default Carousel;
