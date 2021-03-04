import { connect, dispatch } from 'react-redux';
import expandGallery from '../../actions/overview/expandGallery';
import Overview from '../../components/overview';
import setProduct from '../../actions/overview/setProduct';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';
import handleProductSelect from '../../actions/handleProductSelect';

var mapStoreToProps = (state) => ({
    product: state.product,
    expand: state.expand,
    styles: state.currentStyles
});

var mapDispatchToProps = (dispatch) => ({
    expandGallery: (boolean) => {
      dispatch(expandGallery(boolean))
    },
    fetchProduct: (productId) => {
      dispatch(handleProductSelect(productId))
    }
});

var OverviewContainer = connect(mapStoreToProps, mapDispatchToProps)(Overview);

export default OverviewContainer;