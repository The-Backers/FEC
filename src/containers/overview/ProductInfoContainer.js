import { connect, dispatch } from 'react-redux';
import expandGallery from '../../actions/overview/expandGallery';
import ProductInfo from '../../components/overview/ProductInfo';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';



var mapStoreToProps = (state) => ({
  product: state.product,
  currentStyle: state.currentStyle,
});


var ProductInfoContainer = connect(mapStoreToProps, null)(ProductInfo);

export default ProductInfoContainer;