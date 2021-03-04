import React, {useState} from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';
import Stars from '../shared/stars.jsx';
import store from '../../store/store.js'

let DefaultGallery = ({expandGallery}) => {
  return (
    <div  id='overview-body' >
      <div  id='overview-body-image'>
        <img   id='overview-zoom-image' src={styles.results[0].photos[2].url} />
        <div id="myresult" className="img-zoom-result"></div>
        <a onClick={() => expandGallery(true)}><i className="fas fa-expand button-expander"></i></a>
        {/*fa-expand will trigger switch between default and expanded*/ }
        <div className='current-style-gallery'>
        {/* create a vertical carousel here */}
        </div>
      </div>
      <div className='overview-body-interaction' >
        <div className='product-info'>
          <div className='current-stars'>
          {/*change the total to be dynamic based on current product */}
          <Stars total = '3.6' /><p>read all reviews</p>
          </div>
          <p>{product.category}</p>
          <h2>{product.name}</h2>
          <p>{product.default_price}</p>
          <p><strong>{styles.results[0].name} {`>`}</strong> Selected Style</p>
        </div>
        <div className='product-styles'>
          {styles.results.map((photo, i) => (
          <div key={i}>
            <img className='individual-styles' alt={product.name + photo.name}  src= {photo.photos[0].thumbnail_url} />
          </div>
          ))}
        </div>
      <div className='product-buttons'></div>
      </div>
    </div>

  )
}

export default DefaultGallery;