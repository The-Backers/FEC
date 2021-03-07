import React, {useState} from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';
import Stars from '../shared/Stars.jsx';
import store from '../../store/store.js';

let DefaultGallery = ({ styles, product, expandGallery}) => {

  const [currentStyle, setCurrentStyle] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  let scrollToReviews = document.documentElement.clientHeight * 2;

  function handleClick(e) {
    for(var i = 0; i < styles.length; i++) {
      if (Number(e.target.name) === styles[i].style_id) {
        setCurrentStyle(i);
      }
    }
    setCurrentPhoto(0);
  }

  return (
    <div  id='overview-body' >
      <div  id='overview-body-image'>
        <img id='overview-zoom-image' src={styles[currentStyle].photos[currentPhoto].url} />
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
          <div className='current-stars-div'><Stars total = '3.6' /></div> <div className="read-all-scroll" onClick={() => window.scrollTo({top: scrollToReviews, behavior: 'smooth'})}>read all reviews</div>
          </div>
          <p>{product.category}</p>
          <h2>{product.name}</h2>
          {styles[currentStyle].sale_price ?
          <div style={{color: 'red'}}>${styles[currentStyle].sale_price}<p style={{textDecoration: 'line-through', color: 'black'}}>${styles[currentStyle].original_price}</p></div> :
          <p>${styles[currentStyle].original_price}</p>}
          <p><strong>{styles[currentStyle].name} {`>`}</strong> Selected Style</p>
        </div>
        <div className='product-styles'>
          {styles.map((style, i) => (
          <div  key={style.style_id}>
            <img key={i} onClick={handleClick} name={style.style_id} className='individual-styles' alt={product.name + style.name}  src= {style.photos[0].thumbnail_url} />
          </div>
          ))}
        </div>
      <div className='product-buttons'></div>
      </div>
    </div>

  )
}

export default DefaultGallery;