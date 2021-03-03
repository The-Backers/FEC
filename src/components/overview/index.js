import React, {useState} from 'react';
import Gallery from './Gallery';
import ExpandedGallery from './ExpandedGallery.js';
import DefaultGallery from './DefaultGallery.js';

const Overview = () => {
  let Gallery = () => {
    const [expand, setExpand] = useState(false);
    if (expand) {
      return <ExpandedGallery expand={expand} setExpand={setExpand}/>
    } else {
      return <DefaultGallery expand={expand} setExpand={setExpand}/>
    }
  }

  return (
<div id="parent-overview">
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
