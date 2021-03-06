import { connect, dispatch } from 'react-redux';
import expandGallery from '../../actions/overview/expandGallery';
import DefaultGallery from '../../components/overview/DefaultGallery';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';


var mapStoreToProps = (state) => ({
    product: state.product,
    expand: state.expand,
    styles: state.currentStyles
});

var mapDispatchToProps = (dispatch) => ({
    expandGallery: (boolean) => {
      dispatch(expandGallery(boolean))
    },
});

var DefaultGalleryContainer = connect(mapStoreToProps, mapDispatchToProps)(DefaultGallery);

export default DefaultGalleryContainer;