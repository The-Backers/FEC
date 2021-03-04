// this is where Tests for App.jsx go!
const React = require('react');
const {shallow, mount} = require('enzyme');
// if using snapshots, you also need this line!
const toJson = require('enzyme-to-json');
import Stars from '../shared/stars.jsx';

const DefaultGallery = require('./DefaultGallery').default;

// example test using shallow render

describe('DefaultGallery', () => {
  it('should render DefaultGallery with an interaction section(stars component, interaction body div)', () => {
    const wrapper = shallow(<DefaultGallery />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('#overview-body')).toBeTruthy();
    expect(wrapper.find('.overview-body-interaction')).toBeTruthy();
  }),
  it('should render DefaultGallery children with star component', () => {
    const wrapper = mount(<DefaultGallery />);
    expect(wrapper.find(Stars)).toBeTruthy();
    expect(wrapper.find(Stars).props().total).toBe('3.6');
  });
});