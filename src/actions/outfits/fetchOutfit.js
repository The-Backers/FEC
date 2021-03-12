import axios from 'axios';
import mapRelated from './mapRelated.js';
import showOutfit from './showOutfit.js';
import {store} from '../../store/store.js'
import thunk from 'redux-thunk';

var fetchOutfit = (productId, dispatch) => {
  return dispatch => {
    const outfits = store.getState().outfits;
    for (let item of outfits) {
      if (item.id === Number(productId)) {
        return;
      }
    }
    dispatch(mapRelated(dispatch, [productId], true))
  }
}

export default fetchOutfit;