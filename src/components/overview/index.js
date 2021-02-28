import React from 'react';

const Overview = ({product, demoButton}) =>(
  <div className="parent-overview">
<nav className='nav'>
  <h1>Logo</h1>
  <div className='search-container'>
  <input type='text' className='prod-search'></input>
  <i className="fas fa-search"></i>
  </div>

</nav>
<div className='overview-body'>
  <div className='overview-body-image'>
  <img></img>
  </div>
  <div className='overview-body-interaction'>
  <h3>{product.name || 'name goes here'}</h3>
  <button onClick={demoButton}>demo button</button>
  </div>
</div>
<div className='overview-description'>
  <h2>{product.description || 'product description will go here' }</h2>
</div>
  </div>
)

export default Overview;