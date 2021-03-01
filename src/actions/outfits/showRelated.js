var showRelated = (relatedProducts) => {
  console.log('these are the related products', relatedProducts)
  return {
  type: 'SHOW_RELATED',
  relatedProducts: relatedProducts
}}

export default showRelated;