import React, {useState} from 'react';
import Gallery from './Gallery';
import ExpandedGallery from './ExpandedGallery.js';
import DefaultGallery from './DefaultGallery.js';

const Overview = () => {

  let Gallery = () => {
    const [expand, setExpand] = useState(false);
    if (expand) {
      return <ExpandedGallery />
    } else {
      return <DefaultGallery />
    }
  }
  return (
    <div className="parent-overview width">
<nav className='nav'>
  <h1>Nav bar will go here</h1>
</nav>
  <Gallery />
<div className='overview-description'>
  <h2>product description will go here</h2>
</div>

  </div>
  )

}

export default Overview;