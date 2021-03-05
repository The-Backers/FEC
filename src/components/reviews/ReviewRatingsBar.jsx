import React from 'react';


const ReviewRatingsBar = ({ratings, value, width}) => {


  return (
          <div className = 'review-bar'>
          {value} Stars {
                  <div className = 'outer-bar'>
                     <div className = 'fill' style ={{width: width + 'px'}}></div>
                  </div>
                  } ({ratings[value] || 0})
                   </div>
           )




}





export default ReviewRatingsBar;