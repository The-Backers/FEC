import React, {useState, useEffect} from 'react';
import ExpandedGallery from './ExpandedGallery.js';
import DefaultGallery from './DefaultGallery.js';

const Overview = ({styles, expand, expandGallery, product, fetchProduct}) => {
  return (
  <div id="parent-overview">
    <nav className='nav'>
      <h1 className='logo'>B<p className="fas fa-angle-double-up"></p>CKERS</h1>
      <div> <input className='prod-search'></input>
      <i className="fas fa-search"></i></div>
    </nav>
    {expand ? <ExpandedGallery styles={styles} collapseGallery={expandGallery} product={product}/> : <DefaultGallery styles={styles} expandGallery={expandGallery} product={product} />}
    <div className='overview-description'>
      <h2>{product.description}</h2>
    </div>
  </div>
)
}

export default Overview;
