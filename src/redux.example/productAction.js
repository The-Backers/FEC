import products from '../../sample-data/products/get-productId-styles.json';

// Actions should always return an object with a key value of type
var changeStyle = () => ({
  // Make sure we are following naming convention and capitilizing the entire string as well as using underscores to replace spaces.
  type: 'CHANGE_STYLE',
  style: products.results[2]
});

// export default changeStyle;