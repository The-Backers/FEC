import TOKEN from '../../../config.js';
import axios from 'axios';
import showRelated from './showRelated.js';
import addStars from './addStars.js';
import store from '../../store/store.js'

var addPhotos = (dispatch, products, outfits) => {
  return dispatch => {
    var items = JSON.parse(JSON.stringify(products))
    var photos = items.map((product) => {
      return (
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${product.id}/styles`, {
        headers: {
          'AUTHORIZATION': TOKEN
        }
      })
        .then((response) => {
          if (response.data.results.length) {
            product.stylePhoto = response.data.results[0].photos[0].url || null;
          } else {
            product.stylePhoto = null;
          }
          return product;
        })
    )})
    Promise.all(photos)
      .then((data) => {
        dispatch(addStars(dispatch, data, outfits));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default addPhotos;