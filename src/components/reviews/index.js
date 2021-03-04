import React from 'react';
import ReviewList from './ReviewList.jsx'

class Reviews extends React.Component  {

  constructor(props) {
    super(props)
  }


  componentDidMount() {
    this.props.handleGetReviews();
  }



 render () {

   return (
   <div className="parent-reviews">
    <div className='reviews-ratings'>

    <p>{JSON.stringify(this.props.reviewMeta.ratings)}</p>


 </div>
 <div className='reviews-accordion'>
 <ReviewList reviews = {this.props.reviews.results} />
 </div>
   </div>
 )
 }
  }

export default Reviews;