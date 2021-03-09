import TOKEN from '../../../config.js';
import axios from 'axios';
import mapRelated from './mapRelated.js';
import {store} from '../../store/store.js'
import thunk from 'redux-thunk';

const getUnique = (value, index, array) => {
  const id = store.getState().product.id;
  return array.indexOf(value) === index && value !== id;
}

var fetchRelated = (dispatch) => {
  const id = store.getState().product.id;
  return dispatch => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}/related`, {
      headers: {
        'AUTHORIZATION': TOKEN
      }
    })
      .then(({data}) => {
        var unique = data.filter(getUnique);
        dispatch(mapRelated(dispatch, unique, false))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export default fetchRelated;