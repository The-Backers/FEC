import React from 'react';


const ReviewRatingsBar = ({ratings, value, width, getReviews, stats}) => {


  return (
          <div className = 'review-bar'>
          <div className = 'bar-label' onClick = {() => {console.log(stats.product_id, 2, getReviews.sort, value); getReviews.get(stats.product_id, 2 , getReviews.sort, value)}}>{value} Stars</div> {
                  <div className = 'outer-bar'>
                     <div className = 'fill' style ={{width: width + 'vw'}}></div>
                  </div>
                  } ({ratings[value] || 0})
                   </div>
           )




}





export default ReviewRatingsBar;