import React from 'react';
import Stars from '../shared/Stars.jsx';
import ReviewRatingsBar from './ReviewRatingsBar.jsx'


class ReviewStats extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
    this.averageFinder = this.averageFinder.bind(this);
    this.widthFinder = this.widthFinder.bind(this);
  }


averageFinder() {

  var stats = this.props.stats

  var average = 0;
  var total = 0;
  var keys = []

  for (var key in stats.ratings) {
    average += parseInt(key) * stats.ratings[key];
    total += parseInt(stats.ratings[key]);
  }

  average /= total;
  console.log(average, total, stats)

  this.setState({average: average, total: total})

}

widthFinder() {

}

componentDidUpdate() {
if (this.state.average === undefined) {
  if (Object.keys(this.props.stats).length !== 0) {
    this.averageFinder()
    console.log(this.state.average)
  }
}
}



render(){
  if ( Object.keys(this.props.stats).length !== 0) {

    return (

    <div className = 'review-stats'>
      <h2>{this.state.average}</h2>
      <Stars total = '3' />
      {/* <div id = 'bar-1'>
        <div id = 'fill'></div>
      </div> */}

      <ReviewRatingsBar value = '1' ratings = {this.props.stats.ratings} total = {this.state.total}  />
      <ReviewRatingsBar value = '2' ratings = {this.props.stats.ratings} total = {this.state.total}  />
    </div>



  )
} else {

  return (
    <p>hello</p>
  )
}
}



}



export default ReviewStats