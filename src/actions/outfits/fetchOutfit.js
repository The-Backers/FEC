import TOKEN from '../../../config.js';
import axios from 'axios';
import mapRelated from './mapRelated.js';
import store from '../../store/store.js'
import thunk from 'redux-thunk';

var fetchOutfit = (dispatch) => {
  // parse cookies, get an array of product id's
  // then
    // dispatch(mapRelated(dispatch, data, true))

  // TEST
  return dispatch => {
    let data = [11012, 11013, 11014, 11015];
    dispatch(mapRelated(dispatch, data, true))
  }
}

export default fetchOutfit;