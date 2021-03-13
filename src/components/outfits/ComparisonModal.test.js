const React = require('react');
const {shallow, mount} = require('enzyme');
const toJson = require('enzyme-to-json');
const ComparisonModal = require('./ComparisonModal.jsx').default;

describe('ComparisonModal', () => {
  let wrapper;
  var product = {id: 'test'};

  beforeEach(() => {
    wrapper = shallow(<ComparisonModal product={product}/>);
  });

  it('should render ComparisonModal with correct class', () => {
    expect(wrapper.find('.comparison-modal')).toBeTruthy();
  });

  it('ComparisonModal Snapshot', () => {
    expect(toJson.default(wrapper)).toMatchSnapshot();
  });
  // to update snapshot, run 'npm test -- -u' in terminal

  // enzyme can't test hooks!!
  xit('should fire setIsOpen when clicked', () => {
    wrapper.find('.comparison-modal').simulate('click');
    wrapper.find('.modal-close').simulate('click');
  });
});

