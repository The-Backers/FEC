var setSku = (skus) => {

  let arrOfSkus = [];
  for (const sku in skus) {
    skus[sku].sku = sku;
    arrOfSkus.push(skus[sku])
  }

  return {
  type: 'SET_SKU',
  payload: arrOfSkus
}}


export default setSku;