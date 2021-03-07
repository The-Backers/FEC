import React from 'react';
import Star from './Star.jsx'


//stars is always going to expect a prop of total (which is the total score of whatever thing you are measuring (i.e. props.total = 3.4))

class ClickableStars extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      ratings: {
        1: '1 star - "Poor"',
        2: '2 stars - "Fair"',
        3: '3 stars - "Average"',
        4: '4 stars - "Good"',
        5: '5 stars - "Great"',
      }
    }
    this.handleStarClick = this.handleStarClick.bind(this)
  }

  handleStarClick(event) {
    console.log(event)
    this.setState({total: event})
  }

  render(){

    return (
      <div className = 'clickable-stars' id = {this.props.id}>
        <div className = 'stars' >
          <div className = 'star' >
            <Star total = {this.state.total} onClick = {this.handleStarClick} value = '1'/>
          </div>


          <div className = 'star' >
            <Star total = {this.state.total} onClick = {this.handleStarClick} value = '2'/>
          </div>

          <div className = 'star' >
            <Star total = {this.state.total} onClick = {this.handleStarClick} value = '3'/>
          </div>

          <div className = 'star' >
            <Star total = {this.state.total} onClick = {this.handleStarClick} value = '4'/>
          </div>

          <div className = 'star' >
            <Star total = {this.state.total} onClick = {this.handleStarClick} value = '5'/>
          </div>
        </div>
        <p>{this.state.ratings[this.state.total]}</p>
      </div>
   )
  }
}

export default ClickableStars;

