import TOKEN from '../../../config.js';
import axios from 'axios';
import showReviews from './showReviews.js';
import store from '../../store/store.js';

var fetchReviews = (productId, count = 2, sort = 'relevant', filter = []) => {

  return (dispatch) => {
    axios.get(`/reviews/?product_id=${productId}&count=${count}&sort=${sort}`, {
      headers: {
        'AUTHORIZATION': TOKEN
      }
    })
      .then(({data}) => {

          if (filter.length > 0) {


              data.results = data.results.filter(element => filter.indexOf(element.rating) >= 0)
          }



        dispatch(showReviews(data, count, sort, filter))
      })
      .catch((err) => {
        console.log(err, 'err')
      });
  }
}


  export default fetchReviews