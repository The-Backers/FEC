import TOKEN from '../../../config.js';
import axios from 'axios';
import showReviews from './showReviews.js';
import store from '../../store/store.js';

var fetchReviews = (dispatch) => {

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=11002', {
    headers: {
      'AUTHORIZATION': TOKEN
    }
  })
    .then(({data}) => {
      dispatch(showReviews(data))
    })
    .catch((err) => {
      console.log(err)
    });
}


  export default fetchReviews