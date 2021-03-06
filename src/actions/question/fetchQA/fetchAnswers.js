import TOKEN from '../../../../config.js';
import store from '../../../store/store.js';
import axios from 'axios';
import showQuestions from './showQuestions.js';


export const fetchAnswers = () => {
  return (dispatch) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/11001/answers', {
      headers: {
        'AUTHORIZATION': TOKEN
      }
    })
    .then(response => {
      const answers = response.data
      dispatch(showAnswers(answers.results))
    })
    .catch(error => {
      console.error(error)
    })
  }
}