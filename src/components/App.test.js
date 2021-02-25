const React = require('react');
const { shallow, mount, render, configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

const App = require('./App');
console.log('this is app!', App);

function setup() {
  const wrapper = render(<App />);
  return wrapper;
};

describe('App', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });
});
