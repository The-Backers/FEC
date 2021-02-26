import Redux from 'redux';
import products from '../../sample-data/products/get-productId-styles.json'

// This is an example of how to create a reducer:

// Make sure we are following naming convention:
//append Reducer to the end of our variable name
var currentProductReducer = (state={}, action) => {
  // You can use if/else statements or switch statements to match the action type.
  if (action.type === 'CHANGE_STYLE') {
    return action.style || null; //this process acts as set state
  } else {
    // always return original state in the else block!
    return state;
  }

};

export default currentProductReducer;