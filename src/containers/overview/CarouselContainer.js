import { connect, dispatch } from 'react-redux';
import Carousel from '../../components/overview/Carousel';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';
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
    changeCurrentStyle: (style) => {
      dispatch(setCurrentStyle(style))
    },
    changeIndex: (index) => {
      dispatch(setGalleryIndex(index))
    }

});
var CarouselContainer = connect(mapStoreToProps, mapDispatchToProps)(Carousel);

export default CarouselContainer;