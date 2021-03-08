var setSku = (skus) => {

  let arrOfSkus = [];
  for (const sku in skus) {

    arrOfSkus.push([skus[sku], sku])
  }

  return {
  type: 'SET_SKU',
  payload: arrOfSkus
}}


export default setSku;