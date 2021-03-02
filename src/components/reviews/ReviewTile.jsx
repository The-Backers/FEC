import React from 'react'

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
      body2: this.props.review.body.substring(250, this.props.review.body.length)
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



  var date = `${months[this.state.month]} ${this.state.day}, ${this.state.year}`


  return (
    <div className = 'review-tile'>
      <h3 className = 'review-summary'>{this.props.review.summary}</h3>
      <p className = 'review-date'>{date}</p>
      <p>{this.state.body1}

          <span className = 'review-body-more' ref = {this.more}>{this.state.body2}</span>
      </p>
      {
      (() => {
        if (this.state.body2.length > 0) {
        return (<button onClick = {this.showMore}>Show More</button>)
          }
        })()
      }
    </div>
  )
}

}






export default ReviewTile