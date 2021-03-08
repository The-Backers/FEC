const React = require('react');
const {shallow, mount} = require('enzyme');
const toJson = require('enzyme-to-json');

const ProductCard = require('./ProductCard.jsx').default;

const sampleProduct = require('../../../sample-data/products/get-productId.json');
sampleProduct.stylePhoto = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
sampleProduct.total = 3.7;
const currentProduct = require('../../../sample-data/products/get-productId.json');
currentProduct.stylePhoto = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
currentProduct.total = 4.7;
var index = 0;

describe('ProductCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductCard product={sampleProduct} currentProduct={currentProduct} index={index}/>);
  });

  it('should render ProductCard with correct class', () => {
    expect(wrapper.find('.product-card')).toBeTruthy();
  });

  it('ProductCard Snapshot', () => {
    expect(toJson.default(wrapper)).toMatchSnapshot();
  });
  // to update snapshot, run 'npm test -- -u' in terminal

});

describe('ProductCard Clicks', () => {
  it('should fire function fetchProduct when different parts of outfit card are clicked', () => {
    let mockFetchProduct = jest.fn();
    let wrapper = mount(<ProductCard product={sampleProduct} currentProduct={currentProduct} index={index} fetchProduct={mockFetchProduct}/>);

    wrapper.find('.product-category').simulate('click');
    wrapper.find('.product-image').simulate('click');
    wrapper.find('.product-name').simulate('click');
    wrapper.find('.product-price').simulate('click');
    // wrapper.find('.product-rating').simulate('click');
    expect(mockFetchProduct.mock.calls.length).toBe(4);
  });

});

describe('Remove Outfit Click', () => {
  it('should fire removeOutfit when x is clicked on outfit card', () => {
    let mockRemoveOutfit = jest.fn();
    let wrapper = mount(<ProductCard product={sampleProduct} currentProduct={currentProduct} index={index} removeOutfit={mockRemoveOutfit} outfits={true}/>);

    wrapper.find('.outfits-x').simulate('click');
    expect(mockRemoveOutfit.mock.calls.length).toBe(1);
  });

});