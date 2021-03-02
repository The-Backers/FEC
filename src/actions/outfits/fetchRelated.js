import TOKEN from '../../../config.js';
import axios from 'axios';
import mapRelated from './mapRelated.js';
import store from '../../store/store.js'

var fetchRelated = (dispatch) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/related', {
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