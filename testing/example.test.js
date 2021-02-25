// copy and paste these lines every time!
const React = require('react');
const enzyme = require('enzyme');

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

// example test using shallow rendering (for testing components by themselves, https://enzymejs.github.io/enzyme/docs/api/shallow.html)
describe('App', () => {
  test('should render App with correct text', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text()).toBe('Hello World!');
  });
});

// example test using mount (mounts component to the DOM, https://enzymejs.github.io/enzyme/docs/api/mount.html)

// example test using render (generates HTML and tests for structure, https://enzymejs.github.io/enzyme/docs/api/render.html)
