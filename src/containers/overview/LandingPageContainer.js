import { connect, dispatch } from 'react-redux';
import LandingPage from '../../components/overview/LandingPage';
import viewMainPage from '../../actions/overview/viewMainPage';

var mapStoreToProps = (state) => ({
  currentView: state.changePage
})

var mapDispatchToProps = (dispatch) => ({
  changeView: (boolean) => {
    dispatch(viewMainPage(boolean))
  },

});

var LandingPageContainer = connect(mapStoreToProps, mapDispatchToProps)(LandingPage);

export default LandingPageContainer;