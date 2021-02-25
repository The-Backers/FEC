// this is where Tests for App.jsx go!
const React = require('react');
const {shallow} = require('enzyme');

const App = require('./App').default;

// example test using shallow render
describe('App', () => {
  it('should render App with correct text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text() === 'Hello World!').not.toBeTruthy();
  });
});

// look at example.test.js for a more in depth example!
