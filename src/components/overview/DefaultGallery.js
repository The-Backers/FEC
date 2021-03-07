import React, {useState} from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';
import Stars from '../shared/Stars.jsx';
import store from '../../store/store.js';
import CarouselContainer from '../../containers/overview/CarouselContainer.js'

let DefaultGallery = ({expand, styles, product, expandGallery, currentStyle, changeCurrentStyle}) => {

  console.log('this is the current style', currentStyle);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [checkExists, setCheckExists] = useState(0);
  const [didRenderStyles, setDidRenderStyles] = useState(false);
  const [ActiveStyle, setActiveStyle] = useState(styles.style_id);

  let scrollToReviews = document.documentElement.clientHeight * 3;

  function checkIfChecked() {
    for (var i = 0; i < styles.length; i++) {
      if (styles[i]["default?"]) {
        setCheckExists(i);
      }
    }
  }

  useEffect(() => {
    checkIfChecked();
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

    for(var i = 0; i < styles.length; i++) {
      if (Number(e.target.name) === styles[i].style_id) {
        changeCurrentStyle(styles[i] || {});
      }
    }
    setCurrentPhoto(0);
  }

  return (
    <div  id='overview-body' >
      <div  id='overview-body-image'>
        <img id='overview-zoom-image' src={currentStyle.photos[currentPhoto].url} />
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
          <p>{product.category}</p>
          <h2>{product.name}</h2>
          {currentStyle.sale_price ?
          <div style={{color: 'red'}}>${currentStyle.sale_price}<p style={{textDecoration: 'line-through', color: 'black'}}>${currentStyle.original_price}</p></div> :
          <p>${currentStyle.original_price}</p>}
          <p><strong>{currentStyle.name} {`>`}</strong> Selected Style</p>
        </div>
        <div className='product-styles'>
          {styles.map((style, i) => {
            if (style.style_id === currentStyle.style_id) {
              return (
                <div key={i}>
                <input type="checkbox" id={style.style_id} checked/>
                <label onClick={handleClick} htmlFor={style.style_id} name={style.style_id} >
                <img  name={style.style_id} key={i} className='individual-styles' alt={product.name + style.name}  src= {style.photos[0].thumbnail_url} />
                </label>
                </div>
              )
            }
              return (
                <div key={i}>
                <input type="checkbox" id={style.style_id} />
                <label onClick={handleClick} htmlFor={style.style_id} name={style.style_id} >
                <img  name={style.style_id} key={i} className='individual-styles' alt={product.name + style.name}  src= {style.photos[0].thumbnail_url} />
                </label>
                </div>
              )
          })
          }
        </div>
      <div className='product-buttons'></div>
      </div>
    </div>

  )
}
{/* <i className="far fa-check-circle check"></i> */}
export default DefaultGallery;