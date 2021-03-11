import { connect, dispatch } from 'react-redux';
import expandGallery from '../../actions/overview/expandGallery';
import Overview from '../../components/overview';
import setProduct from '../../actions/overview/setProduct';
import handleProductSelect from '../../actions/handleProductSelect';
import viewMainPage from '../../actions/overview/viewMainPage';

var mapStoreToProps = (state) => ({
    product: state.product,
    expand: state.expand,
});

var mapDispatchToProps = (dispatch) => ({
  changeView: (boolean) => {
    dispatch(viewMainPage(boolean))
  },
    expandGallery: (boolean) => {
      dispatch(expandGallery(boolean))
    },
    fetchProduct: (productId) => {
      dispatch(handleProductSelect(productId))
    }
});

var OverviewContainer = connect(mapStoreToProps, mapDispatchToProps)(Overview);

export default OverviewContainer;