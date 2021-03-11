import { connect, dispatch } from 'react-redux';
import MainPage from '../../components/overview/MainPage';
import viewMainPage from '../../actions/overview/viewMainPage';



var mapDispatchToProps = (dispatch) => ({
  changeView: (boolean) => {
    dispatch(viewMainPage(boolean))
  },
});

var MainPageContainer = connect(null, mapDispatchToProps)(MainPage);

export default MainPageContainer;