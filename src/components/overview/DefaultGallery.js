import React, {useState, useEffect, lazy} from 'react';
import Stars from '../shared/Stars.jsx';
import getAverage from '../../actions/utils.js'
import CarouselContainer from '../../containers/overview/CarouselContainer.js';
import SizeDropDownContainer from '../../containers/overview/SizeDropDownContainer.js';
import StylesSectionContainer from '../../containers/overview/StylesSectionContainer.js'
import ProductInfoContainer from '../../containers/overview/ProductInfoContainer.js';


let DefaultGallery = ({reviewMeta, expandGallery}) => {

  let scrollToReviews = document.documentElement.clientHeight * 2;
  const [avgStars, setAvgStars] = useState(0)

  useEffect(() => {
    if (reviewMeta.ratings) {
      setAvgStars(getAverage(reviewMeta.ratings))
    }
  },[reviewMeta])

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
          <div className='current-stars-div'><Stars total = {avgStars} /></div> <div className="read-all-scroll" onClick={() => window.scrollTo({top: scrollToReviews, behavior: 'smooth'})}>read all reviews</div>
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
export default DefaultGallery;
