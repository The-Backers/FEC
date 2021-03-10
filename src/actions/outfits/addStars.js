import TOKEN from '../../../config.js';
import axios from 'axios';
import showRelated from './showRelated.js';
import showOutfit from './showOutfit.js';
import store from '../../store/store.js'
import getAverage from '../utils.js';

var addStars = (dispatch, products, outfits) => {
  return dispatch => {
    var items = JSON.parse(JSON.stringify(products))
    var test = items.map((product) => {
      return (
        axios.get(`/reviews/meta/?product_id=${product.id}`)
        .then((response) => {
          product.total = getAverage(response.data.ratings) || null;
          return product;
        })
    )})
    Promise.all(test)
      .then((data) => {
        if (outfits) {
          dispatch(showOutfit(data));
        } else {
          dispatch(showRelated(data));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default addStars;