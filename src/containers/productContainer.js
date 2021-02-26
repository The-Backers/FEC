import { connect, dispatch } from 'react-redux';
import changeStyle from '../actions/productAction';
import ProductTest from '../components/productTest.jsx';



var mapStoreToProps = (state) => ({

    style: state.currStyle,


});

var mapDispatchToProps = (dispatch) => {
  return {

    handleStyleChange: () =>

      dispatch(changeStyle())

  };
};

var ProductContainer = connect(mapStoreToProps, mapDispatchToProps)(ProductTest);

export default ProductContainer;