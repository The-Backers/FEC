import Redux from 'redux';
import showQuestions from '../actions/question/fetchQA/showQuestions'
// import showAnswers from '../actions/question/fetchQA/showQuestions'

const iniQuestionState = {
  questions: []
}
var questionsPratReducer = (state = iniQuestionState, action) => {
  switch (action.type) {
    case 'SHOW_QUESTIONS':
      return {
        ...state,
        questions: action.questions
      }
    default : return state
  }

};

export default questionsPratReducer;