import { connect, dispatch } from 'react-redux';
import viewMainPage from '../actions/overview/viewMainPage';
import App from '../components/App.jsx';


var mapStoreToProps = (state) => ({
  viewMainPage: state.changePage
});
var mapDispatchToProps = (dispatch) => ({
  changeView: (boolean) => {
    dispatch(viewMainPage(boolean))
  },
});

var AppContainer = connect(mapStoreToProps, mapDispatchToProps)(App);

export default AppContainer;