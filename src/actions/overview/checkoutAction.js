import store from '../../store/store.js'
import thunk from 'redux-thunk';
import axios from 'axios';
import logInteraction from '../../components/shared/logInteraction.js';

var checkout = (productId) => {
  return (dispatch) => {
    var q = document.getElementById("select-quantity-dropdown");
    var sku = document.getElementById("select-size-dropdown");
    logInteraction(`checkout-sku-quantity: ${sku.value}-${q.value}`, 'product-overview')
    return axios.post(`/cart`,
    {"sku_id": Number(sku.value), "count": Number(q.value) + 1})
  .then(() => {
    console.log('success')
    }).catch((err) => {
      console.log(err)
    });
  }


}


export default checkout;