import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewStats from './ReviewStats.jsx';

class Reviews extends React.Component  {

  constructor(props) {
    super(props)
  }


  componentDidMount() {
    // this.props.handleGetReviews();
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
            <ReviewList reviews = {this.props.reviews.results} />
        </div>
     </div>
   </div>
 )
 }
  }

export default Reviews;