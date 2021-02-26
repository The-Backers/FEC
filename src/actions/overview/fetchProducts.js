import TOKEN from '../../../config.js';
import axios from 'axios';
import showProducts from './showProducts.js';
import store from '../../store/store.js'

var handleDemoButton = (dispatch) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/', {
  headers: {
    'AUTHORIZATION': TOKEN
  }
})
.then(({data}) => {
  console.log('this is the data', data);
  dispatch(showProducts(data[1]))
})
.catch((error) => {
  console.error(error)
})

}

export default handleDemoButton;