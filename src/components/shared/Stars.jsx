import React from 'react';

const Stars = () => {
  return (
<div id = 'stars'>
  <div className = 'star' value = '1'>
    <svg viewBox = '0 0 50 50' style = {{'border': 'green solid'}}>
      {/* <path stroke = 'green' strokeWidth = '1' d =''    /> */}
      <polyline points = '25 5 30 20 45 20 35 30 40 45 25 35 10 45 15 30 5 20 20 20' />
    </svg>
  </div>


  <div className = 'star' value = '2'></div>
  <div className = 'star' value = '3'></div>
  <div className = 'star' value = '4'></div>
  <div className = 'star' value = '5'></div>
</div>
  )
}

export default Stars;


"50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"