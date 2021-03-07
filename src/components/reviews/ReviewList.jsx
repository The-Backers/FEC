import React from 'react';
import ReviewTile from './ReviewTile.jsx';


const ReviewList = (props) => {



  if (props.reviews !== undefined) {
    return (
      <div className = 'review-list'>
        <div className = 'review-list-head'>
          <label htmlFor = 'sort-by'>Sort By</label>
          <select  onChange = {() => {props.more(props.product, 2, event.target.value)}} name = 'sort-by' id = 'sort-by'>
            <option value = 'relevant'>Relevance</option>
            <option value = 'newest'>Newest</option>
            <option value = 'helpful'>Helpfulness</option>
          </select>

        </div>
        <div className = 'review-tiles'>
         {props.reviews.map((element) => <ReviewTile review = {element} />)}
         <button onClick = {() => {props.more(props.product, props.reviews.length + 2, props.sort)}} style = {{display: props.display}}  >More reviews</button>
        </div>
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