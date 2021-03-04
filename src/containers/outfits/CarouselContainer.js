import { connect, dispatch } from 'react-redux';
import Carousel from '../../components/outfits/Carousel';
import handleProductSelect from '../../actions/handleProductSelect';

var mapStoreToProps = (state) => ({
  relatedProducts: state.relatedProducts,
});

var mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => {
    dispatch(handleProductSelect(productId))
  }
});

var CarouselContainer = connect(mapStoreToProps, mapDispatchToProps)(Carousel);

export default CarouselContainer;