import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import styles from '../../../sample-data/products/get-productId-styles.json';


const Carousel = ({relatedProducts}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 60;
  //children will be an array of images
  // const children = relatedProducts.map((product, index) => {
  //   return (
  //     <ProductCard key={index} product={product} index={index} style={{ height: 220, background: '#EEE' }}/>
  //   );
  // })
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        // className="carousel"
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={0}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {children}
      </ItemsCarousel>
    </div>
  );
}

export default Carousel;