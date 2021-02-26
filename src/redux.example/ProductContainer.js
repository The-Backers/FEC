//Make sure to import connect, dispatch from react-redux
// you also need to import any actions your container might need to dispatch as well as the component that will hold these props/actions
import { connect, dispatch } from 'react-redux';
import changeStyle from './productAction';
import Product from './Product.jsx';


//map store to props is how we pass down props from the store into the component
//state is refering to the initial state of the store which we specify when we create the store.
var mapStoreToProps = (state) => ({
    style: state.currStyle,
});

// map dispatch allows us to create functions that will be passed down to the component.
// if this function needs to change the state within the store, then it should dispatch the specific action that handles that state change.
var mapDispatchToProps = (dispatch) => {
  return {
    //handleStyleChange is the function that will be available as a prop to the component. This function wants to handle a change in state within the store:
    // it does this by calling dispatch to changeStyle
    handleStyleChange: () =>
      dispatch(changeStyle())
  };
};

// this is where we create the connection between our container and component:
// overall, this 'Product' component will have two props
//1. the prop called 'style' which will have the value of currStyle held within the sore
//2. the function called handleStyleChange which dispatches an action to eventually change the state of the store through the reducer.
var ProductContainer = connect(mapStoreToProps, mapDispatchToProps)(Product);

// export default ProductContainer;