import { connect, dispatch } from 'react-redux';
import Carousel from '../../components/outfits/Carousel';

var mapStoreToProps = (state) => ({
  relatedProducts: state.relatedProducts,
});

var CarouselContainer = connect(mapStoreToProps, null)(Carousel);

export default CarouselContainer;