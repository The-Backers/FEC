import TOKEN from '../../../config.js';
import axios from 'axios';
import mapRelated from './mapRelated.js';
import {store} from '../../store/store.js'
import thunk from 'redux-thunk';

var fetchRelated = (dispatch) => {
  const id = store.getState().product.id;
  return dispatch => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}/related`, {
      headers: {
        'AUTHORIZATION': TOKEN
      }
    })
      .then(({data}) => {
        dispatch(mapRelated(dispatch, data, false))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export default fetchRelated;