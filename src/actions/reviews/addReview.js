import TOKEN from '../../../config.js';
import axios from 'axios';
import fetchReviews from './fetchReviews.js';
import store from '../../store/store.js';

var addReview = (productId, count = 2, sort = 'relevant', rating, summary, body, recommend, name, email, photos, characteristics) => {
  console.log(productId, count, 'addReviews')
  return (dispatch) => {
    // axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${productId}&rating=${rating}&summary=${summary}&body=${body}&recommend=${recommend}&name=${name}&email=${email}&photos=${photos}&characteristics=${characteristics}`, {
    //   headers: {
    //     'AUTHORIZATION': TOKEN
    //   }
    // })
    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/`,
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
      },
      // transformRequest: [function (data, headers) {
      //   // Do whatever you want to transform the data
      //   data = JSON.stringify(data)
      //   return data;
      // }],

      headers: {
        'AUTHORIZATION': TOKEN,
        'Content-Type': 'application/json'
      }
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