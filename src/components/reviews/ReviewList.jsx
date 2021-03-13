import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import logInteraction from '../shared/logInteraction.js';



const ReviewList = (props) => {

  var clickLogger = (name,input) => {
    logInteraction(`${name}: ${input}`, 'reviews');
  }


  if (props.reviews !== undefined) {
    return (
      <div className = 'review-list'>
        <div className = 'review-list-head'>
          <label htmlFor = 'sort-by'>Sort By</label>
          <select  onChange = {() => {props.more(props.product, props.reviews.length, event.target.value); clickLogger('review-list-sort', props.product)}} name = 'sort-by' id = 'sort-by'>
            <option value = 'relevant'>Relevance</option>
            <option value = 'newest'>Newest</option>
            <option value = 'helpful'>Helpfulness</option>
          </select>

        </div>
        <div className = 'review-tiles'>
         {props.reviews.map((element) => <ReviewTile helpfulLog = {props.helpfulLog} handleHelpfulLog = {props.handleHelpfulLog}  review = {element} />)}
         <button onClick = {() => {props.more(props.product, props.reviews.length + 2, props.sort, props.filter); clickLogger('more-reviews', props.product)}} style = {{display: props.display}}  >More Reviews</button>
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