
import { connect, dispatch } from 'react-redux';
import handleDemoButton from '../../actions/overview/fetchProducts';
import Overview from '../../components/overview';



var mapStoreToProps = (state) => ({
    product: state.product,
});

var mapDispatchToProps = (dispatch) => ({
    demoButton: () => {
      dispatch(handleDemoButton)
    }



});

var OverviewContainer = connect(mapStoreToProps, mapDispatchToProps)(Overview);

export default OverviewContainer;