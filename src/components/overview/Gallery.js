import React from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';

let Gallery = () => {
  // local state controlled by hooks to hide default view and expand overview-body-image
  return (
    <div  className='overview-body'>
      <div className='overview-body-image'>
        <img src={styles.results[0].photos[2].url}></img>
        <div className="fas fa-expand"></div>
        <div className='current-style-gallery'>
          {/* create a vertical carousel here */}
        </div>
      </div>

      <div className='overview-body-interaction default'>
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
        <div className='product-buttons'></div>
      </div>
    </div>

  )
}



export default Gallery;