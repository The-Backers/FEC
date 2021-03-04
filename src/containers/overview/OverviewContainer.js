import { connect, dispatch } from 'react-redux';
import expandGallery from '../../actions/overview/expandGallery';
import Overview from '../../components/overview';

var mapStoreToProps = (state) => ({
    product: state.product,
    expand: state.expand,
});

var mapDispatchToProps = (dispatch) => ({
    expandGallery: (boolean) => {
      dispatch(expandGallery(boolean))
    }
});

var OverviewContainer = connect(mapStoreToProps, mapDispatchToProps)(Overview);

export default OverviewContainer;