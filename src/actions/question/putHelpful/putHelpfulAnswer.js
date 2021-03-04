
import TOKEN from '../../../config.js';
import axios from 'axios';
//import showProducts from './showProducts.js';
import store from '../../store/store.js';





// Mark answer as helpful

Mark Answer as Helpful
Updates an answer to show it was found helpful.

PUT /qa/answers/:answer_id/helpful

Parameters

Parameter	Type	Description
answer_id	integer	Required ID of the answer to update