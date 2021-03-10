import axios from 'axios';
import TOKEN from '../../../config.js';

// both the element and the widget have to be strings!
const logInteraction = (element, widget) => {
  const time = JSON.stringify(new Date());

  let data = {
    element,
    widget,
    time,
  };

  axios.post("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/interactions", data, {
    headers: {'AUTHORIZATION': TOKEN}
  })
    .then(() => {
      console.log('interaction successfully logged!');
    })
    .catch((err) => {
      console.err(err);
    });
}

export default logInteraction;