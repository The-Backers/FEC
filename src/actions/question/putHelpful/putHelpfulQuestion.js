
import TOKEN from '../../../config.js';
import axios from 'axios';
//import showProducts from './showProducts.js';
import store from '../../store/store.js';



// Makr question as helpful

Mark Question as Helpful
Updates a question to show it was found helpful.

PUT /qa/questions/:question_id/helpful

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to update