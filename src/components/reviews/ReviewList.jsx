import React from 'react';
import ReviewTile from './ReviewTile.jsx';


const ReviewList = (props) => {



  if (props.reviews !== undefined) {
    return (
      <div className = 'review-list'>
         {props.reviews.map((element) => <ReviewTile review = {element} />)}
         <button onClick = {() => {props.more(props.product, props.reviews.length + 2)}} style = {{display: props.display}}  >More reviews</button>
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