import React, {useState} from 'react';
import ItemsCarousel from 'react-items-carousel';
import imageZoom from './imageZoom.js';
import logInteraction from '../shared/logInteraction.js';

const Carousel = ({product, index, changeIndex, styles}) => {
  const chevronWidth = 30;

  var imageStyle = {
    height: 'auto',
  objectFit: 'cover',
  maxHeight: '75vh',
  }

  const children = styles?.photos?.map((photo, index) => {
    return (
      <img name={product.name}  width={500} height={600} onClick={(e) => logInteraction(`main-image: ${e.target.name}-${imageStyle}`, 'product-overview')} alt={product.name} style={imageStyle} key={index} src={photo?.url} />
    );
  })

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        className="gallery-carousel"
        requestToChangeActive={changeIndex}
        activeItemIndex={index}
        numberOfCards={1}
        gutter={0}
        leftChevron={<button className="chevron fas fa-chevron-left"></button>}
        rightChevron={<button className="chevron fas fa-chevron-right"></button>}
        outsideChevron
        chevronWidth={chevronWidth}

      >
        {children}
      </ItemsCarousel>
    </div>
  );
}

export default Carousel;