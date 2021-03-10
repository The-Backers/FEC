import React, {useState, useEffect, Fragment} from 'react';
import Stars from '../shared/Stars.jsx';
import getAverage from '../../actions/utils.js'
import store from '../../store/store.js';
import CarouselContainer from '../../containers/overview/CarouselContainer.js';
import SizeDropDownContainer from '../../containers/overview/SizeDropDownContainer.js';
import StylesSectionContainer from '../../containers/overview/StylesSectionContainer.js'
import ProductInfoContainer from '../../containers/overview/ProductInfoContainer.js';

let DefaultGallery = ({skus, expand, styles, product, expandGallery, currentStyle, changeCurrentStyle, changeIndex, index}) => {

  const [currentQuantity, setCurrentQuantity] = useState(0);
  let scrollToReviews = document.documentElement.clientHeight * 2;

  useEffect(() => {
  })

  return (
    <div  id='overview-body' >
      <div id='overview-body-image' >
      <CarouselContainer />
        <div id="myresult" className="img-zoom-result"></div>
        <a onClick={() => expandGallery(true)}><i className="fas fa-expand button-expander"></i></a>
      </div>
      <div className='overview-body-interaction' >
        <div className='product-info'>
          <div className='current-stars'>
          {/*change the total to be dynamic based on current product */}
          <div className='current-stars-div'><Stars total = '3.6' /></div> <div className="read-all-scroll" onClick={() => window.scrollTo({top: scrollToReviews, behavior: 'smooth'})}>read all reviews</div>
          </div>
          <ProductInfoContainer />
        </div>
        <div className='product-styles'>
            <StylesSectionContainer />
        </div>
        <div className='product-buttons'>
            <SizeDropDownContainer />
        </div>
      </div>
    </div>

  )
}
{/* <i className="far fa-check-circle check"></i> */}
export default DefaultGallery;

// ive written code in swift python and javascript
// i trained professional athletes
// i played varsity basketball in high school