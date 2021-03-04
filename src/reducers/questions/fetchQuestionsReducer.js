import Redux from 'redux';


var fetchQuestionsReducer = (state={}, action) => {
  console.log('this is the action payload: ', action.payload)
  if (action.type === 'SHOW_QUESTIONS') {
    return Object.assign({}, state, {
      payload: action.payload
    })
  } else {
    return state;
  }
};

export default fetchQuestionsReducer;