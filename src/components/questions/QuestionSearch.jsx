// import React from 'react';

// class QuestionSearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: ''
//     }
//   }

//   onChange (e) {
//     this.setState({
//       term: e.target.value
//     });
//   }

//   search() {
//     this.props.onSearch(this.state.term);
//   }

//   render() {
//     return (
//     <div>
//       QUESTION & ANSWERS
//       <br />
//       <input value={this.state.terms} onChange={this.onChange.bind(this)}/>
//       <button onClick={this.search.bind(this)}> Search </button>
//     </div>)
//   }
// }

// export default QuestionSearch;


// ========
import React from 'react'

const QuestionSearch = () => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div>
      QUESTION & ANSWERS
      <br />
      <input style={BarStyling} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." type='search' />
      <button > Search </button>
    </div>
  )
}



export default QuestionSearch;