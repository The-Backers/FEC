import Redux from 'redux';

var fetchOutfitReducer = (state=[], action) => {
  if (action.type === 'SHOW_OUTFIT') {
    return [...state].concat(action.outfits)
  } else if (action.type === 'REMOVE_OUTFIT') {
    let outfitsList = state.slice();
    outfitsList.splice(action.index, 1);
    return outfitsList;
  } else {
    return state;
  }
};

export default fetchOutfitReducer;