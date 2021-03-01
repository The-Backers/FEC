// this is where Tests for App.jsx go!
const React = require('react');
const {shallow} = require('enzyme');

const Gallery = require('./Gallery').default;

// example test using shallow render
describe('Gallery', () => {
  it('should render Gallery with correct text', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text() === 'Hello World!').not.toBeTruthy();
  });
});
