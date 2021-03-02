import React from 'react';
import ReviewTile from './ReviewTile.jsx'

const Reviews = ({handleGetReviews, reviews}) =>{
  console.log('reviews', reviews)
  return (
  <div className="parent-reviews">
<div className='reviews-ratings'>
  <p>
    {JSON.stringify(reviews)}
  </p>

    <ReviewTile />
    <button onClick={handleGetReviews}>test get reviews</button>
</div>
<div className='reviews-accordion'>
</div>
  </div>
)
  }

export default Reviews;