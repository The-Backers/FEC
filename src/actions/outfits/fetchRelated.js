import TOKEN from '../../../config.js';
import axios from 'axios';
import mapRelated from './mapRelated.js';
import store from '../../store/store.js'
import thunk from 'redux-thunk';

var fetchRelated = (dispatch) => { // need to pass in a product id? maybe fetchProducts dispatches
  // const id = store.getState().product.id;
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11007/related', {
    headers: {
      'AUTHORIZATION': TOKEN
    }
  })
    .then(({data}) => {
      dispatch(mapRelated(dispatch, data))
    })
    .catch((error) => {
      console.error(error)
    })
}

export default fetchRelated;