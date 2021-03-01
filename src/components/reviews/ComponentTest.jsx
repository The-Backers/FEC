import React from 'react';
import Stars from '../shared/Stars.jsx'

class ComponentTest extends React.Component {
  constructor(props){
    super(props);
  }







  render() {
    return (
      <div >
        <div id = 'outer' >hello</div>
          <div id = 'overlay'>
                  <form id = 'text'>
                      <input type = 'text'></input>
                  </form>
          </div>

          <Stars />
      </div>
    );
  }
}

export default ComponentTest