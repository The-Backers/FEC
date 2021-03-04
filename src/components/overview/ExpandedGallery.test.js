// this is where Tests for App.jsx go!
const React = require('react');
const {shallow, mount} = require('enzyme');
// if using snapshots, you also need this line!
const toJson = require('enzyme-to-json');

const ExpandedGallery = require('./ExpandedGallery').default;

// example test using shallow render
describe('ExpandedGallery', () => {
  it('should render ExpandedGallery with no interaction section', () => {
    const wrapper = shallow(<ExpandedGallery />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('#overview-body-expanded')).toBeTruthy();
    expect(wrapper.find('#overview-body')).toEqual({});

  })
});

