// import other actions you want to take place after the product has been changed
import setProduct from './overview/setProduct.js';
import fetchStyles from './overview/fetchStyles.js';
import fetchRelated from './outfits/fetchRelated.js';
import fetchReviews from './reviews/fetchReviews.js';
import fetchReviewMeta from './reviews/fetchReviewMeta.js';
import setGalleryIndex from './overview/setGalleryIndex.js'
import setRelatedIndex from './outfits/setRelatedIndex.js'
import {store} from '../store/store.js';
import thunk from 'redux-thunk';
import axios from 'axios';
import removeLocationHash from './removeHash';

var handleProductSelect = (productId) => {



  var isOnLandingPage = store.getState().changePage;
  if (isOnLandingPage === false) {
   parent.location.hash = `${productId}`;

  } else {
    var isOnLandingPage = store.getState().changePage;
    window.location.hash = '';
    removeLocationHash()
  }

  return (dispatch) => {

    return axios.get(`/products/${productId}`)
    .then(({data}) => {
      dispatch(setProduct(data));
      console.log(window.location)
    })
    .then(() => {
      dispatch(fetchRelated(dispatch));
      dispatch(setRelatedIndex(0));
    })
    .then(() => {
       dispatch(fetchStyles(productId));
       dispatch(setGalleryIndex(0))
    })
    .then(() => {
      dispatch(fetchReviews(productId));

   })
   .then(() => {
    dispatch(fetchReviewMeta(productId));

 })
    .catch((err) => {
      console.log(err);
    })
  }

};


export default handleProductSelect;
