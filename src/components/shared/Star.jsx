import React from 'react';

var Star = (props) => {


  //these are the coordinates for each point on the star relative to its svg view. to change the size of the star, you need to proportionaly change both all the numbers in the startPoints string, as well as the size of the svg viewBox.
  var starPoints = '20 4 24 16 36 16 28 24 32 36 20 28 8 36 12 24 4 16 16 16 20 4'

  var percent;

  var fillValue;

  console.log('total', props.total)
  console.log('value', props.value)

  //if the stars value is less than the total score, it gets filled completely
  if (props.total >= props.value) {
    fillValue = 'green';
    //if the value is 1 or more than the total, its completetly blank
  } else if (props.value - props.total >= 1) {
    fillValue = 'none';
    //these if statements are the break points for how filled the star should be
  } else {
    fillValue = 'url(#partial)'
    var remainder = (props.value - props.total) * 100;
    if (remainder < 12.5) {
      percent = 0;
    } else if (remainder < 37.5) {
      percent = 25;
    } else if (remainder < 62.5) {
      percent = 50;
    } else if (remainder < 87.5) {
      percent = 75;
    } else {
      percent = 100;
    }
  }

//this helper function programatically sets the partial fill for the star based on the percent
  var gradient = (percent) => {
    return (
      <defs>
  <linearGradient id = 'partial' x1='0%' y1='0%' x2='100%' y2='0%'>
    <stop offset = '0%' style = {{'stopColor': 'green', 'stopOpacity': '1'}} />
    <stop offset = {percent + '%'} style = {{'stopColor': 'green', 'stopOpacity': '1'}} />
    <stop offset = {percent + '%'} style = {{'stopColor': 'green', 'stopOpacity': '0'}} />
    <stop offset = '100%' style = {{'stopColor': 'red', 'stopOpacity': '0'}} />
  </linearGradient>
</defs>
    )
  }

  //this actually uses the helper function
  var partial;

  if (percent !== undefined) {
     partial = gradient(percent)
  }

//this actually puts it togetehr
  return( <svg viewBox = '0 0 40 40' >
      {partial}
  <polyline stroke = 'green' strokeWidth = '2' fill = {fillValue} points = {starPoints} />
</svg>)

}


export default Star;