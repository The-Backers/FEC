import React from 'react';
import logInteraction from '../shared/logInteraction.js';

//potential filtering for later
// onClick = {() => {console.log(stats.product_id, 2, getReviews.sort, value); getReviews.get(stats.product_id, 2 , getReviews.sort, value)}}

// ({ratings, value, width, getReviews, stats})


class ReviewRatingsBar extends React.Component {

        constructor(props) {
                super(props);
                this.filterFunc = this.filterFunc.bind(this)
                this.clickLogger = this.clickLogger.bind(this);;
        }

        clickLogger(input) {
          logInteraction(`review-filter-${this.props.value}-stars: ${input}`, 'reviews');
        }

  filterFunc(event) {
    this.clickLogger(this.props.stats.product_id)
    var tempFilter = [];
    if (this.props.getReviews.filter) {
        tempFilter = this.props.getReviews.filter
    }

    if (this.props.width !== '0') {
            if(tempFilter.indexOf(this.props.value) < 0) {

        // event.target.style.color = 'red';
        tempFilter.push(this.props.value)

        this.props.getReviews.get(this.props.stats.product_id, this.props.getReviews.length , this.props.getReviews.sort, tempFilter);
      } else {
        // event.target.style.color = 'black';

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
                <div className = {(this.props.width !== '0') ? 'bar-label-active' : 'bar-label'} style = {{color: (this.props.getReviews.filter) ? ((this.props.getReviews.filter.indexOf(this.props.value) >= 0) ? 'red': 'black') : 'black'}} onClick = {this.filterFunc} ><span>{this.props.value} Stars</span></div>
                {
                  <div className = 'outer-bar'>
                     <div className = 'fill' style ={{width: this.props.width + 'vw'}}></div>
                  </div>
                  } (<span>{this.props.ratings[this.props.value] || 0}</span>)
        </div>
           )
}


}





export default ReviewRatingsBar;