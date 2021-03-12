import { connect, dispatch } from 'react-redux';
import LandingPage from '../../components/overview/LandingPage';
import viewMainPage from '../../actions/overview/viewMainPage';
import handleProductSelect from '../../actions/handleProductSelect';

var mapStoreToProps = (state) => ({
  currentView: state.changePage,

})

var mapDispatchToProps = (dispatch) => ({
  changeView: (boolean) => {
    dispatch(viewMainPage(boolean))
  },
  changeProduct: (productId) => {
    dispatch(handleProductSelect(productId))
  }

});

var LandingPageContainer = connect(mapStoreToProps, mapDispatchToProps)(LandingPage);

export default LandingPageContainer;