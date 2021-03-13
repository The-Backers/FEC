const React = require('react');
const {shallow, mount} = require('enzyme');
const toJson = require('enzyme-to-json');
const ExpandedGallery = require('./ExpandedGallery').default;

describe('ExpandedGallery', () => {
  it('should render ExpandedGallery with no interaction section', () => {
    const wrapper = shallow(<ExpandedGallery />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('#overview-body-expanded')).toBeTruthy();
    expect(wrapper.find('#overview-body')).toEqual({});

  })
});

