import TOKEN from '../../../config.js';
import axios from 'axios';
import showRelated from './showRelated.js';
import store from '../../store/store.js'

var mapRelated = (dispatch, data) => { // takes in an array of product ids!
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
        products.forEach((product) => {
          axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${product.id}/styles`, {
            headers: {
              'AUTHORIZATION': TOKEN
            }
          })
            .then((response) => {
              product.stylePhoto = response.data.results[1].photos[0].url;
              // console.log('this is the photo: ', product.stylePhoto);
            })
        })
        return products;
      })
      .then((products) => {
        dispatch(showRelated(products));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default mapRelated;