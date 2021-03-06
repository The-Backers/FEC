import { connect, dispatch } from 'react-redux';
import expandGallery from '../../actions/overview/expandGallery';
import ExpandedGallery from '../../components/overview/ExpandedGallery';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';



var mapStoreToProps = (state) => ({
  product: state.product,
  expand: state.expand,
  styles: state.currentStyles
});

var mapDispatchToProps = (dispatch) => ({
  collapseGallery: (boolean) => {
    dispatch(expandGallery(boolean))
  },
});

var ExpandedGalleryContainer = connect(mapStoreToProps, mapDispatchToProps)(ExpandedGallery);

export default ExpandedGalleryContainer;