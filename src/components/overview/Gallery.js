import React, {useState, useEffect} from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';
import imageZoom from './imageZoom.js';
let Gallery = () => {
  // local state controlled by hooks to hide default view and expand overview-body-image

  const [expand, setExpand] = useState(false);
  useEffect(() => {

  })
  console.log(expand)
  if (expand) {
    console.log('success')

    //set width to 100% and heigh to auto and the image zoom works perfectly
    document.getElementById(`overview-body-image`).style.width = '100%';
    document.getElementById(`overview-zoom-image`).style.height = 'auto';
    imageZoom('overview-zoom-image', 2.5)
  }

  return (
    <div  id='overview-body' >
      <div  onClick={() => setExpand(!expand)} id='overview-body-image'>
      <div id='img-magnifier-glass'></div>
        {expand ? <img className='expanded-image' id='overview-zoom-image' src={styles.results[0].photos[2].url} /> : <img   id='overview-zoom-image' src={styles.results[0].photos[2].url} />}
        <div id="myresult" className="img-zoom-result"></div>
        <div className="fas fa-expand"></div>
        <div className='current-style-gallery'>
          {/* create a vertical carousel here */}
        </div>
      </div>

      <div className='overview-body-interaction' >
  <div className='product-info'>
    <div className='current-stars'>
    <span className="fa fa-star checked" />
    <span className="fa fa-star checked" />
    <span className="fa fa-star checked" />
    <span className="fa fa-star" />
    <span className="fa fa-star" /> read all reviews</div>
    <p>{product.category}</p>
    <h2>{product.name}</h2>
    <p>{product.default_price}</p>
    <p><strong>{styles.results[0].name} {`>`}</strong> Selected Style</p>
  </div>
  <div className='product-styles'>
  {styles.results.map((photo, i) => (
  <div key={i} className='individual-styles'><img alt={product.name + photo.name}  src= {photo.photos[0].thumbnail_url}></img></div>
  ))}
  </div>
    </div>
    </div>

  )
}



export default Gallery;