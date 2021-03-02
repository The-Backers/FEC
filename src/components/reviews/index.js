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


      <ReviewList reviews = {this.props.reviews.results} />
     <button onClick={this.props.handleGetReviews}>test get reviews</button>
 </div>
 <div className='reviews-accordion'>
 </div>
   </div>
 )
 }
  }

export default Reviews;