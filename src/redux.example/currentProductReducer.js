import Redux from 'redux';
import products from '../../sample-data/products/get-productId-styles.json'

// This is an example of how to create a reducer:

// Make sure we are following naming convention:
//append Reducer to the end of our variable name
var currentProductReducer = (state={}, action) => {
  // You can use if/else statements or switch statements to match the action type.
  // We never wanna mutate the original state so instead we use Object.assign or the spread operator
  //https://redux.js.org/recipes/troubleshooting
  if (action.type === 'CHANGE_STYLE') {
    return Object.assign({}, state, {
      currStyle: action.style
    }); //this process acts as set state
  } else {
    // always return original state in the else block!
    return state;
  }

};

export default currentProductReducer;