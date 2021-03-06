import React, {useState, useEffect} from 'react';
import ExpandedGalleryContainer from '../../containers/overview/ExpandedGalleryContainer.js';
import DefaultGalleryContainer from '../../containers/overview/DefaultGalleryContainer.js';
// hold current style at a local level

const Overview = ({styles, expand, expandGallery, product, fetchProduct}) => {

  return (
  <div id="parent-overview">
    <nav className='nav'>
      <h1 className='logo'>B<p className="fas fa-angle-double-up"></p>CKERS</h1>
      <div> <input className='prod-search'></input>
      <i className="fas fa-search"></i></div>
    </nav>
    {expand ? <ExpandedGalleryContainer /> : <DefaultGalleryContainer />}

    <div className='overview-description'>
      <h2>{product.description}</h2>
    </div>
  </div>
)
}

export default Overview;
