import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewStats from './ReviewStats.jsx';
import AddReview from './AddReview.jsx';

class Reviews extends React.Component  {

  constructor(props) {
    super(props)
  }


  componentDidMount() {
    //  this.props.handleGetReviews('11004', 4);
  }



 render () {

   return (
   <div className="parent-reviews">
     <div className = 'review-title'><h1>Reviews</h1></div>

     <div className = 'reviews-content'>
        <div className='reviews-ratings'>

          <ReviewStats stats = {this.props.reviewMeta} />

        </div>

        <div className='reviews-accordion'>
            <ReviewList sort = {this.props.reviews.sort} display = {this.props.reviews.done} product = {this.props.reviews.product} reviews = {this.props.reviews.results} more = {this.props.handleGetReviews} />
            <AddReview characteristics = {this.props.reviewMeta.characteristics} name = {this.props.product.name} />

        </div>
     </div>
   </div>
 )
 }
  }

export default Reviews;