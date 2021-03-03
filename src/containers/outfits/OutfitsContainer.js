import { connect, dispatch } from 'react-redux';
import getRelated from '../../actions/outfits/fetchRelated';
import Outfits from '../../components/outfits';

var mapStoreToProps = (state) => ({
  relatedProducts: state.relatedProducts,
});

var mapDispatchToProps = (dispatch) => ({
    getProducts: () => {
      dispatch(getRelated)
    }
});

var OutfitsContainer = connect(mapStoreToProps, mapDispatchToProps)(Outfits);

export default OutfitsContainer;