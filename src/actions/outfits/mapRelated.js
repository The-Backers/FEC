import TOKEN from '../../../config.js';
import axios from 'axios';
import addPhotos from './addPhotos.js';
import store from '../../store/store.js'

var mapRelated = (dispatch, data, outfits) => {
  return dispatch => {
    var items = data.map((id) => {
      return (
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}`, {
          headers: {
            'AUTHORIZATION': TOKEN
          }
        })
        .then((data) => {
          return data.data;
        })
      )
    })
    Promise.all(items)
      .then((products) => {
        dispatch(addPhotos(dispatch, products, outfits));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default mapRelated;