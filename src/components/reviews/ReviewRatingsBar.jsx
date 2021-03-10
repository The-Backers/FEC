import React from 'react';

//potential filtering for later
// onClick = {() => {console.log(stats.product_id, 2, getReviews.sort, value); getReviews.get(stats.product_id, 2 , getReviews.sort, value)}}

// ({ratings, value, width, getReviews, stats})


class ReviewRatingsBar extends React.Component {

        constructor(props) {
                super(props);
                this.filterFunc = this.filterFunc.bind(this);
        }

  filterFunc(event) {

    var tempFilter = [];
    if (this.props.getReviews.filter) {
        tempFilter = this.props.getReviews.filter
    }

    if (this.props.width !== '0') {
            if(tempFilter.indexOf(this.props.value) < 0) {

        event.target.style.color = 'red';
        tempFilter.push(this.props.value)
        console.log(tempFilter, 'tempFilter')
        this.props.getReviews.get(this.props.stats.product_id, this.props.getReviews.length , this.props.getReviews.sort, tempFilter);
      } else {
        event.target.style.color = 'black';

        tempFilter.splice([tempFilter.indexOf(this.props.value)] , 1)
        this.props.getReviews.get(this.props.stats.product_id, this.props.getReviews.length , this.props.getReviews.sort, tempFilter);
      }

      if (tempFilter.length > 0) {
        document.getElementById('reviews-reset-filters').style.display = 'inline';
      } else {
        document.getElementById('reviews-reset-filters').style.display = 'none';
      }
    }
  }

  render() {



  return (
          <div className = 'review-bar'>
          <div className = {'bar-label', (this.props.width !== '0') ? 'bar-label-active' : null} onClick = {this.filterFunc} >{this.props.value} Stars</div> {
                  <div className = 'outer-bar'>
                     <div className = 'fill' style ={{width: this.props.width + 'vw'}}></div>
                  </div>
                  } ({this.props.ratings[this.props.value] || 0})
                   </div>
           )
}


}





export default ReviewRatingsBar;