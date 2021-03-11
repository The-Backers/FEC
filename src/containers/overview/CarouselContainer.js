import { connect, dispatch } from 'react-redux';
import Carousel from '../../components/overview/Carousel';
import setGalleryIndex from '../../actions/overview/setGalleryIndex';

var mapStoreToProps = (state) => ({
    product: state.product,
    styles: state.currentStyle,
    index: state.currentGalleryIndex
});

var mapDispatchToProps = (dispatch) => ({
    expandGallery: (boolean) => {
      dispatch(expandGallery(boolean))
    },
    changeIndex: (index) => {
      dispatch(setGalleryIndex(index))
    }

});
var CarouselContainer = connect(mapStoreToProps, mapDispatchToProps)(Carousel);

export default CarouselContainer;