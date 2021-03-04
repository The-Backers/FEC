import React, {useState, useEffect} from 'react';
import ExpandedGallery from './ExpandedGallery.js';
import DefaultGallery from './DefaultGallery.js';

const Overview = ({expand, expandGallery}) => {
  return (
  <div id="parent-overview">
    <nav className='nav'>
      <h1>Logo</h1>
      <div> <input className='prod-search'></input>
      <i className="fas fa-search"></i></div>
    </nav>
    {expand ? <ExpandedGallery collapseGallery={expandGallery}/> : <DefaultGallery expandGallery={expandGallery}/>}
    <div className='overview-description'>
      <h2>product description will go here</h2>
    </div>
  </div>
)
}

export default Overview;
