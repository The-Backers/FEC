// import TOKEN from '../../../config.js';
import axios from 'axios';
import showReviewMeta from './showReviewMeta.js';
import store from '../../store/store.js';

var fetchReviewMeta = (productId) => {
  return (dispatch) => {
    axios.get(`/reviews/meta/?product_id=${productId}`)
      .then(({data}) => {
        dispatch(showReviewMeta(data))
      })
      .catch((err) => {
        console.log(err)
      });
  }
}


  export default fetchReviewMeta