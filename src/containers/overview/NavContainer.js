import { connect, dispatch } from 'react-redux';
import handleProductSelect from '../../actions/handleProductSelect';
import viewMainPage from '../../actions/overview/viewMainPage';
import Nav from '../../components/overview/Nav';


var mapStoreToProps = (state) => ({
  product: state.product,
  currentView: state.changePage
});

var mapDispatchToProps = (dispatch) => ({
  changeView: (boolean) => {
    dispatch(viewMainPage(boolean))
},
  fetchProduct: (productId) => {
    dispatch(handleProductSelect(productId))
  }
});

var NavContainer = connect(mapStoreToProps, mapDispatchToProps)(Nav);

export default NavContainer;