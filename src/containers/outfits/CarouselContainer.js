import { connect, dispatch } from 'react-redux';
import Carousel from '../../components/outfits/Carousel';
import handleProductSelect from '../../actions/handleProductSelect';
import fetchOutfit from '../../actions/outfits/fetchOutfit.js';
import removeOutfit from '../../actions/outfits/removeOutfit.js';

var mapStoreToProps = (state) => ({
  relatedProducts: state.relatedProducts,
  currentProduct: state.product,
  outfitProducts: state.outfits
});

var mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => {
    dispatch(handleProductSelect(productId))
  },
  addToOutfit: (productId) => {
    dispatch(fetchOutfit(productId))
  },
  removeOutfit: (productId) => {
    dispatch(removeOutfit(productId))
  }
});

var CarouselContainer = connect(mapStoreToProps, mapDispatchToProps)(Carousel);

export default CarouselContainer;