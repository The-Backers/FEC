var showProducts = (product) => {
  console.log('this is the product', product)
  return {
  type: 'SHOW_PRODUCT',
  product: product

}}


export default showProducts;