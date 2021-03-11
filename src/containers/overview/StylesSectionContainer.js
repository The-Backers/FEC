import { connect, dispatch } from 'react-redux';
import StylesSection from '../../components/overview/StylesSection';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';
import handleProductSelect from '../../actions/handleProductSelect';
import setCurrentStyle from '../../actions/overview/setCurrentStyle';
import setGalleryIndex from '../../actions/overview/setGalleryIndex';

var mapStoreToProps = (state) => ({
  product: state.product,
  styles: state.currentStyles,
  skus: state.skus,
  currentStyle: state.currentStyle,
});

var mapDispatchToProps = (dispatch) => ({
  changeCurrentStyle: (style) => {
    dispatch(setCurrentStyle(style))
  },
  changeIndex: (index) => {
    dispatch(setGalleryIndex(index))
  },

});

var StylesSectionContainer = connect(mapStoreToProps, mapDispatchToProps)(StylesSection);

export default StylesSectionContainer;