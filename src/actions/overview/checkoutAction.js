import store from '../../store/store.js'
import thunk from 'redux-thunk';
import axios from 'axios';
import TOKEN from '../../../config.js';

var checkout = (productId) => {
  return (dispatch) => {
    var q = document.getElementById("select-quantity-dropdown");
    var sku = document.getElementById("select-size-dropdown");
    return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/cart`,
    {"sku_id": Number(sku.value), "count": Number(q.value)},
    { headers: {
      'AUTHORIZATION': TOKEN,
      'Content-Type': 'application/json'

  }}
    )
  .then(() => {
      console.log('successfully added to bag!')
    }).catch((err) => {
      console.log(err)
    });
  }


}


export default checkout;