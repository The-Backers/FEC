import React from 'react';


const ReviewRatingsBar = ({ratings, value, total}) => {

if (ratings[value] !== undefined) {

  var width = (ratings[value] * 80 / total) + ' px';
} else {
  var width = '0'
}

console.log(width)

return (
     <div id = {`bar-${value}`} >
        <div className = 'fill' style ={{width: width}}></div>
      </div>
)



}





export default ReviewRatingsBar;