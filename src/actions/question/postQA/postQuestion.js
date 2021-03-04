import TOKEN from '../../../config.js';
import axios from 'axios';
//import showProducts from './showProducts.js';
import store from '../../store/store.js';



// Adds a question for the given product, send a POST request, POST /qa/questions
export const postQuestions = () => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions', {
    headers: {
      'AUTHORIZATION': TOKEN
    },
    data: {
      body:'Text of question being asked',
      name:'Username for question asker',
      email: 'Email address for question asker',
      product_id: 'integer	Required ID of the Product for which the question is posted'

    }
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.error(error)
  })

}