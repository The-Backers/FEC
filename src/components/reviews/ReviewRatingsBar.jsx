import React from 'react';


const ReviewRatingsBar = ({ratings, value, width}) => {


  return (
          <div className = 'review-bar'>
          {value} stars {
                  <div className = 'outer-bar'>
                     <div className = 'fill' style ={{width: width}}></div>
                  </div>
                  }
                   </div>
           )




}





export default ReviewRatingsBar;