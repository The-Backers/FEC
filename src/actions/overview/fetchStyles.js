import setStyles from './setStyles';
import store from '../../store/store.js'
import thunk from 'redux-thunk';
import axios from 'axios';
import TOKEN from '../../../config.js';
import setCurrentStyle from './setCurrentStyle';

var fetchStyles = (productId) => {

  return (dispatch) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productId}/styles`, {
    headers: {
      'AUTHORIZATION': TOKEN
    }
  }).then(({data}) => {
    dispatch(setStyles(data));
    data.results.map((style, i) => {
      if (style["default?"]) {
        return dispatch(setCurrentStyle(style))
      }
    })
  }).catch((err) => {
    console.log(err);
  })
  }

}


export default fetchStyles;