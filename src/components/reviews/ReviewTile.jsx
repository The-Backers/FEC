import React from 'react';
import ReviewPhoto from './ReviewPhoto.jsx';
import Stars from '../shared/Stars.jsx';

//assigns month names to numbers
var months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}


class ReviewTile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      day: this.props.review.date.substring(8, 10),
      month: parseInt(this.props.review.date.substring(5,7)),
      year: this.props.review.date.substring(0, 4),
      body1: this.props.review.body.substring(0, 250),
      body2: this.props.review.body.substring(251, this.props.review.body.length),
    }
    this.more = React.createRef();
    this.showMore = this.showMore.bind(this);
  }

//sets the string for the date itself


showMore(event) {

    if (this.more.current.style.display !== 'none') {
      this.more.current.style.display = 'none';
      var x = this.state.body1 + '...';
      event.target.innerHTML = 'Show More';
      this.setState({body1: x});
    } else {
      this.more.current.style.display = 'inline';
      event.target.innerHTML = 'Show Less';
      this.setState({body1: this.state.body1.substring(0, this.state.body1.length - 3)})
    }

}

componentDidMount() {


    this.more.current.style.display = 'none'
  if (this.state.body2.length > 0) {
    var x = this.state.body1 + '...';
    this.setState({body1: x});
  }
}

render() {


  if (this.props.review.response) {
   var resp = ( <p>Response from Seller: {this.props.review.response}</p> )
  }

  var date = `${months[this.state.month]} ${this.state.day}, ${this.state.year}`


  return (
    <div className = 'review-tile'>
      <h3 className = 'review-summary'>{this.props.review.summary}</h3>
      <div className = 'review-stars'><Stars className = 'review-stars' total = {this.props.review.rating} /></div>

      <p className = 'review-user-date'>{this.props.review.reviewer_name}: {date}</p>

      <p className = 'review-body'>{this.state.body1}
          <span className = 'review-body-more' ref = {this.more}>{this.state.body2}</span>
      {
      (() => {
        if (this.state.body2.length > 0) {
        return (<button className = 'review-show-more' onClick = {this.showMore}>Show More</button>)
          }
        })()
      }
      </p>
      {
      (() => {
        if (this.props.review.recommend) {
        return (<p className = 'review-recommend'>This product is recommended!</p>)
          }
        })()
      }
      <div className = 'review-photos'>

      {
      (() => {
        if (this.props.review.photos.length !== 0) {
        return (<p>Photos:</p>)
          }
        })()
      }
        {this.props.review.photos.map((element) =>
        {
          return (
            <div className = 'review-photo'>

              {/* <img src = {element.url} style = {{maxWidth: '100px', maxHeight: '100px'}} /> */}
              <ReviewPhoto id = {element.id} url = {element.url} />
            </div>
              )
            }
          )
        }
        </div>
      <div className = 'review-actions'>
        <p className = 'review-helpful'  >Helpful? <span style = {{color: (this.props.helpfulLog[this.props.review.review_id] !== undefined) ? 'green' : null}} onClick = {(() => {if (this.props.helpfulLog[this.props.review.review_id] ===undefined) {this.props.handleHelpfulLog(this.props.review.review_id); }})} >Yes</span> ({this.props.review.helpfulness}) </p>

      </div>

      <div className = 'review-response'>
        {resp}
      </div>


    </div>
  )
}

}






export default ReviewTile