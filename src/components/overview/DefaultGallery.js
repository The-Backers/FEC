import React, {useState, useEffect, Fragment} from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';
import Stars from '../shared/Stars.jsx';
import Star from '../shared/Star.jsx';
import getAverage from '../../actions/utils.js'
import store from '../../store/store.js';
import CarouselContainer from '../../containers/overview/CarouselContainer.js'

let DefaultGallery = ({skus, expand, styles, product, expandGallery, currentStyle, changeCurrentStyle}) => {

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [didRenderStyles, setDidRenderStyles] = useState(false);
  const [ActiveStyle, setActiveStyle] = useState(styles?.style_id);
  let scrollToReviews = document.documentElement.clientHeight * 2;

  useEffect(() => {
  })

  function clearChecks() {
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) {
      clist[i].checked = false;
    }
    return;
  }


  function handleClick(e) {
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) {
      clist[i].checked = false;
    }

    for(var i = 0; i < styles?.length; i++) {
      if (Number(e.target.name) === styles[i]?.style_id) {
        changeCurrentStyle(styles[i] || {});
      }
    }
    setCurrentPhoto(0);
  }

  return (
    <div  id='overview-body' >
      <div  id='overview-body-image'>
        <img id='overview-zoom-image' src={currentStyle?.photos[currentPhoto]?.url} />
        <div id="myresult" className="img-zoom-result"></div>
        <a onClick={() => expandGallery(true)}><i className="fas fa-expand button-expander"></i></a>

        {/*fa-expand will trigger switch between default and expanded*/ }
        <div className='current-style-gallery'>
        <CarouselContainer />
        {/* create a vertical carousel here */}
        </div>
      </div>
      <div className='overview-body-interaction' >
        <div className='product-info'>
          <div className='current-stars'>
          {/*change the total to be dynamic based on current product */}
          <div className='current-stars-div'><Stars total = '3.6' /></div> <div className="read-all-scroll" onClick={() => window.scrollTo({top: scrollToReviews, behavior: 'smooth'})}>read all reviews</div>
          </div>
          <p>{product?.category || ''}</p>
          <h2>{product?.name || ''}</h2>
          {currentStyle?.sale_price ?
          <div style={{color: 'red'}}>${currentStyle?.sale_price || ''}<p style={{textDecoration: 'line-through', color: 'black'}}>${currentStyle?.original_price || ''}</p></div> :
          <p>${currentStyle?.original_price || ''}</p>}
          <p><strong>{currentStyle?.name || ''} {`>`}</strong> Selected Style</p>
        </div>
        <div className='product-styles'>
          {styles.map((style, i) => {
            if (style?.style_id === currentStyle?.style_id) {
              {clearChecks()}
              return (
                <div key={i}>
                <input type="checkbox" id={style?.style_id || ''} defaultChecked='true' checked/>
                <label onClick={handleClick} htmlFor={style?.style_id || ''} name={style?.style_id } >
                <img  name={style?.style_id} key={i} className='individual-styles' alt={product?.name + style?.name}  src= {style?.photos[0]?.thumbnail_url} />
                </label>
                </div>
              )
            }
              return (
                <div key={i}>
                <input type="checkbox" id={style?.style_id || ''} />
                <label onClick={handleClick} htmlFor={style?.style_id || ''} name={style?.style_id || ''} >
                <img  name={style?.style_id || ''} key={i} className='individual-styles' alt={product?.name + style?.name || ''}  src= {style?.photos[0]?.thumbnail_url || ''} />
                </label>
                </div>
              )
          })
          }
        </div>
      <div className='product-buttons'>
        <div>
        <select className='select-size-dropdown'>
          <option selected="selected">SELECT SIZE</option>
          {skus?.map((sku) => {
            return (<option key={sku[1]}>{sku[0].size}</option>)
          })}
        </select>
        <select className='select-quantity-dropdown'>
          <option selected="selected">1</option>
          {skus?.map((sku) => {
            return (<option key={`${sku[1]}-quantity`}>{sku[0].quantity}</option>)
          }) || <option>Xs</option>}
        </select>
        </div>

          <div className='star-add-to-bag-div'>
            <button type='submit' className='add-to-bag'> ADD TO BAG <i className="fas fa-plus"></i> </button>
            <button type='submit' className='star-product'> &#x2606; </button>
          </div>

      </div>
      </div>
    </div>

  )
}
{/* <i className="far fa-check-circle check"></i> */}
export default DefaultGallery;