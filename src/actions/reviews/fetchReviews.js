import TOKEN from '../../../config.js';
import axios from 'axios';
import showReviews from './showReviews.js';
import store from '../../store/store.js';

var fetchReviews = (productId, count = 2, sort = 'relevant', filter) => {
  console.log(productId, count, sort, filter, 'fetchReviews')
  return (dispatch) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${productId}&count=${count}&sort=${sort}`, {
      headers: {
        'AUTHORIZATION': TOKEN
      }
    })
      .then(({data}) => {
        if (filter) {
          data.results = data.results.filter(element => element.rating === filter)
        }

        dispatch(showReviews(data, count, sort))
      })
      .catch((err) => {
        console.log(err, 'err')
      });
  }
}


  export default fetchReviews