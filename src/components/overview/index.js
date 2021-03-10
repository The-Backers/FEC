import React, {useState, useEffect} from 'react';
import ExpandedGalleryContainer from '../../containers/overview/ExpandedGalleryContainer.js';
import DefaultGalleryContainer from '../../containers/overview/DefaultGalleryContainer.js';


const Overview = ({styles, expand, expandGallery, product, fetchProduct}) => {

  return (
  <div id="parent-overview">
    <nav className='nav'>
      <h1 className='logo'>B<p className="fas fa-angle-double-up"></p>CKERS</h1>
      <div> <input className='prod-search'></input>
      <i className="fas fa-search"></i>
      <i className="fas fa-shopping-cart"></i>
      </div>


    </nav>
    {expand ? <ExpandedGalleryContainer /> : <DefaultGalleryContainer />}

    <div className='overview-description'>
      <h3>{product.description || ''} </h3>
      {product.features ? <ul className='product-features-list'>{product.features.map((feature, i) => {
        return (<li key={`${i}-feature`}><i className="fas fa-check"></i>{feature.feature}: {feature.value}</li>)
      })}</ul> : <div></div>}

    </div>
  </div>
)
}

export default Overview;
