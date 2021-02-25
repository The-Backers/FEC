const React = require('react');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

const App = require('./App').default;

describe('App', () => {
  it('should render', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
    // expect(wrapper.text()).to.equal('Hello World!'); // doesn't work?
  });
});
