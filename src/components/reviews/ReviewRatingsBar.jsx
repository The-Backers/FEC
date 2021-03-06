import React from 'react';


const ReviewRatingsBar = ({ratings, value, width}) => {


  return (
          <div className = 'review-bar'>
          <div className = 'bar-label'>{value} Stars</div> {
                  <div className = 'outer-bar'>
                     <div className = 'fill' style ={{width: width + 'vw'}}></div>
                  </div>
                  } ({ratings[value] || 0})
                   </div>
           )




}





export default ReviewRatingsBar;