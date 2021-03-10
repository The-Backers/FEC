import { connect, dispatch } from 'react-redux';
import StylesSection from '../../components/overview/StylesSection';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';
import handleProductSelect from '../../actions/handleProductSelect';
import setCurrentStyle from '../../actions/overview/setCurrentStyle';
import setGalleryIndex from '../../actions/overview/setGalleryIndex';
import setQuantity from '../../actions/overview/setQuantity';
import setCurrentSku from '../../actions/overview/setCurrentSku'

var mapStoreToProps = (state) => ({
  product: state.product,
  styles: state.currentStyles,
  skus: state.skus,
  currentStyle: state.currentStyle,
  selectedSku: state.selectedSku
});

var mapDispatchToProps = (dispatch) => ({
  setSku: (sku) => {
    dispatch(setCurrentSku(sku))
  },
  changeCurrentStyle: (style) => {
    dispatch(setCurrentStyle(style))
  },
  changeIndex: (index) => {
    dispatch(setGalleryIndex(index))
  },
  setQuantity: (array) => {
    dispatch(setQuantity(array))
  },

});

var StylesSectionContainer = connect(mapStoreToProps, mapDispatchToProps)(StylesSection);

export default StylesSectionContainer;