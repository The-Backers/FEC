const getFeatures = require('./utils.js').default;

const sampleProduct = require('../../../sample-data/products/get-productId.json').features;
const currentProduct = require('../../../sample-data/products/get-productId.json').features;

describe('getFeatures', () => {

  it('should render the correct result', () => {
    let actualResult = getFeatures(sampleProduct, currentProduct);
    let expectedResult = [
      {
        "currentProduct": "Canvas",
        "feature": "Fabric",
        "product": "Canvas",
      },
      {
        "currentProduct": "Brass",
        "feature": "Buttons",
        "product": "Brass",
      },
    ]
    expect(actualResult).toEqual(expectedResult);
  });

});