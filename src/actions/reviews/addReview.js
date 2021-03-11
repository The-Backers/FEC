import TOKEN from '../../../config.js';
import axios from 'axios';
import fetchReviews from './fetchReviews.js';
import store from '../../store/store.js';

var addReview = (productId, count = 2, sort = 'relevant', rating, summary, body, recommend, name, email, photos, characteristics) => {
  console.log(productId, count, 'addReviews')
  return (dispatch) => {

    axios({
      method: 'post',
      url: `/reviews/`,
      data: {
        product_id: productId,
        rating: rating,
        summary: summary,
        body: body,
        recommend: recommend,
        name: name,
        email: email,
        photos: photos,
        characteristics: characteristics
      }
      // transformRequest: [function (data, headers) {
      //   // Do whatever you want to transform the data
      //   data = JSON.stringify(data)
      //   return data;
      // }],


    })
      .then(() => {
       fetchReviews(productId, count, sort);
      })
      .catch((err) => {
        console.log(err, 'err')
      });
  }
}


  export default addReview