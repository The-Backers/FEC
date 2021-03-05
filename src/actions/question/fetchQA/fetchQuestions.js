import TOKEN from '../../../../config.js';
import store from '../../../store/store.js';
import axios from 'axios';
import showQuestions from './showQuestions.js';



// Questions:
//   the basic format of a questions API request should look like
//   this 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/?product_id=11001'

//   like with reviews, you can't make a request for questions without first specifying the product id as a query parameter

//   as before, you can use query paramaters to set count and page

//   in order to get the answers to a specific question, you need to add the question id to the end of the request,
//   followed by 'answers' (i.e. 'qa/questions/47542/answers')

//   you need the question id in order to get answers
//   answers can also use query paramaters to set count and page


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




















