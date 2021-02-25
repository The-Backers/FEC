import React from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-nyc/reviews?product_id=2',
      headers: {'Authorization': API_KEY}
    })
    .then((result) => {this.setState({value: result.data})})
    .catch(this.setState({value: "It didn't work, sad"}))
  }

  render() {
    return (
      <div>
        <h1>API Test</h1>
          <p>{JSON.stringify(this.state.value)}</p>
      </div>


    );
  }
}

export default App;