import TOKEN from '../../../config.js';
import axios from 'axios';
import store from '../../store/store.js'
import thunk from 'redux-thunk';

var removeOutfit = (productId) => {
  var index = 0;
  const outfits = store.getState().outfits;
  for (let i = 0; i < outfits.length; i++) {
    if (outfits[i].id === Number(productId)) {
      index = i;
    }
  }
  return {
    type: 'REMOVE_OUTFIT',
    index: index
  }
}

export default removeOutfit;