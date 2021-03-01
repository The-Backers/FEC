import TOKEN from '../../../config.js';
import axios from 'axios';
import showRelated from './showRelated.js';
import store from '../../store/store.js'

var getRelated = (dispatch) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/related', {
    headers: {
      'AUTHORIZATION': TOKEN
    }
  })
    .then(({data}) => {
      console.log('these are the related items', data);
      dispatch(showRelated(data))
    })
    .catch((error) => {
      console.error(error)
    });
}

export default getRelated;