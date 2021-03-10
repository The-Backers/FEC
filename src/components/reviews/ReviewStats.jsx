import React from 'react';
import Stars from '../shared/Stars.jsx';
import ReviewRatingsBar from './ReviewRatingsBar.jsx';
import ReviewCharacteristics from './ReviewCharacteristics.jsx'


class ReviewStats extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      widths: {}
    };
    this.averageFinder = this.averageFinder.bind(this);
    this.widthFinder = this.widthFinder.bind(this);
  }



  widthFinder(value, total) {

    var stats = this.props.stats;
    var x = this.state.widths
    if (stats.ratings[value] !== undefined) {

      // console.log((stats.ratings[value] * 80 / this.state.total) + ' px')
      x[value] = (stats.ratings[value] * 7 / total);
      this.setState({widths: x});
      return (stats.ratings[value] * 7 / total);

    } else {

      x[value] = '0'
      this.setState({widths: x});
      return '0'
    }


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

  var values = ['1', '2', '3', '4', '5']

  for (var key of values) {
    this.widthFinder(key, total)

  }
  average /= total;

  this.setState({average: average, total: total})


}

componentDidUpdate() {
if (this.state.average === undefined) {
  if (Object.keys(this.props.stats).length !== 0) {
    this.averageFinder()
    this.averageFinder()

  }
}

}


render(){



  var bars;

  if ( Object.keys(this.props.stats).length !== 0) {



      if (Object.keys(this.state.widths).length === 5) {

        bars =   <div>
        <ReviewRatingsBar getReviews = {this.props.getReviews} stats = {this.props.stats} value = {0} ratings = {this.props.stats.ratings} width = {this.state.widths['0']}  />
        <ReviewRatingsBar getReviews = {this.props.getReviews} stats = {this.props.stats} value = {1} ratings = {this.props.stats.ratings} width = {this.state.widths['1']}  />
        <ReviewRatingsBar getReviews = {this.props.getReviews} stats = {this.props.stats} value = {2} ratings = {this.props.stats.ratings} width = {this.state.widths['2']}  />
        <ReviewRatingsBar getReviews = {this.props.getReviews} stats = {this.props.stats} value = {3} ratings = {this.props.stats.ratings} width = {this.state.widths['3']}  />
        <ReviewRatingsBar getReviews = {this.props.getReviews} stats = {this.props.stats} value = {4} ratings = {this.props.stats.ratings} width = {this.state.widths['4']}  />
        <ReviewRatingsBar getReviews = {this.props.getReviews} stats = {this.props.stats} value = {5} ratings = {this.props.stats.ratings} width = {this.state.widths['5']} />
        </div>
      } else {
        bars = <p>hi</p>
      }
    return (

    <div className = 'review-stats'>
      <h2>Review Breakdown</h2>
      <h3>{Math.round(this.state.average * 10) / 10}</h3>
      <Stars total = {this.state.average} />
      {/* <div id = 'bar-1'>
        <div id = 'fill'></div>
      </div> */}
      {bars}
      <p className = 'reviews-recommend-percent'>{Math.round((parseInt(this.props.stats.recommended[true]) * 100) /(parseInt(this.props.stats.recommended[true]) + parseInt(this.props.stats.recommended[false])))}% of reviews recommend this product.</p>

      {Object.keys(this.props.stats.characteristics).map((element) => <ReviewCharacteristics type = {element} data = {this.props.stats.characteristics[element]} />)}
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