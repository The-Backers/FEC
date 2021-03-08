// this is where Tests for App.jsx go!
const React = require('react');
const {shallow, mount} = require('enzyme');
const toJson = require('enzyme-to-json');

const App = require('./App').default;

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render App with correct id', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#overall-container')).toBeTruthy();
  });

  it('App Snapshot', () => {
    const wrapper = shallow(<App />)
    expect(toJson.default(wrapper)).toMatchSnapshot();
  });
  // to update snapshot, run 'npm test -- -u' in terminal
});