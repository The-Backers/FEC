import { connect, dispatch } from 'react-redux';
import Carousel from '../../components/outfits/Carousel';
import handleProductSelect from '../../actions/handleProductSelect';
import fetchOutfit from '../../actions/outfits/fetchOutfit.js';
import removeOutfit from '../../actions/outfits/removeOutfit.js';
import setOutfitsIndex from '../../actions/outfits/setOutfitsIndex';
import setRelatedIndex from '../../actions/outfits/setRelatedIndex';

var mapStoreToProps = (state) => ({
  relatedProducts: state.relatedProducts,
  currentProduct: state.product,
  outfitProducts: state.outfits,
  outfitsCarouselIndex: state.outfitsCarouselIndex,
  relatedCarouselIndex: state.relatedCarouselIndex,
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
  },
  changeOutfitsIndex: (index) => {
    dispatch(setOutfitsIndex(index))
  },
  changeRelatedIndex: (index) => {
    dispatch(setRelatedIndex(index))
  }
});

var CarouselContainer = connect(mapStoreToProps, mapDispatchToProps)(Carousel);

export default CarouselContainer;