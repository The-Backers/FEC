import setStyles from './setStyles';
import store from '../../store/store.js'
import thunk from 'redux-thunk';
import axios from 'axios';
import TOKEN from '../../../config.js';
import setCurrentStyle from './setCurrentStyle';
import setSku from './setSku.js';
import setQuantity from './setQuantity';

var fetchStyles = (productId) => {

  return (dispatch) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productId}/styles`, {
    headers: {
      'AUTHORIZATION': TOKEN
    }
  }).then(({data}) => {
    dispatch(setStyles(data));
    return data;


  }) .then((data) => {
    let alreadyDispatched = false;
     data.results.map((style, i) => {
      if (style["default?"]) {
        alreadyDispatched = true;
        dispatch(setCurrentStyle(data.results[i]));
        dispatch(setSku(data.results[i].skus))

      } else if (!alreadyDispatched && i === data.results.length - 1) {
        dispatch(setCurrentStyle(data.results[0]))
        dispatch(setSku(data.results[0].skus))
      }

    })
  }).catch((err) => {
    console.log(err);
  })
  }

}


export default fetchStyles;