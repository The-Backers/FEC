import Redux from 'redux';

var viewMainPageReducer = (state= false, action) => {
  if (action.type === 'VIEW_MAIN_PAGE') {
    return action.payload
  } else {
  return state;
  }
};


export default viewMainPageReducer;