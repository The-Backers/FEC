import TOKEN from '../../../config.js';
import axios from 'axios';
//import showProducts from './showProducts.js';
import store from '../../store/store.js';



// Adds answer


Add an Answer
Adds an answer for the given question

POST /qa/questions/:question_id/answers

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to post the answer for
Body Parameters

Parameter	Type	Description
body	text	Text of question being asked
name	text	Username for question asker
email	text	Email address for question asker
photos	[text]	An array of urls corresponding to images to display