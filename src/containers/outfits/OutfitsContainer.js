import { connect, dispatch } from 'react-redux';
import fetchRelated from '../../actions/outfits/fetchRelated';
import Outfits from '../../components/outfits';

var mapStoreToProps = (state) => ({
  relatedProducts: state.relatedProducts,
});

var mapDispatchToProps = (dispatch) => ({
    fetchRelated: () => {
      dispatch(fetchRelated)
    }
});

var OutfitsContainer = connect(mapStoreToProps, mapDispatchToProps)(Outfits);

export default OutfitsContainer;