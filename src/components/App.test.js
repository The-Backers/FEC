// this is where Tests for App.jsx go!
const React = require('react');
const enzyme = require('enzyme');

const App = require('./App').default;

// example test using shallow render
describe('App', () => {
  test('should render App with correct text', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text() === 'Hello World!').not.toBeTruthy();
  });
});
