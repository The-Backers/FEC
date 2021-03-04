import React from 'react';

import QuestionSearch from './QuestionSearch.jsx'
import Questions from './Questions.jsx'
import Answers from './Answers.jsx'

import AddQuestion from './AddQuestion.jsx'

const QuestionPart = () =>(
  <div className="parent-questions">
    <div className="questions-search-bar">
      <QuestionSearch />
    </div>

    <br />

    <Questions />
    <Answers />


    <br />
    <button>MORE ANSWERED QUESTION</button>
    <button>ADD A QUESTION</button>


  </div>
)

export default QuestionPart;





// import React from 'react';

// const Questions = () =>(
//   <div className="parent-questions">
// <div className="questions-search-bar"></div>
// <div className='questions-accordion'>
// </div>
//   </div>
// )

// export default Questions;