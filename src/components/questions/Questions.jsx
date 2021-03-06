import React, {useState} from 'react';
import showQuestions from '../../actions/question/fetchQA/showQuestions.js'
import store from '../../store/store.js'



const Questions = () => {

  return (
    <div>

      Hello this is Questions!
      Helpful? <button> YES() </button> |
      <button> Add Answer</button>

    </div>
  );
}

export default Questions;