// just type npm test in your terminal to run every test file! (test files should be in the format <componentName>.test.js)

// copy and paste these lines every time!
const React = require('react');
const {shallow, mount} = require('enzyme');
// if using snapshots, you also need this line!
const toJson = require('enzyme-to-json');

// importing a component would look like this:
// const App = require('../src/components/App').default;

// example component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <div id="hello">Hello World!</div>
        <Test user={this.props.user}/>
        <p>Testing snapshots!</p>
      </React.Fragment>
    );
  }
}

// child component of App
const Test = () => (
  <div>Testing Test!</div>
);

// mocking props with fake data
const user = {
  name: "nastassia fulconis",
  email: "testytesttest@test.test",
  username: "nas",
};

describe('App', () => {

  // example test using shallow rendering (for testing components by themselves, doesn't render child components, https://enzymejs.github.io/enzyme/docs/api/shallow.html)
  it('should render App with correct text', () => {
    // renders component
    const wrapper = shallow(<App />);

    // if there is error message in the component, this test will not pass
    expect(wrapper.state("error")).toEqual(undefined);
     // finds by id
    expect(wrapper.find('#hello')).toBeTruthy();
    // checks html text
    expect(wrapper.find('#hello').text()).toBe('Hello World!');
  });

  // example test using mount (mounts component to the DOM, can test interaction between components https://enzymejs.github.io/enzyme/docs/api/mount.html)
  it('should render App children with correct text', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Test)).toBeTruthy();
    expect(wrapper.find(Test).text()).toBe('Testing Test!');
  });

  // example of test you might do regarding props
  it('should accept props for App and children components', () => {
    const wrapper = mount(<App user={user} />);
    expect(wrapper.props().user).toEqual(user);
    expect(wrapper.find(Test).props().user).toEqual(user);
  });

  // example of snapshot test (snapshots make sure your UI doesn't change unexpectedly by comparing an original snapshot of your HTML to the current version, https://jestjs.io/docs/en/snapshot-testing)
  it('testing snapshots', () => {
    const wrapper = shallow(<App />)
    expect(toJson.default(wrapper)).toMatchSnapshot();
  });
  // to update snapshot, run 'npm test -- -u' in terminal
});
