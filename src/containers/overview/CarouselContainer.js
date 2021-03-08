import { connect, dispatch } from 'react-redux';
import Carousel from '../../components/overview/Carousel';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';


var mapStoreToProps = (state) => ({
    product: state.product,
    styles: state.currentStyles
});

var mapDispatchToProps = (dispatch) => ({
    expandGallery: (boolean) => {
      dispatch(expandGallery(boolean))
    },
    changeCurrentStyle: (style) => {
      dispatch(setCurrentStyle(style))
    }
});
var CarouselContainer = connect(mapStoreToProps, mapDispatchToProps)(Carousel);

export default CarouselContainer;