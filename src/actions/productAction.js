import products from '../../sample-data/products/get-productId-styles.json';


var changeStyle = () => ({
  type: 'CHANGE_STYLE',
  style: products.results[2]
});

export default changeStyle;