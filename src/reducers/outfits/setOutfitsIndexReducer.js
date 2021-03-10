import Redux from 'redux';

var setOutfitsIndexReducer = (state = 0, action) => {
  if (action.type === 'SET_OUTFITS_INDEX') {
    return action.index || 0
  } else {
  return state;
  }
};

export default setOutfitsIndexReducer;