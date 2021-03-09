import React, {useState} from 'react';
import ItemsCarousel from 'react-items-carousel';
import imageZoom from './imageZoom.js';

const Carousel = ({index, changeIndex, styles}) => {
  const chevronWidth = 30;

  var imageStyle = {
    height: 'auto',
  objectFit: 'cover',
  minWidth: '500px',
  maxWidth: '100%',
  maxHeight: '75vh',
  }
  //children will be an array of images

  const children = styles?.photos?.map((photo, index) => {
    return (
      <img  style={imageStyle} key={index} src={photo?.url} />
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