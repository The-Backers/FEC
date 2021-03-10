const React = require('react');
const {shallow, mount} = require('enzyme');
const toJson = require('enzyme-to-json');

const RelatedItems = require('./index.js').default;

describe('RelatedItems', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RelatedItems />);
  });

  it('should render RelatedItems with correct class', () => {
    expect(wrapper.find('.related-products')).toBeTruthy();
  });

  it('RelatedItems Snapshot', () => {
    expect(toJson.default(wrapper)).toMatchSnapshot();
  });
  // to update snapshot, run 'npm test -- -u' in terminal
});