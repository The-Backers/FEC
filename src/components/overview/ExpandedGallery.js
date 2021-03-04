import React, {useState, useEffect} from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';
import imageZoom from './imageZoom.js';
import store from '../../store/store.js'

let ExpandedGallery = ({collapseGallery}) => {

  useEffect(() => {
  })
  return (
    <div  id='overview-body-expanded' >
      <div  id='overview-body-image-expanded'>
      <div id='img-magnifier-glass'></div>
        <img  onClick={() => imageZoom('overview-zoom-image-expanded', 2.5)} id='overview-zoom-image-expanded' src={styles.results[0].photos[2].url} />
        <div id="myresult" className="img-zoom-result"></div>
        <a onClick={() => collapseGallery(false)} ><i  className="fas fa-expand button-expander"></i></a>
        {/*fa-expand will trigger switch between default and expanded*/ }
        <div className='current-style-gallery'>
        {/* create a vertical carousel here */}
        </div>
      </div>
    </div>
  )
}

export default ExpandedGallery;