import React from 'react';
import Star from './Star.jsx'


//stars is always going to expect a prop of total (which is the total score of whatever thing you are measuring (i.e. props.total = 3.4) )

const Stars = (props) => {



  return (
<div id = 'stars'>
  <div className = 'star' >
    <Star total = {props.total} value = '1'/>
  </div>


  <div className = 'star' >
    <Star total = {props.total} value = '2'/>
  </div>

  <div className = 'star' >
    <Star total = {props.total} value = '3'/>
  </div>

  <div className = 'star' >
    <Star total = {props.total} value = '4'/>
  </div>

  <div className = 'star' >
    <Star total = {props.total} value = '5'/>
  </div>
</div>
  )
}

export default Stars;


