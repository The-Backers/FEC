import TOKEN from '../../../config.js';
import axios from 'axios';
import addPhotos from './addPhotos.js';
import store from '../../store/store.js'

var mapRelated = (dispatch, data, outfits) => {
  return dispatch => {
    var items = data.map((id) => {
      return (
        axios.get(`/products/${id}`)
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