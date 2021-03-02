import React from 'react'

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


const ReviewTile = ({review}) => {



  var year = review.date.substring(0, 4)
  var month = parseInt(review.date.substring(5,7))
  var day = review.date.substring(8, 10)

  var date = `${months[month]} ${day}, ${year}`

  return (
    <div>
      <h3>{review.summary}</h3>
      <p>{date}</p>
      <p>{review.body}</p>
    </div>
  )
}






export default ReviewTile