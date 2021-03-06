import TOKEN from '../../../../config.js';
import store from '../../../store/store.js';
import axios from 'axios';
import showQuestions from './showQuestions.js';



export const fetchQuestions = () => {
  return (dispatch) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/?product_id=11001', {
      headers: {
        'AUTHORIZATION': TOKEN
      }
    })
    .then(response => {
      const questions = response.data
      dispatch(showQuestions(questions.results))
    })
    .catch(error => {
      console.error(error)
    })
  }
}




















