import { connect, dispatch } from 'react-redux';
import expandGallery from '../../actions/overview/expandGallery';
import DefaultGallery from '../../components/overview/DefaultGallery';


var mapStoreToProps = (state) => ({
  reviewMeta: state.reviewMeta

});

var mapDispatchToProps = (dispatch) => ({
    expandGallery: (boolean) => {
      dispatch(expandGallery(boolean))
    },
    fetchProduct: (productId) => {
      dispatch(fetchProduct(productId))
    }
});

var DefaultGalleryContainer = connect(mapStoreToProps, mapDispatchToProps)(DefaultGallery);

export default DefaultGalleryContainer;