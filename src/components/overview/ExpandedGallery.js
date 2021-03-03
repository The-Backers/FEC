import React, {useState} from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';


let ExpandedGallery = () => {
  const [expand, setExpand] = useState(true);
  return (
    <div  id='overview-body-expanded' >
       <div  id='overview-body-image-expanded'>
  <img   id='overview-zoom-image-expanded' src={styles.results[0].photos[2].url} />
  <div id="myresult" className="img-zoom-result"></div>
  <div className="fas fa-expand"></div>
  {/*fa-expand will trigger switch between default and expanded*/ }
  <div className='current-style-gallery'>
    {/* create a vertical carousel here */}
  </div>
  </div>
    </div>
  )
}

export default ExpandedGallery;