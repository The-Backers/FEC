import React from 'react';

class ReviewCharacteristics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Size: ['Too Small', 'Perfect', 'Too Large'],
      Width: ['Too Narrow', 'Perfect' ,'Too Wide'],
      Comfort: ['Poor', '', 'Great'],
      Quality: ['Poor', '', 'Great'],
      Length: ['Too Short', 'Perfect', 'Too Long'],
      Fit: ['Poor', '', 'Great']
    }
  }


  render() {
    return (
      <div className = 'review-characteristic'>
        <p>{this.props.type}:</p>
        <div className = 'characteristics-bar'> </div>
          <div className = 'characteristics-icon' style = {{width: ((parseInt(this.props.data.value) - 1) / 4 * 100) + '%' }}></div>
          <div className = 'characteristics-labels'><p>{this.state[this.props.type][0]}</p> <p>{this.state[this.props.type][1]}</p> <p>{this.state[this.props.type][2]}</p>  </div>

      </div>
    )
  }
}



export default ReviewCharacteristics