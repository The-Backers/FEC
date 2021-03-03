import React from "react";

const Overview = ({ product, demoButton }) => (
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
);

export default Overview;
