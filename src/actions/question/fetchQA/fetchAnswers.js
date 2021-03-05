import TOKEN from '../../../../config.js';
import store from '../../../store/store.js';
import axios from 'axios';
//import showProducts from './showProducts.js';


// answers:  GET /qa/questions/:question_id/answers
// eg: https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/11001/answers

export const fetchAnswers = () => {
  return (dispatch) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/11001/answers', {
      headers: {
        'AUTHORIZATION': TOKEN
      }
    })
    .then(response => {
      const questions = response.data
      dispatch(showAnswers(questions))
    })
    .catch(error => {
      console.error(error)
    })
  }
}