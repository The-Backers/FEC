import { connect, dispatch } from 'react-redux';
import expandGallery from '../../actions/overview/expandGallery';
import ExpandedGallery from '../../components/overview/ExpandedGallery';


var mapStoreToProps = (state) => ({
  currentStyle: state.currentStyle,
  index: state.currentGalleryIndex
});

var mapDispatchToProps = (dispatch) => ({
  collapseGallery: (boolean) => {
    dispatch(expandGallery(boolean))
  },
});

var ExpandedGalleryContainer = connect(mapStoreToProps, mapDispatchToProps)(ExpandedGallery);

export default ExpandedGalleryContainer;