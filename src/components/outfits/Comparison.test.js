const React = require('react');
const {shallow} = require('enzyme');
const toJson = require('enzyme-to-json');

const Comparison = require('./Comparison.jsx').default;

const sampleProduct = require('../../../sample-data/products/get-productId.json');
const currentProduct = require('../../../sample-data/products/get-productId.json');

describe('Comparison', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Comparison product={sampleProduct} currentProduct={currentProduct}/>);
  });

  it('should render Comparison with correct class', () => {
    expect(wrapper.find('.table-product')).toBeTruthy();
  });

  it('Comparison Snapshot', () => {
    expect(toJson.default(wrapper)).toMatchSnapshot();
  });
  // to update snapshot, run 'npm test -- -u' in terminal
});