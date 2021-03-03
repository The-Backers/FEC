import React from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';

let ProductImage = () => {
  return (
  <div  id='overview-body-image'>
  <img   id='overview-zoom-image' src={styles.results[0].photos[2].url} />
  <div id="myresult" className="img-zoom-result"></div>
  <div className="fas fa-expand"></div>
  <div className='current-style-gallery'>
    {/* create a vertical carousel here */}
  </div>
  </div>)
}

export default ProductImage;
