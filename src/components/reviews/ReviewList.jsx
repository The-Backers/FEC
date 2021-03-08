import React from 'react';
import ReviewTile from './ReviewTile.jsx';


const ReviewList = (props) => {



  if (props.reviews !== undefined) {
    return (
      <div>
         {props.reviews.map((element) => <ReviewTile review = {element} />)}
      </div>

  )
} else {
  return (
    <div>
      <p>hello</p>
    </div>
  )
}
  }







export default ReviewList;