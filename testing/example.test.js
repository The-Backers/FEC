const React = require('react');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

// example component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

// importing a component would look like this:
// const App = require('../src/components/App').default;

// example test using shallow render
describe('App', () => {
  test('should render App with correct text', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text() === 'Hello World!').toBeTruthy;
  });
});

