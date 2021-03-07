import { connect, dispatch } from 'react-redux';
import expandGallery from '../../actions/overview/expandGallery';
import DefaultGallery from '../../components/overview/DefaultGallery';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';
import setCurrentStyle from '../../actions/overview/setCurrentStyle';


var mapStoreToProps = (state) => ({
    product: state.product,
    expand: state.expand,
    styles: state.currentStyles,
    currentStyle: state.currentStyle
});

var mapDispatchToProps = (dispatch) => ({
    expandGallery: (boolean) => {
      dispatch(expandGallery(boolean))
    },
    changeCurrentStyle: (style) => {
      dispatch(setCurrentStyle(style))
    }
});

var DefaultGalleryContainer = connect(mapStoreToProps, mapDispatchToProps)(DefaultGallery);

export default DefaultGalleryContainer;