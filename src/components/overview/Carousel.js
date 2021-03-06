import React, {useState} from 'react';
import ItemsCarousel from 'react-items-carousel';
import styles from '../../../sample-data/products/get-productId-styles.json';
import imageZoom from './imageZoom.js';

const Carousel = ({styles}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;

  var imageStyle = {
    height: 'auto',
  objectFit: 'cover',
  maxWidth: '100%',
  height: '100%',
  }
  //children will be an array of images

  const children = styles[0].photos.map((photo, index) => {
    return (
      <img style={imageStyle} key={index} src={photo.url} />
    );
  })

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        className="gallery-carousel"
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
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