import React, {useState, useEffect} from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';
import imageZoom from './imageZoom.js';
import ProductInteraction from './ProductInteraction.js';
let Gallery = () => {
  // local state controlled by hooks to hide default view and expand overview-body-image

  const [expand, setExpand] = useState(false);
  console.log(expand)
  return (
    <div  id='overview-body'>
      <div  onClick={() => setExpand(!expand)} id='overview-body-image'>
        {expand ? <img className='expanded-image' id='overview-zoom-image' src={styles.results[0].photos[2].url} /> : <img   id='overview-zoom-image' src={styles.results[0].photos[2].url} />}
        <div id="myresult" className="img-zoom-result"></div>
        <div className="fas fa-expand"></div>
        <div className='current-style-gallery'>
          {/* create a vertical carousel here */}
        </div>
      </div>

      {expand ? <div className='expanded'><ProductInteraction /></div> : <div className='default'><ProductInteraction /></div>}

    </div>

  )
}



export default Gallery;