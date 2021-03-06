import Redux from 'redux';

var fetchOutfitReducer = (state=[], action) => {
  if (action.type === 'SHOW_OUTFIT') {
    return action.outfits || [];
  } else {
    return state;
  }
};

export default fetchOutfitReducer;