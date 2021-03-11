import { connect, dispatch } from 'react-redux';
import SizeDropDown from '../../components/overview/SizeDropDown';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';
import handleProductSelect from '../../actions/handleProductSelect';
import setCurrentSku from '../../actions/overview/setCurrentSku';
import fetchOutfit from '../../actions/outfits/fetchOutfit.js';
import setQuantity from '../../actions/overview/setQuantity';
import checkoutAction from '../../actions/overview/checkoutAction';


var mapStoreToProps = (state) => ({
  product: state.product,
  styles: state.currentStyles,
  skus: state.skus,
  selectedSku: state.selectedSku,
  quantity: state.quantity
});

var mapDispatchToProps = (dispatch) => ({
  checkedOut: () => {
    dispatch(checkoutAction())
  },
  setQuantity: (array) => {
    dispatch(setQuantity(array))
  },
  setSku: (sku) => {
    dispatch(setCurrentSku(sku))
  },
  fetchOutfit: (productId) => {
    dispatch(fetchOutfit(productId))
  }
});

var SizeDropDownContainer = connect(mapStoreToProps, mapDispatchToProps)(SizeDropDown);

export default SizeDropDownContainer;