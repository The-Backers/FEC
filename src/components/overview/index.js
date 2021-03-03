import React from 'react';
import Gallery from './Gallery';


const Overview = () =>(
  <div className="parent-overview width">
<nav className='nav'>
  <h1>Nav bar will go here</h1>
</nav>
  <Gallery/>
<div className='overview-description'>
  <h2>product description will go here</h2>
</div>

  </div>
)

export default Overview;