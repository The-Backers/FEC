import { connect, dispatch } from 'react-redux';
import Carousel from '../../components/overview/Carousel';
import setStyles from '../../actions/overview/setStyles';
import fetchStyles from '../../actions/overview/fetchStyles';


var mapStoreToProps = (state) => ({
    product: state.product,
    styles: state.currentStyles
});


var CarouselContainer = connect(mapStoreToProps)(Carousel);

export default CarouselContainer;